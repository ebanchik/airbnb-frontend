  export function RoomsIndex(props) {
      return (
        <div>
          <h1>All rooms</h1>
           {props.rooms.map((room) => (
             <div key={room.id}>
               <h2>{room.id}</h2>
               <p>{room.user_id}</p>
               <p>{room.address}</p>
               <p>{room.city}</p>
               <p>{room.state}</p>
               <p>{room.price}</p>
               <p>{room.description}</p>
               <p>{room.home_type}</p>
               <p>{room.room_type}</p>
               <p>{room.total_occupancy}</p>
               <p>{room.total_bedrooms}</p>
               <p>{room.total_bathrooms}</p>
             </div>
           ))}
        </div>
      );
    }