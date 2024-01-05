export function ReviewsIndex(props) {
  return (
    <div>
      <h1>Reviews</h1>
       {props.reviews.map((review) => (
         <div key={review.id}>
          <h1>{review.rating} Stars</h1>
           <p>{review.comment}</p>
         </div>
       ))}
    </div>
  );
}