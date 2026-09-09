"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import PaperStackCard from "../PaperStackCard";
import settings from "../../constants/settings.json";
import ContactForm from "./ContactForm";
import ContactPen from "./ContactPen";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-olive-200/50"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label={settings.contact.section.label}
          title={settings.contact.section.title}
          subtitle={settings.contact.section.subtitle}
        />

        <div className="max-w-3xl mx-auto relative">
          <div>
            <PaperStackCard
              className="w-full"
              innerClassName="p-8 md:p-16 flex flex-col gap-12"
            >
              <ContactForm />
            </PaperStackCard>
          </div>

          <ContactPen />
        </div>
      </div>
    </section>
  );
};

export default Contact;
