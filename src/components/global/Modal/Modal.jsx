import './Modal.css'
import { useRef, useEffect, useState } from 'react';

const Modal = ({ handleClose, show, children }) => {

  const classes = {
    modalShown: 'fixed top-0 left-0 w-full h-full block',
    modalHidden: 'fixed top-0 left-0 w-full h-full hidden',
    modalMain: 'fixed bg-white w-4/5 h-auto rounded max-w-sm md:max-w-lg',
    closeX: 'flex flex-row justify-end p-2 text-bold font-xl',
    spanX: 'font-bold cursor-pointer',
    childrenClass: 'flex p-1'
  };

  // const [showHideClassName, setShowHideClassName] = useState("modal" + (show ? " display-block" : " display-none"));

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
    <div className={classes.modalShown} >
      <section className={classes.modalMain} ref={innerRef}>
        <div className={classes.closeX}>
          <span onClick={handleClose} className={classes.spanX}>x</span>
        </div>
        <div className={classes.childrenClass}>{children}</div>
        {/* <button type="button" onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
  );
};

export default Modal;

