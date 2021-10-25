import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import  "leaflet-polylinedecorator"
import $ from 'jquery';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Chat({ socket, username}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [truckList, setTruckList] = useState([]);
  const [markers, setMarkers] = useState({});
  const [map, setMap] = useState(null);
  if (truckList === []){
    socket.emit("TRUCKS");
  }

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        message: currentMessage,
        name: username
      };

      await socket.emit("CHAT", messageData);
    }
  };

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Body>
          <Card.Title>Camión {card.code}</Card.Title>
          <Card.Text>Origen: {card.origin}</Card.Text>
          <Card.Text>Destino: {card.destination}</Card.Text>
          <Card.Text>Estado: {card?.states}</Card.Text>
          {card?.states !== "Ok" && <Button onClick={Arreglar(card?.code)} variant="primary">Arreglar</Button>}
        </Card.Body>
      </Card>
    );
  };

  function Arreglar(codigo){
    const datito = {
      code: codigo
    };
    socket.emit("FIX", datito);
  }

  useEffect(() => {
    socket.on("POSITION", (data) => {
      if (truckList.length){
        let clonedArray = JSON.parse(JSON.stringify(truckList));
        for (var i=0; i<=truckList.length; i++) {
          if (clonedArray[i]?.code === data.code){
            clonedArray[i].position = data.position;
            if (markers.length){
              let clonedMarkers = JSON.parse(JSON.stringify(markers));
            }
            let clonedMarkers = {};
            var L = window.L;
            clonedMarkers[data.code] = L.marker(data.position).addTo(map);
            setMarkers(clonedMarkers);
            setTruckList(clonedArray);
          }
        }  
      }  
    });
  }, [truckList, markers]);

  /* useEffect(() => {
    socket.on("FIX", (data) => {
      if (truckList.length){
        let clonedArray = JSON.parse(JSON.stringify(truckList));
        for (var i=0; i<=truckList.length; i++) {
          if (clonedArray[i]?.code === data.code){
            clonedArray[i].states = "Ok";
            setTruckList(clonedArray);
          }
        }  
      }  
    });
  }, [truckList]);

  useEffect(() => {
    socket.on("FAILURE", (data) => {
      if (truckList.length){
        let clonedArray = JSON.parse(JSON.stringify(truckList));
        for (var i=0; i<=truckList.length; i++) {
          if (clonedArray[i]?.code === data.code){
            clonedArray[i].states = data.source;
            setTruckList(clonedArray);
          }
        }  
      }
    });
  }, [truckList]); */

  useEffect(() => {
    socket.on("CHAT", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("TRUCKS", (data) => {
      var L = window.L;
      var num = 1;
      data.forEach(function (element) {
        element.states = "Ok";
      });
      setTruckList(data);
      truckList.forEach(function(par_od)  {
        var arrow = L.polyline([
          par_od.origin,
          par_od.destination
        ], {}).addTo(map);
        L.polylineDecorator(arrow, {
          patterns: [
            {offset: '10%', repeat: '30%',  symbol: L.Symbol.arrowHead({pixelSize: 15, pathOptions: {fillOpacity: 1, weight: 0}})}
          ]
        }).addTo(map); 
        if (num === 1){
          map.panTo(new L.LatLng(par_od.origin[0],par_od.origin[1]));
          num = 2;
        }
      });
    });
  }, [truckList]);

  return (
    <>
      <MapContainer center={[-33.27, -70.4]} zoom={10} whenCreated={setMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={username === messageContent.name ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="date">{messageContent.date}</p>
                      <p id="name">{messageContent.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
      <div class="card-group" id="cardis">
        {truckList.map(renderCard)}
      </div>
    </>
  );
}

export default Chat;
