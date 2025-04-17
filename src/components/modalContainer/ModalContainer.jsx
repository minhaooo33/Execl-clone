import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ModalContainer({ children, open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  return createPortal(
<dialog
  ref={dialogRef}
  onClose={onClose}
  onClick={(e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  }}
  className="modal-dialog"
>
     <aside className="modal-aside">
      {children}
      </aside>
    </dialog>,
    document.getElementById("portal-root")
  );
}