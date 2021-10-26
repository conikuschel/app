import React, { useEffect, useState} from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import  "leaflet-polylinedecorator";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Chat({ socket, username}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [truckList, setTruckList] = useState({});
  const [truckList2, setTruckList2] = useState([]);
  const [markers, setMarkers] = useState({});
  const [map, setMap] = useState(null);
  const [cont, setCont] = useState(1);

  if (truckList === {}){
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
    let origencito;
    let destini;
    if (card.states !== "Ok"){
      var colorcito = "#ffb3b3";
    } else{
      var colorcito = "#d6f5d6";
    }
    //const response = await fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=ZVuZaJ5AAntG5DdAHPWaAraaLz5VznEi&location=${card?.origin[0]},${card?.origin[1]}&outFormat=json&thumbMaps=false`).then((response) => response.json())
    //fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=ZVuZaJ5AAntG5DdAHPWaAraaLz5VznEi&location=${card?.origin[0]},${card?.origin[1]}&outFormat=json&thumbMaps=false`).then((response) => response.json()).then((data) => origencito = data.results[0].locations[0].adminArea5)
    //fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=ZVuZaJ5AAntG5DdAHPWaAraaLz5VznEi&location=${card?.destination[0]},${card?.destination[1]}&outFormat=json&thumbMaps=false`).then((response) => response.json()).then((data) => destini = data.results[0].locations[0].adminArea5)
    return (
      <Card style={{ width: "18rem", background: colorcito}} key={index} className="box">
        <Card.Body>
          <Card.Title>Camión {card.code}</Card.Title>
          <Card.Text>Origen: {card.origin}</Card.Text>
          <Card.Text>Destino: {card.destination}</Card.Text>
          <Card.Text>Estado: {card?.states}</Card.Text>
          <Card.Text>Capacidad: {card.capacity}</Card.Text>
          <Card.Text>Engine: {card.engine}</Card.Text>
          <Card.Text>Staff: {JSON.stringify(card.staff[0], null, 4)}</Card.Text>
          <Card.Text>Truck: {card.truck}</Card.Text> 
          {card?.states !== "Ok" && <Button onClick={() => Arreglar(card?.code)} variant="primary">Arreglar</Button>}
        </Card.Body>
      </Card>
    );
  };

  const Arreglar = (codigo) => {
    const datito = {
      code: codigo
    };
    console.log("soyyo");
    console.log(codigo);
    socket.emit("FIX", datito);
  }

  useEffect(() => {
    socket.on("POSITION", (data) => {
      if (Object.keys(truckList).length){
        let clonedArray = truckList
        clonedArray[data.code].position = data.position;
        if (data.code in markers){
          markers[data.code].setLatLng(data.position);
        } else {
          let clonedMarkers = markers;
          var L = window.L;
          clonedMarkers[data.code] = L.marker(data.position).addTo(map).bindPopup(data.code);
          clonedMarkers[data.code].on('mouseover',function(ev) {
            clonedMarkers[data.code].openPopup();
          });
          setMarkers(clonedMarkers);
        }
        setTruckList(clonedArray);
      }  
    });
    return()=>{
    socket.off('POSITION')
    }
  }, [truckList, markers]);

  useEffect(() => {
    socket.on("FIX", (data) => {
      if (Object.keys(truckList).length){
        let clonedArray = truckList;
        if (clonedArray[data.code]?.states !== "Ok"){
          clonedArray[data.code].states = "Ok";
          setTruckList(clonedArray);
          console.log(clonedArray[data.code].states);
        }
      }  
    });
    return()=>{
    socket.off('FIX')
    }
  }, [truckList]);

  useEffect(() => {
    socket.on("FAILURE", (data) => {
      if (Object.keys(truckList).length){
        let clonedArray = truckList;
        if (clonedArray[data.code]?.states !== data.source){
          clonedArray[data.code].states = data.source;
          setTruckList(clonedArray);
          console.log(data);
        }
      }
    });
    return()=>{
    socket.off('FAILURE')
    }
  }, [truckList]);

  useEffect(() => {
    socket.on("CHAT", (data) => {
      setMessageList((list) => [...list, data]);
    });
    return()=>{
    socket.off('CHAT')
    }
  }, [socket]);

  useEffect(() => {
    socket.once("TRUCKS", (data) => {
      if (cont === 1){
        var listaca = {}
        data.forEach(function (element) {
          element.states = "Ok";
          listaca[element.code] = element;
        });
        setTruckList2(data);
        setTruckList(listaca);
        truckList2.forEach(function(par_od)  {
          var L = window.L;
          var arrow = L.polyline([
            par_od.origin,
            par_od.destination
          ], {}).addTo(map);
          L.polylineDecorator(arrow, {
            patterns: [
              {offset: '10%', repeat: '30%',  symbol: L.Symbol.arrowHead({pixelSize: 15, pathOptions: {fillOpacity: 1, weight: 0}})}
            ]
          }).addTo(map); 
          if (cont === 1){
            map.panTo(new L.LatLng(par_od.origin[0],par_od.origin[1]));
            setCont(2);
          }
        });
      } 
    });
    return()=>{
    socket.off('TRUCKS')
    }
  }, [truckList, truckList2, cont]);

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
          <p>Centro de Control</p>
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
                      <p id="date">{Date(messageContent.date).substring(0,21)}</p>
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
            placeholder="Escribe algo..."
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
        {Object.values(truckList).map(renderCard)}
      </div>
    </>
  );
}

export default Chat;