export function ReviewsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Leave a Review of Your Stay</h1>
      <form onSubmit={handleSubmit}>
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