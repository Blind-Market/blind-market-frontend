import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function ImageModal({ show, onClose, children, title }: any) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [closeButtonEffect, setCloseButtonEffect] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div id="default-carousel" className="relative" data-carousel="static">
      <div className="fixed h-56 overflow-hidden rounded-lg md:h-96">
        <div className="fixed top-0 left-0 bottom-0 min-h-screen w-full h-full flex justify-center items-center bg-opacity-20 bg-black">
          <div className="bg-white max-w-xl max-h-screen min-w-min min-h-min rounded-2xl p-4">
            <div className="pt-3">
              {children}
              <button
                onClick={handleCloseClick}
                className={`${
                  closeButtonEffect && "animate-wiggle"
                } bg-red-500 text-white rounded hover:bg-red-700 hover:shadow-xl lg:inline-flex lg:w-auto px-3 py-2 font-bold uppercase my-2`}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className="flex">{modalContent}</div>,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
}

export default ImageModal;
