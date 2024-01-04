export function RoomsShow(props) {
  return (
   <div>
    <h1>Room Info</h1>
      <p>{props.room.id}</p>
      <p>{props.room.user_id}</p>
      <p>{props.room.address}</p>
      <p>{props.room.city}</p>
      <p>{props.room.state}</p>
      <p>{props.room.price}</p>
      <p>{props.room.description}</p>
      <p>{props.room.home_type}</p>
      <p>{props.room.props_type}</p>
      <p>{props.room.total_occupancy}</p>
      <p>{props.room.total_bedrooms}</p>
      <p>{props.room.total_bathrooms}</p>
    </div>
  );
}