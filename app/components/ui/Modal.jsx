"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-backdrop absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="modal-content relative w-full max-w-4xl bg-[#F2F2EB] rounded-sm shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh] transition-all duration-300 transform scale-100 opacity-100">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-neutral-800" />
        </button>

        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
