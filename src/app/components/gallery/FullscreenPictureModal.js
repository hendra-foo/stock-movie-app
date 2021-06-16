import ReactDOM from "react-dom";
import classes from "./gallery.module.scss";

const FullscreenPictureModal = ({ src, alt, open, handleClose }) => {
  const container = document.body;

  return (
    open &&
    ReactDOM.createPortal(
      <div className={classes.fullscreenPictureModal} onClick={handleClose}>
        <img src={src} alt={alt} />
      </div>,
      container,
    )
  );
};

export default FullscreenPictureModal;
