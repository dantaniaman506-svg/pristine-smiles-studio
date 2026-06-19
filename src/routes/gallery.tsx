import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { galleryItems, galleryCategories } from "@/lib/data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dr. Maitri's Dental Care, Goregaon West" },
      { name: "description", content: "Step inside Dr. Maitri's Dental Care — see our modern clinic, treatment room and advanced equipment." },
      { property: "og:title", content: "Gallery — Dr. Maitri's Dental Care" },
      { property: "og:description", content: "A look inside our modern, welcoming clinic in Goregaon West." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState("all");
  const items = useMemo(
    () => (cat === "all" ? galleryItems : galleryItems.filter((g) => g.category === cat)),
    [cat],
  );

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <Reveal><SectionLabel>Gallery</SectionLabel></Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-3 text-4xl md:text-5xl font-black text-primary leading-tight">
          Step inside our <span className="italic font-light gradient-text-gold">warm, modern clinic</span>.
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A welcoming space designed for comfort, equipped with the latest dental technology — every detail considered for your experience.
        </p>
      </Reveal>

      <div className="mt-8 -mx-5 md:mx-0 px-5 md:px-0 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {galleryCategories.map((c) => {
          const active = cat === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition ${
                active
                  ? "gradient-accent text-primary border-transparent shadow-gold"
                  : "bg-card text-foreground border-border hover:border-accent/60"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((g) => (
            <motion.div
              key={g.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-card hover:shadow-soft ${
                g.aspect === "portrait" ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" :
                g.aspect === "wide" ? "col-span-2 aspect-[16/10]" :
                "aspect-square"
              }`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition">
                {galleryCategories.find((c) => c.id === g.category)?.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
