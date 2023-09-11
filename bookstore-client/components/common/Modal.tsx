import { ModalProps } from "@/interface";
import React from "react";
import "animate.css";

function Modal({ openModal, closeModal, children }: ModalProps) {
  return (
    <>
      {openModal && (
        <div
          className="w-full animate__animated animate__fadeIn h-screen absolute cursor-pointer top-0 flex flex-col items-center justify-center bg-white/20"
          onClick={closeModal}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Modal;
