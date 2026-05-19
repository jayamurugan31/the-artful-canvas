import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroStudio from "@/assets/hero-studio.jpg";
import artistPortrait from "@/assets/artist-portrait.jpg";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";
import art7 from "@/assets/art-7.jpg";
import art8 from "@/assets/art-8.jpg";
import processImg from "@/assets/process.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const works = [
  { src: art1, title: "Silas, in graphite", category: "Pencil Portrait", year: "2024", span: "row-span-2" },
  { src: art3, title: "Bloom State", category: "Digital Illustration", year: "2024", span: "row-span-2" },
  { src: art2, title: "Liora", category: "Charcoal Study", year: "2023", span: "row-span-2" },
  { src: art4, title: "Untitled, in motion", category: "Equestrian Sketch", year: "2024", span: "row-span-1" },
  { src: art6, title: "Soft Hours", category: "Pet Portrait", year: "2023", span: "row-span-1" },
  { src: art8, title: "First Anniversary", category: "Couple Commission", year: "2024", span: "row-span-2" },
  { src: art5, title: "The Wanderer", category: "Character Art", year: "2023", span: "row-span-2" },
  { src: art7, title: "Quiet Country", category: "Canvas Painting", year: "2024", span: "row-span-1" },
];

const services = [
  { n: "01", title: "Custom Portraits", desc: "Heirloom graphite portraits of a single subject, hand-drawn on archival paper.", from: "from $480" },
  { n: "02", title: "Couple & Family", desc: "Intimate two- and three-figure compositions for anniversaries, weddings, gifts.", from: "from $720" },
  { n: "03", title: "Pet Drawings", desc: "Loose, expressive studies that hold the personality of the companion.", from: "from $360" },
  { n: "04", title: "Digital Artworks", desc: "Illustrations for editorial, publishing, and branded storytelling.", from: "from $640" },
  { n: "05", title: "Canvas Paintings", desc: "Original oil and mixed-media works in muted, painterly palettes.", from: "from $1,200" },
  { n: "06", title: "Event Artwork", desc: "Live drawing at weddings, launches, and private gatherings.", from: "on request" },
];

const process = [
  { step: "I", title: "The Conversation", desc: "We talk about the subject — who they are, what you want this piece to hold. Reference photos arrive. I listen for the things between the lines." },
  { step: "II", title: "First Sketch", desc: "A loose pencil draft lands in your inbox within a week. We refine composition, mood, scale. Nothing moves forward until it feels right." },
  { step: "III", title: "The Long Work", desc: "Eight to forty hours at the desk, depending on the piece. I send progress photographs at the half and three-quarter marks." },
  { step: "IV", title: "Delivery", desc: "Signed, hand-finished, shipped flat in archival packaging. Digital scans included for printing and sharing." },
];

