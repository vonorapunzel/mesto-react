function PopupWithForm(props) {
  return(
    <>
      <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
          <div className="popup__container">
            <button className={`popup__exit popup__exit_exit-${props.name}`} onClick={props.onClose} type="button"></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" name={`${props.name}`} noValidate>
              {props.children}
              <button className="popup__button popup__button-create" type="submit">{props.button}</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default PopupWithForm;