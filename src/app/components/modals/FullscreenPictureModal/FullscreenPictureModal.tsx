import React from "react";
import ReactDOM from "react-dom";
import classes from "./fullscreenPictureModal.module.scss";

type FullscreenPictureModalProps = {
  src: string;
  alt: string;
  open: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const FullscreenPictureModal = ({
  src,
  alt,
  open,
  onClose,
}: FullscreenPictureModalProps): JSX.Element | null => {
  const container = document.body;

  return open
    ? ReactDOM.createPortal(
        <div className={classes.root} onClick={onClose} data-testid="modal-root">
          <img src={src} alt={alt} data-testid="modal-img" />
        </div>,
        container,
      )
    : null;
};

export default FullscreenPictureModal;
