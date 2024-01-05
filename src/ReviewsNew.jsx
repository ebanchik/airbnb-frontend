export function ReviewsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Leave a Review of Your Stay</h2>
        <div>
          Rating: <input name="rating" type="text" />
        </div>
        <div>
          Comments: <input name="comment" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}