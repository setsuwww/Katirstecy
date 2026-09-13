"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      e.target.value = "";
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Ukuran foto maksimal 5MB.");
      e.target.value = "";
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const previewUrl = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreview(previewUrl);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim() || !file) {
      alert("Lengkapi semua data dulu.");
      return;
    }

    try {
      setLoading(true);

      const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `${crypto.randomUUID()}.${fileExt}`;


      const { error: uploadError } = await supabase.storage
        .from("favorite-person")
        .upload(fileName, file, {
          contentType: file.type,
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }


      const { data: publicData } = supabase.storage
        .from("favorite-person")
        .getPublicUrl(fileName);

      const publicUrl = publicData?.publicUrl;

      if (!publicUrl) {
        throw new Error("Foto gagal diproses.");
      }


      const { error: insertError } = await supabase
        .from("favorite_people")
        .insert({
          name: name.trim(),
          description: description.trim(),
          photo_url: publicUrl,
        });

      if (insertError) {
        throw insertError;
      }


      alert(
        "Berhasil! Kamu sekarang masuk daftar orang favorit. ❤️"
      );

      resetForm();
    } catch {
      alert(
        "Maaf, terjadi kesalahan. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };


  const resetForm = () => {
    setName("");
    setDescription("");
    setFile(null);

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);
    setIsOpen(false);
  };


  const handleClose = () => {
    if (loading) {
      return;
    }

    resetForm();
  };


  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);


  return (
    <>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="w-full border-t border-black/10 bg-white text-olive-600">
        <div className="mx-auto flex max-w-350 flex-col px-6 py-12 md:px-12">

          {/* =================================================
              BRAND / LOGO
          ================================================= */}

          <div className="flex items-center">
            <div className="font-fondamento text-xl tracking-tight text-black">
              Katirstecu
            </div>
          </div>

          {/* =================================================
              FAVORITE PERSON
          ================================================= */}

          <div className="mt-6 lg:mt-10 max-w-xl">
            <p className="font-serif text-xl leading-relaxed text-black md:text-2xl">
              Gua lagi Sad {":("}
              <br />
              Kirim gua foto imut kalian, buat hibur gua, hehe
            </p>

            <p className="mt-3 text-sm text-black/50">
              Santai supabase gua premium
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-2 lg:mt-4 border border-black px-6 py-3 text-sm text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Coba Kirim
            </button>
          </div>

          {/* =================================================
              COPYRIGHT
          ================================================= */}

          <div className="mt-20 border-t border-black/10 pt-5">
            <p className="font-serif text-sm text-black/50">
              Copyright © 2026 Katirstecu
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white p-6 md:p-8">

            {/* =================================================
                CLOSE
            ================================================= */}

            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="absolute right-5 top-5 text-2xl leading-none text-black/40 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* =================================================
                HEADING
            ================================================= */}

            <div className="pr-8">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                One question
              </p>

              <h2 className="mt-2 font-serif text-2xl text-black md:text-3xl">
                Siapa kamu?
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-black/50">
                Ceritakan sedikit tentang diri kamu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="favorite-name"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Nama
                </label>

                <input
                  id="favorite-name"
                  type="text" value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dirman"
                  disabled={loading} maxLength={100}
                  autoComplete="name"
                  className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-black disabled:cursor-not-allowed disabled:bg-black/5"
                />
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div>
                <label
                  htmlFor="favorite-description"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Kata-kata
                </label>

                <textarea
                  id="favorite-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Kata-kata, apa aja bebas ..."
                  disabled={loading} maxLength={500}
                  rows={5}
                  className="w-full resize-none border border-black/15 bg-white px-4 py-3 text-sm leading-relaxed text-black outline-none transition-colors placeholder:text-black/30 focus:border-black disabled:cursor-not-allowed disabled:bg-black/5"
                />

                <p className="mt-1 text-right text-xs text-black/30">
                  {description.length}/500
                </p>
              </div>

              <div>
                <label htmlFor="favorite-photo"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Foto kamu
                </label>

                <input
                  id="favorite-photo"
                  type="file" accept="image/jpeg,image/png,image/webp"
                  onChange={handleFileChange} disabled={loading}
                  className="block w-full cursor-pointer border border-black/15 text-sm text-black file:mr-4 file:border-0 file:border-r file:border-black/15 file:bg-black/5 file:px-4 file:py-3 file:text-sm file:text-black hover:file:bg-black/10 disabled:cursor-not-allowed"
                />

                <p className="mt-2 text-xs text-black/40">
                  JPG, PNG, atau WebP · Maksimal 5MB
                </p>

                {/* =================================================
                    PREVIEW
                ================================================= */}

                {preview && (
                  <>
                    <div className="mt-4 overflow-hidden border border-black/10">
                      <img src={preview}
                        alt="Preview foto"
                        className="h-64 w-full object-cover"
                      />
                    </div>

                    <div className="p-2 mt-2 bg-red-100 text-xs text-red-600 border border-red-300">
                      Jangan ngirim foto aneh-aneh ah, Supabase gua mahal nanti Sia-sia.
                      ~Dirman
                    </div>
                  </>
                )}
              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button type="submit"
                disabled={loading}
                className="w-full bg-black px-6 py-3.5 text-sm text-white transition-all duration-300 hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Mengirim..."
                  : "Jadi Orang Favorit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
