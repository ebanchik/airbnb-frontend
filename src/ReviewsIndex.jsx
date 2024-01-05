export function ReviewsIndex(props) {
  return (
    <div>
      <h1>Reviews</h1>
       {props.reviews.map((review) => (
         <div key={review.id}>
          <h2>{review.rating} Stars</h2>
           <p>{review.comment}</p>
         </div>
       ))}
    </div>
  );
}