  export function RoomsIndex(props) {
      return (
        <div>
          <h1>All Rooms</h1>
           {props.rooms.map((room) => (
             <div key={room.id}>
              <h2>{room.home_type}</h2>
               {/* <p>{room.address}</p> */}
               <p><strong>{room.city}, {room.state}</strong></p>
               <p><em>${room.price}.00 / night</em></p>
               {/* <p>{room.description}</p> */}
               {/* <p>{room.home_type}</p> */}
               {/* <p>{room.room_type}</p> */}
               <p>Occupancy: {room.total_occupancy}</p>
               <p>Beds: {room.total_bedrooms}</p>
               <p>Baths: {room.total_bathrooms}</p>
               <button onClick={() => props.onShowRoom(room)}>More info</button>
             </div>
           ))}
        </div>
      );
    }