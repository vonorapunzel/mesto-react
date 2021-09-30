function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <>
      <button className="element__trash" type="button"></button>
      <img
        className="element__image"
        onClick={handleClick}
        src={card.link}
        alt={card.name}
      />
      <div className="element__signature">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container">
          <button className="element__like" type="button"></button>
          <p className="element__counter">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
