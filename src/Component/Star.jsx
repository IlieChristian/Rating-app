const Star = ({ star, rating, hover, ratingClick, hoverEnter }) => {
  return (
    <span
      className={`star ${star <= (hover || rating) ? 'active' : ''}`}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={() => hoverEnter(0)}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
