import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";

export default function RatingForm({ saveRating }) {
  const [rating, setRating] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setMounted(true);
  }, [])

  const submitRating = () => {
    const outOf5 = rating;
    saveRating({
      score: outOf5,
      review: comment,
    });
  };

  return (
    <div className="tile is-child ">
      <article className="media box">
        <figure className="media-left">
          {mounted && <Rating onClick={setRating} ratingValue={rating} />}
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Add your review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button" onClick={submitRating}>
                Post Rating
              </button>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
