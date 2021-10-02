import './Modal.css'
import { useRef, useEffect, useState } from 'react';

const Modal = ({ handleClose, show, children }) => {

  const [showHideClassName, setShowHideClassName] = useState("modal" + (show ? " display-block" : " display-none"));

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // setShowHideClassName("modal display-none");
          handleClose();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const innerRef = useRef(null);
  useOutsideAlerter(innerRef);
  return (
    <div className={showHideClassName} >
      <section className="modal-main rounded max-w-sm md:max-w-lg" ref={innerRef}>
        <div className="flex flex-row justify-end p-2 text-bold font-xl">
          <span onClick={handleClose} className="font-bold cursor-pointer">x</span>
        </div>
        <div className="flex p-1">{children}</div>
        {/* <button type="button" onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
  );
};

export default Modal;