const testimonials = [
  { quote: "Elena drew my late grandfather from a single photograph. My mother wept. It is the most precious object in our home.", name: "Hana Okafor", role: "Commissioned portrait, 2024" },
  { quote: "An absolute craftsman. The waiting list exists for a reason — and it's worth it.", name: "Daniel Reiss", role: "Editorial illustration, Apartamento" },
  { quote: "Working with Elena felt less like a transaction and more like collaborating with someone who genuinely cared what the work would become.", name: "Priya Anand", role: "Wedding commission, 2023" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
          <a href="#home" className="font-serif text-2xl tracking-tight">
            Elena<span className="text-accent">.</span>Marlowe
          </a>
          <ul className="hidden items-center gap-9 text-[13px] uppercase tracking-[0.18em] md:flex">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="relative transition-colors hover:text-accent-foreground/70"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden rounded-full border border-foreground/80 px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] transition-all hover:bg-foreground hover:text-background md:inline-block"
          >
            Commission
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate min-h-screen overflow-hidden">
        <img
          src={heroStudio}
          alt="Artist studio workspace with sketchbook and pencils"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 grain" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-24 pt-40 md:px-12 md:pb-32">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-foreground/70">
            <span className="h-px w-10 bg-foreground/40" />
            Studio est. 2014 · Lisbon
          </div>
          <h1 className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.02em] text-balance">
            Transforming
            <br />
            <span className="italic text-foreground/85">imagination</span> into art
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            Professional portrait artist, sketch creator, and digital illustrator. Working in graphite,
            charcoal, and pixel since 2014.
          </p>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:gap-5"
            >
              View Portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-4 text-[12px] uppercase tracking-[0.22em] transition-all hover:border-foreground"
            >
              Book a Custom Artwork
            </a>
          </div>

          {/* Floating preview cards */}
          <div className="pointer-events-none absolute right-6 top-32 hidden w-44 rotate-[6deg] shadow-2xl shadow-foreground/20 md:block float-slow">
            <img src={art2} alt="" className="aspect-[3/4] w-full object-cover" />
            <div className="bg-card px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
              Liora · 2023
            </div>
          </div>
          <div
            className="pointer-events-none absolute right-40 top-72 hidden w-36 -rotate-[8deg] shadow-2xl shadow-foreground/20 lg:block float-slow"
            style={{ animationDelay: "1.5s" }}
          >
            <img src={art6} alt="" className="aspect-[5/4] w-full object-cover" />
            <div className="bg-card px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
              Soft Hours
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-foreground/50">
          ↓ Scroll
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="overflow-hidden border-y border-border bg-secondary py-6">
        <div className="marquee flex whitespace-nowrap font-serif text-2xl italic text-foreground/70 md:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-12 pr-12">
              <span>Pencil Portraits</span><span className="text-accent">✦</span>
              <span>Charcoal Studies</span><span className="text-accent">✦</span>
              <span>Digital Illustration</span><span className="text-accent">✦</span>
              <span>Custom Commissions</span><span className="text-accent">✦</span>
              <span>Canvas Paintings</span><span className="text-accent">✦</span>
              <span>Editorial Work</span><span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5" data-reveal>
            <div className="sticky top-32">
              <img
                src={artistPortrait}
                alt="Portrait of Elena Marlowe"
                width={960}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Elena Marlowe</span>
                <span>Studio Portrait, 2024</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7" data-reveal>
            <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-10 bg-muted-foreground/50" />
              About the Artist
            </div>
            <h2 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              A decade of <span className="italic">quiet</span> hours at the desk.
            </h2>
            <div className="mt-10 space-y-6 text-lg font-light leading-relaxed text-foreground/75">
              <p>
                I draw, mostly. The slow, patient kind — graphite into paper until a face appears.
                I trained at the Lisbon School of Fine Arts and have since worked with private
                collectors, editorial publications, and people who simply wanted to hold someone they
                love a little longer.
              </p>
              <p>
                Every commission begins the same way: a conversation. The technique is craft; the
                rest is listening. What I make is a record of attention — of having actually looked.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              {[
                ["Pencil", "Sketching"],
                ["Portrait", "Drawing"],
                ["Digital", "Illustration"],
                ["Realistic", "Painting"],
              ].map(([a, b]) => (
                <div key={a} className="bg-background p-5">
                  <div className="font-serif text-3xl">{a}</div>
                  <div className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                    {b}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
              {[
                ["240+", "Commissioned works"],
                ["11", "Years drawing"],
                ["38", "Editorial features"],
                ["6", "Months waitlist"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-4xl">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO MASONRY */}
      <section id="portfolio" className="bg-secondary py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end">
            <div data-reveal>
              <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                <span className="h-px w-10 bg-muted-foreground/50" />
                Selected Works · 2022 — 2024
              </div>
              <h2 className="font-serif text-5xl leading-[1.02] md:text-7xl">
                A small <span className="italic">archive</span>
                <br />
                of recent pieces.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {["All", "Portraits", "Digital", "Sketches", "Painting"].map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${
                    i === 0
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {works.map((w, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden bg-card text-left ${w.span}`}
              >
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] uppercase tracking-[0.22em] opacity-80">
                    {w.category} · {w.year}
                  </div>
                  <div className="mt-1 font-serif text-2xl">{w.title}</div>
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] opacity-0 transition-opacity group-hover:opacity-100">
                  View ↗
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <div className="mb-20 max-w-3xl" data-reveal>
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-10 bg-muted-foreground/50" />
            Commissioned Services
          </div>
          <h2 className="font-serif text-5xl leading-[1.02] md:text-7xl">
            Made <span className="italic">slowly</span>, made well.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light text-foreground/70">
            Six things I make for the people who ask. Each begins with a conversation and ends with a
            signed, archival object.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.n}
              data-reveal
              className="group relative flex flex-col justify-between rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-accent">{s.n}</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {s.from}
                  </span>
                </div>
                <h3 className="mt-12 font-serif text-3xl tracking-tight">{s.title}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-foreground/70">
                  {s.desc}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-5 text-[11px] uppercase tracking-[0.22em]">
                <span className="text-muted-foreground">Enquire</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 py-28 md:grid-cols-12 md:gap-20 md:px-12 md:py-40">
          <div className="md:col-span-5" data-reveal>
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-background/60">
              <span className="h-px w-10 bg-background/40" />
              The Process
            </div>
            <h2 className="font-serif text-5xl leading-[1.02] md:text-6xl">
              Four chapters, <span className="italic">in order.</span>
            </h2>
            <img
              src={processImg}
              alt="Artist hand drawing on paper"
              loading="lazy"
              className="mt-12 aspect-[4/3] w-full object-cover grayscale"
            />
          </div>

          <ol className="relative md:col-span-7">
            <div className="absolute bottom-0 left-3 top-2 w-px bg-background/15 md:left-4" />
            {process.map((p, i) => (
              <li
                key={p.step}
                data-reveal
                className="relative grid grid-cols-[auto_1fr] gap-6 pb-14 last:pb-0 md:gap-10"
              >
                <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-background/40 bg-foreground font-serif text-xs text-accent md:h-9 md:w-9 md:text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-serif text-[11px] uppercase tracking-[0.32em] text-accent">
                    Chapter {p.step}
                  </div>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl">{p.title}</h3>
                  <p className="mt-3 max-w-lg text-[15px] font-light leading-relaxed text-background/75">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section id="gallery" className="py-28 md:py-40">
        <div className="mx-auto mb-16 max-w-[1500px] px-6 md:mb-24 md:px-12" data-reveal>
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-10 bg-muted-foreground/50" />
            Studio Gallery
          </div>
          <h2 className="font-serif text-5xl leading-[1.02] md:text-7xl">
            Walk the <span className="italic">room.</span>
          </h2>
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 pb-6 md:px-12 [scrollbar-width:thin]">
          {[art1, art3, art2, art5, art8, art6, art7, art4].map((src, i) => (
            <figure key={i} className="shrink-0">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-[60vh] max-h-[640px] w-auto object-cover"
              />
              <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Plate {String(i + 1).padStart(2, "0")}</span>
                <span>Marlowe Studio</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-secondary py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="mb-16 max-w-2xl" data-reveal>
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-10 bg-muted-foreground/50" />
              In the Letters
            </div>
            <h2 className="font-serif text-5xl leading-[1.02] md:text-6xl">
              What people <span className="italic">have said.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} data-reveal className="bg-secondary p-10">
                <div className="font-serif text-6xl leading-none text-accent">"</div>
                <blockquote className="mt-4 font-serif text-2xl leading-snug text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-10 border-t border-border/70 pt-5">
                  <div className="text-sm">{t.name}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5" data-reveal>
            <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-10 bg-muted-foreground/50" />
              Commission Enquiry
            </div>
            <h2 className="font-serif text-5xl leading-[1.02] md:text-7xl">
              Let's make
              <br />
              <span className="italic">something.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg font-light text-foreground/70">
              Currently booking commissions for late 2026. Tell me about the piece you have in
              mind — the more detail, the better.
            </p>

            <div className="mt-12 space-y-4 text-sm">
              <a href="mailto:studio@elenamarlowe.art" className="block group">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Email
                </div>
                <div className="mt-1 font-serif text-2xl group-hover:text-accent">
                  studio@elenamarlowe.art
                </div>
              </a>
              <a href="#" className="block group">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  WhatsApp
                </div>
                <div className="mt-1 font-serif text-2xl group-hover:text-accent">
                  +351 912 487 320
                </div>
              </a>
              <a href="#" className="block group">
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Instagram
                </div>
                <div className="mt-1 font-serif text-2xl group-hover:text-accent">
                  @elena.marlowe
                </div>
              </a>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Studio
                </div>
                <div className="mt-1 font-serif text-2xl">
                  Rua das Janelas Verdes 14, Lisbon
                </div>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-7"
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — I'll be in touch within five working days.");
            }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              {[
                ["Your name", "name"],
                ["Email address", "email"],
              ].map(([label, name]) => (
                <label key={name} className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </span>
                  <input
                    required
                    name={name}
                    type={name === "email" ? "email" : "text"}
                    className="mt-2 w-full border-b border-border bg-transparent py-3 font-serif text-xl outline-none transition-colors focus:border-foreground"
                  />
                </label>
              ))}
            </div>

            <label className="mt-8 block">
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Type of artwork
              </span>
              <select
                name="type"
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-serif text-xl outline-none focus:border-foreground"
              >
                <option>Custom Portrait</option>
                <option>Couple or Family</option>
                <option>Pet Drawing</option>
                <option>Digital Illustration</option>
                <option>Canvas Painting</option>
                <option>Event Artwork</option>
              </select>
            </label>

            <label className="mt-8 block">
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Tell me about the piece
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 font-serif text-xl outline-none transition-colors focus:border-foreground"
              />
            </label>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-sm text-xs text-muted-foreground">
                By sending, you agree to be contacted about your enquiry. No mailing list, ever.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:gap-5"
              >
                Send enquiry
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-foreground text-background/80">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-serif text-4xl text-background">
                Elena<span className="text-accent">.</span>Marlowe
              </div>
              <p className="mt-5 max-w-sm text-sm font-light text-background/60">
                A small drawing studio in Lisbon. Portraits, sketches, and digital illustration made
                slowly, with care.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.22em] text-background/40">
                Navigate
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {nav.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="hover:text-accent">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-background/40">
                Elsewhere
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent">Instagram</a></li>
                <li><a href="#" className="hover:text-accent">Behance</a></li>
                <li><a href="#" className="hover:text-accent">Pinterest</a></li>
                <li><a href="#" className="hover:text-accent">Newsletter — quarterly</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-[11px] uppercase tracking-[0.22em] text-background/40 md:flex-row md:items-center">
            <span>© 2026 Elena Marlowe Studio · All works hand-made</span>
            <span>Lisbon — 38.7° N, 9.1° W</span>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-background text-2xl"
            aria-label="Close"
          >
            ✕
          </button>
          <figure className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={works[lightbox].src}
              alt={works[lightbox].title}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between text-background">
              <div>
                <div className="font-serif text-2xl">{works[lightbox].title}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-background/60">
                  {works[lightbox].category} · {works[lightbox].year}
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => setLightbox((p) => (p! - 1 + works.length) % works.length)}
                  className="rounded-full border border-background/30 px-4 py-2 hover:border-background"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setLightbox((p) => (p! + 1) % works.length)}
                  className="rounded-full border border-background/30 px-4 py-2 hover:border-background"
                >
                  Next →
                </button>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
