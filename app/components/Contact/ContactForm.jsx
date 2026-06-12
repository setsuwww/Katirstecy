"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import settings from "../../constants/settings.json";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Semua field wajib diisi.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email harus valid.");
      return;
    }

    const whatsappMessage = `Hello Rifqi,

Nama: ${name}
Email: ${email}
Subject: ${subject}

Pesan:
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${settings.contact.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-[10px] uppercase tracking-[0.2em] text-olive-400 font-semibold ml-1"
        >
          {settings.contact.form.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={settings.contact.form.namePlaceholder}
          className="w-full placeholder-olive-400 text-olive-600 bg-olive-100 border border-olive-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-olive-400 focus:ring-2 focus:ring-lime-600 focus:bg-white transition-all duration-300 font-serif italic"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-[10px] uppercase tracking-[0.2em] text-olive-400 font-semibold ml-1"
        >
          {settings.contact.form.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={settings.contact.form.emailPlaceholder}
          className="w-full placeholder-olive-400 text-olive-600 bg-olive-100 border border-olive-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-olive-400 focus:ring-2 focus:ring-lime-600 focus:bg-white transition-all duration-300"
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label
          htmlFor="subject"
          className="text-[10px] uppercase tracking-[0.2em] text-olive-400 font-semibold ml-1"
        >
          {settings.contact.form.subjectLabel}
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={settings.contact.form.subjectPlaceholder}
          className="w-full placeholder-olive-400 text-olive-600 bg-olive-100 border border-olive-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-olive-400 focus:ring-2 focus:ring-lime-600 focus:bg-white transition-all duration-300 font-serif italic"
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label
          htmlFor="message"
          className="text-[10px] uppercase tracking-[0.2em] text-olive-400 font-semibold ml-1"
        >
          {settings.contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={settings.contact.form.messagePlaceholder}
          className="w-full placeholder-olive-400 text-olive-600 bg-olive-100 border border-olive-300 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-olive-400 focus:ring-2 focus:ring-lime-600 focus:bg-white transition-all duration-300 resize-none font-serif italic"
        />
      </div>

      <div className="md:col-span-2 pt-4">
        <button
          type="submit"
          className="group flex items-center gap-3 bg-linear-to-b from-olive-700 to-olive-600 text-white ring ring-olive-700 border-t border-olive-400 hover:from-olive-600 hover:to-olive-500 px-4 py-2 lg:px-6 lg:py-3 rounded-md shadow-lg hover:shadow-yellow-800/20 transition-colors"
        >
          <span className="text-xs tracking-wide font-medium">
            {settings.contact.form.submitLabel}
          </span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
