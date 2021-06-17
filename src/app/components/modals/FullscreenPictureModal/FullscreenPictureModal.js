import ReactDOM from "react-dom";
import classes from "./fullscreenPictureModal.module.scss";

const FullscreenPictureModal = ({ src, alt, open, handleClose }) => {
  const container = document.body;

  return (
    open &&
    ReactDOM.createPortal(
      <div className={classes.root} onClick={handleClose}>
        <img src={src} alt={alt} />
      </div>,
      container,
    )
  );
};

export default FullscreenPictureModal;
