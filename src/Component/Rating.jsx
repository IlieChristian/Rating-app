import Star from './Star';
import { useState } from 'react';
import Modal from './Modal';
const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const feedbackMesseges = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];
  const [submitted, setSubmitted] = useState(false);
  const handleChange = () => {
    setSubmitted((prevSubmitted) => !prevSubmitted);
  };
  const closeModal = () => {
    setRating(0);
    setHover(null);
    setSubmitted((prevSubmitted) => !prevSubmitted);
  };
  return (
    <>
      <div className="rating-container">
        <h2>How do you feel about React?</h2>
        <div className="stars">
          {stars.map((item) => (
            <Star
              key={item}
              star={item}
              rating={rating}
              hover={hover}
              ratingClick={setRating}
              hoverEnter={setHover}
              hoverLeave={() => setHover(null)}
            />
          ))}
        </div>
        {rating > 0 && (
          <p className="feedback">{feedbackMesseges[rating - 1]}</p>
        )}
        <button
          className="submit-btn"
          onClick={handleChange}
          disabled={rating === 0}
        >
          Submit
        </button>
        {submitted && <Modal rating={rating} closeModal={closeModal} />}
      </div>
    </>
  );
};

export default Rating;
