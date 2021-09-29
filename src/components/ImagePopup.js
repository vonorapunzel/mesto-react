function ImagePopup(props) {
  return(
    <>
      <div className={`popup popup_image-open ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup__container-image">
          <button className="popup__exit popup__exit_exit-image" onClick={props.onClose} type="button"></button>
          <img className="popup__image popup__image_image-card" src={props.card.link} alt={props.card.name}/>
          <h2 className="popup__title-image popup__title-image_title-card">{props.card.name}</h2>
        </div>
      </div>
    </>
  )
}

export default ImagePopup