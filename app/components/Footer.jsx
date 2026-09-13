"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const Footer = () => {
  // =========================================================
  // FORM STATE
  // =========================================================

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);

  // =========================================================
  // TEST 1 — DATABASE CONNECTION
  // =========================================================

  const testSupabaseConnection = async () => {
    console.log("=================================");
    console.log("TEST 1 — DATABASE CONNECTION");
    console.log("=================================");

    try {
      const { data, error } = await supabase
        .from("favorite_people")
        .select("*")
        .limit(1);

      console.log("DATABASE DATA:", data);
      console.log("DATABASE ERROR:", error);

      if (error) {
        alert(`Database error:\n\n${error.message}`);
        return;
      }

      alert("Database connection berhasil!");
    } catch (error) {
      console.error("DATABASE EXCEPTION:", error);

      alert(
        error?.message || "Database connection gagal."
      );
    }
  };

  // =========================================================
  // TEST 2 — LIST ALL BUCKETS
  // =========================================================

  const testBuckets = async () => {
    console.log("=================================");
    console.log("TEST 2 — LIST BUCKETS");
    console.log("=================================");

    try {
      const { data, error } =
        await supabase.storage.listBuckets();

      console.log("BUCKET DATA:", data);
      console.log("BUCKET ERROR:", error);

      if (error) {
        alert(
          `Storage error:\n\n${error.message}`
        );
        return;
      }

      if (!data || data.length === 0) {
        alert("Tidak ada bucket yang ditemukan.");
        return;
      }

      const bucketNames = data.map(
        (bucket) => bucket.name
      );

      console.log(
        "BUCKET NAMES:",
        bucketNames
      );

      alert(
        `Bucket ditemukan:\n\n${bucketNames.join("\n")}`
      );
    } catch (error) {
      console.error(
        "BUCKET EXCEPTION:",
        error
      );

      alert(
        error?.message ||
        "Gagal mengecek bucket."
      );
    }
  };

  // =========================================================
  // TEST 3 — CHECK SPECIFIC BUCKET
  // =========================================================

  const testFavoriteBucket = async () => {
    console.log("=================================");
    console.log("TEST 3 — CHECK FAVORITE-PERSON");
    console.log("=================================");

    try {
      const { data, error } =
        await supabase.storage
          .from("favorite-person")
          .list();

      console.log(
        "FAVORITE-PERSON FILES:",
        data
      );

      console.log(
        "FAVORITE-PERSON ERROR:",
        error
      );

      if (error) {
        alert(
          `Bucket "favorite-person" error:\n\n${error.message}`
        );
        return;
      }

      alert(
        `Bucket "favorite-person" berhasil diakses.\n\nJumlah file: ${data?.length || 0
        }`
      );
    } catch (error) {
      console.error(
        "SPECIFIC BUCKET EXCEPTION:",
        error
      );

      alert(
        error?.message ||
        "Gagal mengakses bucket."
      );
    }
  };

  // =========================================================
  // FILE CHANGE
  // =========================================================

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    // Check image
    if (!selectedFile.type.startsWith("image/")) {
      alert("File harus berupa gambar.");

      e.target.value = "";
      return;
    }

    // Max 5MB
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Ukuran foto maksimal 5MB.");

      e.target.value = "";
      return;
    }

    // Hapus preview sebelumnya
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setFile(selectedFile);

    const previewUrl =
      URL.createObjectURL(selectedFile);

    setPreview(previewUrl);
  };

  // =========================================================
  // TEST 4 — UPLOAD ONLY
  // =========================================================

  const testUpload = async () => {
    if (!file) {
      alert("Pilih foto terlebih dahulu.");
      return;
    }

    console.log("=================================");
    console.log("TEST 4 — UPLOAD IMAGE");
    console.log("=================================");

    try {
      setLoading(true);

      const fileExt =
        file.name.split(".").pop()?.toLowerCase() ||
        "jpg";

      const fileName =
        `test-${crypto.randomUUID()}.${fileExt}`;

      console.log("Bucket:", "favorite-person");
      console.log("File:", fileName);
      console.log("Original file:", file.name);
      console.log("Type:", file.type);
      console.log("Size:", file.size);

      const { data, error } =
        await supabase.storage
          .from("favorite-person")
          .upload(fileName, file, {
            contentType: file.type,
            cacheControl: "3600",
            upsert: false,
          });

      console.log(
        "UPLOAD DATA:",
        data
      );

      console.log(
        "UPLOAD ERROR:",
        error
      );

      if (error) {
        alert(
          `UPLOAD ERROR:\n\n${error.message}`
        );
        return;
      }

      alert(
        `Upload berhasil!\n\nFile:\n${fileName}`
      );
    } catch (error) {
      console.error(
        "UPLOAD EXCEPTION:",
        error
      );

      alert(
        error?.message ||
        "Upload gagal."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // TEST 5 — UPLOAD + PUBLIC URL
  // =========================================================

  const testPublicUrl = async () => {
    if (!file) {
      alert("Pilih foto terlebih dahulu.");
      return;
    }

    console.log("=================================");
    console.log("TEST 5 — PUBLIC URL");
    console.log("=================================");

    try {
      setLoading(true);

      const fileExt =
        file.name.split(".").pop()?.toLowerCase() ||
        "jpg";

      const fileName =
        `public-test-${crypto.randomUUID()}.${fileExt}`;

      // Upload
      const { error: uploadError } =
        await supabase.storage
          .from("favorite-person")
          .upload(fileName, file, {
            contentType: file.type,
            cacheControl: "3600",
            upsert: false,
          });

      console.log(
        "UPLOAD ERROR:",
        uploadError
      );

      if (uploadError) {
        alert(
          `Upload gagal:\n\n${uploadError.message}`
        );
        return;
      }

      // Get public URL
      const { data } =
        supabase.storage
          .from("favorite-person")
          .getPublicUrl(fileName);

      const publicUrl =
        data?.publicUrl;

      console.log(
        "PUBLIC URL:",
        publicUrl
      );

      if (!publicUrl) {
        alert(
          "Public URL tidak ditemukan."
        );
        return;
      }

      alert(
        `Public URL berhasil:\n\n${publicUrl}`
      );

      console.log(
        "Buka URL:",
        publicUrl
      );
    } catch (error) {
      console.error(
        "PUBLIC URL EXCEPTION:",
        error
      );

      alert(
        error?.message ||
        "Gagal mendapatkan public URL."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // TEST 6 — DATABASE INSERT
  // =========================================================

  const testInsert = async () => {
    console.log("=================================");
    console.log("TEST 6 — DATABASE INSERT");
    console.log("=================================");

    try {
      const { data, error } =
        await supabase
          .from("favorite_people")
          .insert({
            name: "Test User",
            description:
              "Ini adalah data testing dari aplikasi.",
            photo_url:
              "https://example.com/test.jpg",
          })
          .select();

      console.log(
        "INSERT DATA:",
        data
      );

      console.log(
        "INSERT ERROR:",
        error
      );

      if (error) {
        alert(
          `INSERT ERROR:\n\n${error.message}`
        );
        return;
      }

      alert(
        "Insert database berhasil!"
      );
    } catch (error) {
      console.error(
        "INSERT EXCEPTION:",
        error
      );

      alert(
        error?.message ||
        "Insert database gagal."
      );
    }
  };

  // =========================================================
  // TEST 7 — DATABASE SELECT
  // =========================================================

  const testSelect = async () => {
    console.log("=================================");
    console.log("TEST 7 — DATABASE SELECT");
    console.log("=================================");

    try {
      const { data, error } =
        await supabase
          .from("favorite_people")
          .select("*")
          .order("created_at", {
            ascending: false,
          });

      console.log(
        "DATABASE DATA:",
        data
      );

      console.log(
        "DATABASE ERROR:",
        error
      );

      if (error) {
        alert(
          `SELECT ERROR:\n\n${error.message}`
        );
        return;
      }

      alert(
        `SELECT berhasil!\n\nJumlah data: ${data?.length || 0
        }`
      );
    } catch (error) {
      console.error(
        "SELECT EXCEPTION:",
        error
      );

      alert(
        error?.message ||
        "Select gagal."
      );
    }
  };

  // =========================================================
  // REAL SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !description.trim() ||
      !file
    ) {
      alert("Lengkapi semua data dulu.");
      return;
    }

    try {
      setLoading(true);

      console.log("=================================");
      console.log("REAL SUBMIT");
      console.log("=================================");

      // =====================================================
      // 1. GENERATE FILE NAME
      // =====================================================

      const fileExt =
        file.name.split(".").pop()?.toLowerCase() ||
        "jpg";

      const fileName =
        `${crypto.randomUUID()}.${fileExt}`;

      console.log(
        "Uploading:",
        fileName
      );

      // =====================================================
      // 2. UPLOAD TO STORAGE
      // Bucket: favorite-person
      // =====================================================

      const { data: uploadData, error: uploadError } =
        await supabase.storage
          .from("favorite-person")
          .upload(fileName, file, {
            contentType: file.type,
            cacheControl: "3600",
            upsert: false,
          });

      console.log(
        "UPLOAD DATA:",
        uploadData
      );

      console.log(
        "UPLOAD ERROR:",
        uploadError
      );

      if (uploadError) {
        throw uploadError;
      }

      // =====================================================
      // 3. GET PUBLIC URL
      // =====================================================

      const { data: publicData } =
        supabase.storage
          .from("favorite-person")
          .getPublicUrl(fileName);

      const publicUrl =
        publicData?.publicUrl;

      console.log(
        "PUBLIC URL:",
        publicUrl
      );

      if (!publicUrl) {
        throw new Error(
          "Public URL foto tidak berhasil dibuat."
        );
      }

      // =====================================================
      // 4. INSERT DATABASE
      // Table: favorite_people
      // =====================================================

      const { data: insertData, error: insertError } =
        await supabase
          .from("favorite_people")
          .insert({
            name: name.trim(),
            description: description.trim(),
            photo_url: publicUrl,
          })
          .select();

      console.log(
        "INSERT DATA:",
        insertData
      );

      console.log(
        "INSERT ERROR:",
        insertError
      );

      if (insertError) {
        throw insertError;
      }

      // =====================================================
      // 5. SUCCESS
      // =====================================================

      alert(
        "Berhasil! Kamu sekarang masuk daftar orang favorit. ❤️"
      );

      // Reset
      setName("");
      setDescription("");
      setFile(null);

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPreview(null);
      setIsOpen(false);
    } catch (error) {
      console.error(
        "SUBMIT ERROR:",
        error
      );

      alert(
        error?.message ||
        "Terjadi kesalahan. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const handleClose = () => {
    if (loading) {
      return;
    }

    setIsOpen(false);

    setName("");
    setDescription("");
    setFile(null);

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);
  };

  // =========================================================
  // CLEANUP PREVIEW
  // =========================================================

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="w-full border-t border-black/10 bg-white text-center text-olive-600">
        <div className="mx-auto flex max-w-350 flex-col items-center px-6 py-12 md:px-12">

          {/* Main Content */}

          <div className="max-w-xl">
            <p className="font-serif text-xl leading-relaxed text-black md:text-2xl">
              Saya sedang mencari orang favorit
              <br />
              dalam hidup saya.
            </p>

            <p className="mt-3 text-sm text-black/50">
              Maukah anda menjadi orang favorit saya?
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-7 border border-black px-6 py-3 text-sm text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Saya mau
            </button>
          </div>

          {/* Copyright */}

          <p className="mt-14 font-serif text-sm">
            Copyright © 2026 Katirstecu
          </p>

          {/* =================================================
              DEBUG BUTTONS
          ================================================= */}

          <div className="mt-10 flex flex-wrap justify-center gap-2">

            <button
              type="button"
              onClick={testSupabaseConnection}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test DB
            </button>

            <button
              type="button"
              onClick={testBuckets}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test Buckets
            </button>

            <button
              type="button"
              onClick={testFavoriteBucket}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test Favorite Bucket
            </button>

            <button
              type="button"
              onClick={testUpload}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test Upload
            </button>

            <button
              type="button"
              onClick={testPublicUrl}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test Public URL
            </button>

            <button
              type="button"
              onClick={testInsert}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test Insert
            </button>

            <button
              type="button"
              onClick={testSelect}
              disabled={loading}
              className="border border-black/20 px-3 py-2 text-xs text-black transition hover:bg-black hover:text-white disabled:opacity-50"
            >
              Test Select
            </button>

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

            {/* Close */}

            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="absolute right-5 top-5 text-2xl leading-none text-black/40 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Heading */}

            <div className="pr-8">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                One question
              </p>

              <h2 className="mt-2 font-serif text-2xl text-black md:text-3xl">
                Mau jadi orang favorit saya?
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-black/50">
                Ceritakan sedikit tentang diri kamu.
                Siapa tahu, kamu memang orang yang selama
                ini saya cari.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* Name */}

              <div>
                <label
                  htmlFor="favorite-name"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Nama lengkap
                </label>

                <input
                  id="favorite-name"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Masukkan nama lengkap"
                  disabled={loading}
                  maxLength={100}
                  className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-black disabled:cursor-not-allowed disabled:bg-black/5"
                />
              </div>

              {/* Description */}

              <div>
                <label
                  htmlFor="favorite-description"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Tentang kamu
                </label>

                <textarea
                  id="favorite-description"
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value
                    )
                  }
                  placeholder="Ceritakan sedikit tentang diri kamu..."
                  disabled={loading}
                  maxLength={500}
                  rows={5}
                  className="w-full resize-none border border-black/15 bg-white px-4 py-3 text-sm leading-relaxed text-black outline-none transition-colors placeholder:text-black/30 focus:border-black disabled:cursor-not-allowed disabled:bg-black/5"
                />

                <p className="mt-1 text-right text-xs text-black/30">
                  {description.length}/500
                </p>
              </div>

              {/* Image */}

              <div>
                <label
                  htmlFor="favorite-photo"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Foto kamu
                </label>

                <input
                  id="favorite-photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleFileChange}
                  disabled={loading}
                  className="block w-full cursor-pointer border border-black/15 text-sm text-black file:mr-4 file:border-0 file:border-r file:border-black/15 file:bg-black/5 file:px-4 file:py-3 file:text-sm file:text-black hover:file:bg-black/10 disabled:cursor-not-allowed"
                />

                <p className="mt-2 text-xs text-black/40">
                  JPG, PNG, atau WebP · Maksimal 5MB
                </p>

                {/* Preview */}

                {preview && (
                  <div className="mt-4 overflow-hidden border border-black/10">
                    <img
                      src={preview}
                      alt="Preview foto"
                      className="h-64 w-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Submit */}

              <button
                type="submit"
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
