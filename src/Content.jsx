import { RoomsIndex } from "./RoomsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { RoomsShow } from "./RoomsShow";
import { ReviewsIndex } from "./ReviewsIndex";


  export function Content() {


const [rooms, setRooms] = useState([]);
const [isRoomsShowVisible, setIsRoomsShowVisible] = useState(false);
const [currentRoom, setCurrentRoom] = useState ({});

   const handleIndexRooms = () => {
     console.log("handleIndexRooms");
     axios.get("http://localhost:3000/rooms.json").then((response) => {
       console.log(response.data);
       setRooms(response.data);
     });
   };

const handleShowRoom = (room) => {
  console.log("handleShowRoom", room);
  setIsRoomsShowVisible(true);
  setCurrentRoom(room);
};


  const handleClose = () => {
      console.log("handleClose");
      setIsRoomsShowVisible(false);
    };

const reviews =[
  {id: 1, rating: 5, comment: "was lit"},
  {id: 2, rating: 4, comment: "overpriced but nice room"},
];    

   useEffect(handleIndexRooms, []);


    return (
      <div>
       <RoomsIndex rooms={rooms} onShowRoom = {handleShowRoom}></RoomsIndex>
       <Modal show ={isRoomsShowVisible} onClose = {handleClose}>
       <RoomsShow room = {currentRoom}/>
       </Modal>
       <ReviewsIndex reviews={reviews}/>
      </div>
    );
  }