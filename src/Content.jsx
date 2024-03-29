import { RoomsIndex } from "./RoomsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { RoomsShow } from "./RoomsShow";
import { ReviewsIndex } from "./ReviewsIndex";
import { Signup } from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ReviewsNew} from "./ReviewsNew";


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

    // comment out when backend is updated w reviews
const reviews =[
  {id: 1, rating: 5, comment: "was lit"},
  {id: 2, rating: 4, comment: "overpriced but nice room"},
];    

const handleIndexReviews = () => {
  console.log("handleIndexReviews");
  axios.get("http://localhost:3000/reviews.json").then((response) => {
    console.log(response.data);
    setReviews(response.data);
  });
};
  

const handleCreateReview = (params, successCallback) => {
  console.log("handleCreateReview", params);
  axios.post("http://localhost:3000/reviews.json", params).then((response) => {
    setReviews([...reviews, response.data]);
    successCallback();
  });
};
  

   useEffect(handleIndexRooms, []);
   useEffect(handleIndexReviews, []);


    return (
      <div>
       <Login />
       <Signup />
       <LogoutLink />
       <RoomsIndex rooms={rooms} onShowRoom = {handleShowRoom}></RoomsIndex>
       <Modal show ={isRoomsShowVisible} onClose = {handleClose}>
       <RoomsShow room = {currentRoom}/>
       </Modal>
       <ReviewsNew onCreateReview={handleCreateReview}/>
       <ReviewsIndex reviews={reviews}/>
      </div>
    );
  }