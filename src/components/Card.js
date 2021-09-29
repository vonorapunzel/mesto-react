function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 
  return(
    <>
      <button className="element__trash" type="button"></button>
      <img className="element__image" onClick={handleClick} src={props.card.link} alt={props.card.name}/>
      <div className="element__signature">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__container">
          <button className="element__like" type="button"></button>
          <p className="element__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </>
  )
}

export default Card;