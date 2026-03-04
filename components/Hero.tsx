"use client";
import { useState } from "react";

const CONTENT = {
  fr: {
    nav: ["Accueil", "Prestations", "Galerie", "Informations", "FAQ", "Réservation"],
    services: ["EXTENSION GEL", "VERNIS SEMI-PERMANENT", "NAIL ART", "REMPLISSAGE", "DÉPOSE"],
    tagline: "TECHNICIENNE NAIL ARTIST",
    lang: "ENG",
  },
  en: {
    nav: ["Home", "Services", "Gallery", "Information", "FAQ", "Booking"],
    services: ["GEL EXTENSION", "SEMI-PERMANENT POLISH", "NAIL ART", "INFILL", "REMOVAL"],
    tagline: "TECHNICIAN NAIL ARTIST",
    lang: "FR",
  },
} as const;

type Lang = keyof typeof CONTENT;

export default function Hero() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = CONTENT[lang];

  return (
    <section
      className="relative w-full overflow-hidden bg-back"
      style={{ height: "100vh", minHeight: "640px" }}
    >
      {/* ── Grid lines ── */}
      <div className="absolute inset-x-0 h-px bg-banner/25" style={{ top: "7.8%" }} />
      <div className="absolute inset-x-0 h-px bg-banner/25" style={{ top: "92.2%" }} />
      <div className="absolute inset-y-0 w-px bg-banner/25" style={{ left: "6.9%" }} />
      <div className="absolute inset-y-0 w-px bg-banner/25" style={{ left: "93%" }} />

      {/* ══════════════ LEFT BAND ══════════════ */}
      {/* Sparks above and below text */}
      {["33%", "67%"].map((top) => (
        <div
          key={top}
          className="absolute"
          style={{ left: "3.45%", top, transform: "translate(-50%, -50%)" }}
        >
          <img
            src="/spark.svg"
            alt=""
            width={22}
            height={22}
            style={{ filter: "brightness(0)", opacity: 0.35 }}
          />
        </div>
      ))}

      {/* "TECHNICIAN NAIL ARTIST" rotated, centered at 50% */}
      <div
        className="absolute text-banner text-xs tracking-[3px] whitespace-nowrap select-none"
        style={{
          left: "3.45%",
          top: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg)",
        }}
      >
        {t.tagline}
      </div>

      {/* Social links */}
      <div
        className="absolute text-banner text-xs tracking-wider leading-relaxed"
        style={{ left: "2%", bottom: "13%" }}
      >
        {["IG", "FB", "TT", "X"].map((s) => (
          <div key={s}>[{s}]</div>
        ))}
      </div>

      {/* ══════════════ NAV ══════════════ */}
      <nav
        className="absolute inset-x-0 flex items-center justify-between"
        style={{ top: 0, height: "7.8%", paddingInline: "calc(6.9% + 20px)" }}
      >
        <div className="flex items-center">
          {t.nav.map((link, i) => (
            <span key={link} className="flex items-center">
              {i > 0 && <span className="text-banner mx-3 text-xs select-none">|</span>}
              <a
                href="#"
                className="text-banner text-xs uppercase tracking-[2.5px]"
              >
                {link}
              </a>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-banner text-xs tracking-wider">
          <span className="text-banner">ESTD</span>
          <span className="text-banner ml-1">[08.05.2023]</span>
        </div>
      </nav>

      {/* ══════════════ OVAL RINGS ══════════════ */}
      {[{ top: "34.6%" }, { top: "30.9%" }].map(({ top }) => (
        <div
          key={top}
          className="absolute rounded-full"
          style={{
            width: "49.3%",
            height: "37.5%",
            left: "50%",
            top,
            transform: "translateX(-50%)",
            border: "1px solid #fed7aa",
            zIndex: 12,
          }}
        />
      ))}

      {/* ══════════════ DARK BAND ══════════════ */}
      <div
        className="absolute bg-banner"
        style={{ left: "6.9%", right: "7%", top: "41%", height: "18%", zIndex: 8 }}
      />

      {/* Sparks at oval intersection points */}
      {[{ left: "25.5%" }, { left: "74.5%" }].map(({ left }) => (
        <div
          key={left}
          className="absolute"
          style={{ left, top: "51.5%", transform: "translate(-50%, -50%)", zIndex: 15 }}
        >
          <img src="/spark.svg" alt="" width={38} height={38} />
        </div>
      ))}

      {/* ══════════════ BIG HIYO LOGO ══════════════ */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: "translate(-50%, -50%)", zIndex: 20 }}
      >
        <img
          src="/big_hiyo.svg"
          alt="HiYo nails."
          width={500}
          height={422}
          style={{ filter: "drop-shadow(0px 8px 14px rgba(22,42,70,0.45))" }}
        />
      </div>

      {/* ══════════════ RIGHT BAND ══════════════ */}
      {/* Language toggle — aligned with nav (center of nav = 3.9%) */}
      <button
        onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        className="absolute text-banner text-xs tracking-[2px] uppercase select-none cursor-pointer"
        style={{ left: "96.5%", top: "3.9%", transform: "translate(-50%, -50%)" }}
      >
        [{t.lang}]
      </button>

      {/* NEXT */}
      <div
        className="absolute flex flex-col items-center gap-2 text-banner/60 text-xs tracking-[2px] uppercase select-none"
        style={{ left: "96.5%", top: "55%", transform: "translate(-50%, -50%)" }}
      >
        NEXT
        <img
          src="/arrow-right.svg"
          alt=""
          width={10}
          height={8}
          style={{ opacity: 0.6, transform: "rotate(90deg)" }}
        />
      </div>

      {/* "00" rotated */}
      <div
        className="absolute font-semibold select-none whitespace-nowrap text-banner"
        style={{
          fontSize: "8rem",
          lineHeight: 1,
          opacity: 0.08,
          right: "-1rem",
          top: "40%",
          transformOrigin: "right center",
          transform: "rotate(-90deg) translateY(50%)",
        }}
      >
        00
      </div>

      {/* ══════════════ BOTTOM SERVICES BAR ══════════════ */}
      <div
        className="absolute flex items-center overflow-hidden"
        style={{ left: "calc(6.9% + 20px)", right: "7%", top: "92.2%", bottom: 0 }}
      >
        <p className="text-banner text-sm tracking-[3px] uppercase whitespace-nowrap">
          {t.services.map((s, i) => (
            <span key={s}>{s}{i < t.services.length - 1 && " - "}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
