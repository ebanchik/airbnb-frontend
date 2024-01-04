import { RoomsIndex } from "./RoomsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { RoomsShow } from "./RoomsShow";


  export function Content() {
    const rooms = [
      {id: 1, user_id: 2, address: "123 main st", city: "Chicago", state: "IL", price: 300, description: "king", home_type: "hotel", room_type: "king", total_occupancy: 4, total_bedrooms: 1, total_bathrooms: 1},
      {id: 2, user_id: 3, address: "123 main st", city: "San Diego", state: "CA", price: 350, description: "hut", home_type: "beach hut", room_type: "double", total_occupancy: 4, total_bedrooms: 1, total_bathrooms: 1}
     ];


    //  web request not working yet - need api 
// const [rooms, setRooms] = useState([]);
const [isRoomsShowVisible, setIsRoomsShowVisible] = useState(false);
const [currentRoom, setCurrentRoom] = useState ({});

//    const handleIndexRooms = () => {
//      console.log("handleIndexRooms");
//      axios.get("http://localhost:3000/rooms.json").then((response) => {
//        console.log(response.data);
//        setRooms(response.data);
//      });
//    };

const handleShowRoom = (room) => {
  console.log("handleShowRoom", room);
  setIsRoomsShowVisible(true);
  setCurrentRoom(room);
};


  const handleClose = () => {
      console.log("handleClose");
      setIsRoomsShowVisible(false);
    };

  //  useEffect(handleIndexRooms, []);


    return (
      <div>
       <RoomsIndex rooms={rooms} onShowRoom = {handleShowRoom}></RoomsIndex>
       <Modal show ={isRoomsShowVisible} onClose = {handleClose}>
       <RoomsShow room = {currentRoom}/>
       </Modal>
      </div>
    );
  }