"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        ".modal-backdrop",
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        ".modal-content",
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" }
      );
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div
        className="modal-backdrop absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="modal-content relative w-full max-w-4xl bg-[#F2F2EB] rounded-sm shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-neutral-800" />
        </button>

        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
