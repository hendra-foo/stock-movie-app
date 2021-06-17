import ReactDOM from "react-dom";
import classes from "./fullscreenPictureModal.module.scss";

const FullscreenPictureModal = ({ src, alt, open, onClose }) => {
  const container = document.body;

  return (
    open &&
    ReactDOM.createPortal(
      <div className={classes.root} onClick={onClose} data-testid="modal-root">
        <img src={src} alt={alt} data-testid="modal-img" />
      </div>,
      container,
    )
  );
};

export default FullscreenPictureModal;
