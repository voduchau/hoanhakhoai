import { useEffect } from "react";

export const useOutsideModal = ({
  modalRef,
  setOpenModal,
  parentRef,
  exception,
}) => {
  useEffect(() => {
    function handleClickOutsideCategory(event) {
      if (
        exception &&
        exception.current !== event.target &&
        parentRef.current.contains(event.target)
      ) {
        return;
      }
      if (parentRef.current.contains(event.target)) return;

      if (modalRef.current && !modalRef.current.contains(event.target))
        setOpenModal(false);
    }
    document.addEventListener("mousedown", handleClickOutsideCategory);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCategory);
    };
  }, [modalRef]);
};
