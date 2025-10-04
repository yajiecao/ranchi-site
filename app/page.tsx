'use client'

// app/page.tsx
import React from "react";

// Ranchi Amsterdam — Landing Page (Refined v2)
// Tweaks: consistent radii, fixed image fallbacks, tidier paddings.

const ORDER_URL = "#order";
// Hero image (right side)
const HERO_IMG =
  "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,w_681,h_300/f_auto/q_auto/dpr_2.0/d_nl:cuisines:lunch-3.jpg/v1/static-takeaway-com/images/restaurants/nl/R0313OQN/headers/header.jpg";
// Owners / storefront photo
const OWNER_IMG =
"https://lh3.googleusercontent.com/places/ANJU3DuFr9IIx0bfRdlpnngwj46sr7M2EEq678b4D5Q7bqqGnYG68wTvhPXw5qiFr35BelnBYtDJqtA8TgSYlYXKzD6bpGRqEn-Tovg=s1600-w640";
// Global radii tokens --------------------------------------------------------
const R = {
  outer: "rounded-2xl", // primary card/container
  inner: "rounded-xl", // inner strokes / images inside frames
  chip: "rounded-lg", // badges, price, small chips
  btn: "rounded-xl", // buttons
};

// Image fallbacks ------------------------------------------------------------
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"; // tasty fried bites
const IMG: Record<string, string> = {
  "Egg salad":
    "https://tb-static.uber.com/prod/image-proc/processed_images/4e254c4f33b9bd6781a60271fa381316/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Plant based chicken katsu":
    "https://tb-static.uber.com/prod/image-proc/processed_images/0a55dc435b73c9beb810d57daf08cd2c/0fb376d1da56c05644450062d25c5c84.jpeg",

  "Chicken salad":
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
  "Ton katsu":
    "https://tb-static.uber.com/prod/image-proc/processed_images/c3cdb509e37796d36b7f33a1d6054c7e/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Xo beef":
    "https://tb-static.uber.com/prod/image-proc/processed_images/277c01840f2c35194f0bd9aeb5db813a/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Chicken katsu":
    "https://tb-static.uber.com/prod/image-proc/processed_images/99bb64d88ac04e4ce64fe66efc056fcd/0fb376d1da56c05644450062d25c5c84.jpeg",
  Tsukune:
    "https://tb-static.uber.com/prod/image-proc/processed_images/4586bdf5cb1723b34aad62170744c344/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Wagyu katsu sando":
    "https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1200&auto=format&fit=crop",
  "Chicken chunks":
    "https://tb-static.uber.com/prod/image-proc/processed_images/1705211a66ed5ca7f88126d023b65a32/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Waffle fries":
    "https://tb-static.uber.com/prod/image-proc/processed_images/c245cca729f329849872646ab9966713/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Loaded fries":
    "https://tb-static.uber.com/prod/image-proc/processed_images/16100cb44bcd5392a424143ae02c6080/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Potato salad":
    "https://tb-static.uber.com/prod/image-proc/processed_images/c3917f13aebe7286d36b001141abf2c0/0fb376d1da56c05644450062d25c5c84.jpeg",
  Korokke:
    "https://tb-static.uber.com/prod/image-proc/processed_images/744c3e943105301536246d48e437616a/0fb376d1da56c05644450062d25c5c84.jpeg",
  Edamame:
    "https://tb-static.uber.com/prod/image-proc/processed_images/8743018461e47777103d57e396f4b1d6/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Dille pickle":
    "https://tb-static.uber.com/prod/image-proc/processed_images/5b44432eb61edda740e13e93b63cd267/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Chicken Croquette":
    "https://tb-static.uber.com/prod/image-proc/processed_images/f34e4f1816375775a6c55eb42794ad73/0fb376d1da56c05644450062d25c5c84.jpeg",
  "Homemade cake":
    "https://tb-static.uber.com/prod/image-proc/processed_images/80a0b6b55546640b3c6b43f6f87d9993/0fb376d1da56c05644450062d25c5c84.jpeg",

  "Iced latte":
    "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Spa blauw":
    "https://goedkoopdrank.nl/wp-content/uploads/2013/01/Spa_Blauw_Reine_50cl_Pet.jpg",
  Appelsap:
    "https://kadirgroentefruit.nl/wp-content/uploads/2024/01/01-Appelsap-amb-075-scaled.jpg",
  "Coca-Cola":
    "https://images.unsplash.com/photo-1690988109029-aa2377d08b12?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Hibiscus Iced Tea":
    "https://i.pinimg.com/1200x/0e/64/09/0e64099aeaa4bb1b53fa2cee1d0fde67.jpg",
  "Coca-Cola zero":
    "https://primary.jwwb.nl/public/o/f/v/temp-seyldgnzgzaexuhaodiy/coca_cola_original_taste_nl_april_2024-standard-0544xz.webp?enable-io=true&enable=upscale&width=600",
  "Sourcy rood":
    "https://www.dropwinkel.eu/media/cache/gallery_zoom/product/522/sourcy-rood-blik-24-x-33-cl.jpg",
  "Lemongrass lemon lemonade":
    "https://images.slurrp.com/webstories/wp-content/uploads/2023/02/26124011/cropped-Homemade-Lemon-Ice-Tea-Delight-Fuel.png",
  "Iced coffee":
    "https://www.pauldmv.com/wp-content/uploads/2022/12/PAUL-Coffee-Iced-Americano.png",
};

const SafeImg: React.FC<{ src?: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => (
  <img
    alt={alt}
    className={className}
    src={src || FALLBACK_IMG}
    onError={(e) => {
      (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
    }}
  />
);

// Atoms ----------------------------------------------------------------------
const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className={`inline-flex items-center ${R.chip} border border-[var(--ink)] bg-[var(--mayo)] px-2.5 py-0.5 text-xs font-semibold tracking-wide shadow-[2px_2px_0_0_var(--ink)]`}
  >
    {children}
  </span>
);

const Button: React.FC<{
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "lg" | "md" | "sm";
}> = ({ href, children, variant = "primary", size = "md" }) => {
  const sizing =
    size === "lg"
      ? "px-6 py-3 text-base"
      : size === "sm"
      ? "px-3 py-1.5 text-sm"
      : "px-5 py-2.5";

  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold shadow-[2px_2px_0_0_var(--ink)] transition-transform active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--ink)]";

  const styles =
    variant === "primary"
      ? "bg-[var(--umami)] text-[var(--ink)] hover:brightness-95 border-2 border-[var(--ink)]"
      : "bg-[var(--mayo)] text-[var(--ink)] hover:brightness-95 border-2 border-[var(--ink)]";

  // ✅ No 'any' — treat the tag as a valid React element type
  const Comp = (href ? "a" : "button") as React.ElementType;

  return (
    <Comp href={href} className={[base, styles, sizing].join(" ")}>
      {children}
    </Comp>
  );
};


// Order menu (3 options) -----------------------------------------------------
const ORDER_LINKS = [
  { label: "Store pickup", href: "https://mylightspeed.app/OCOFADAU/C-ordering/menu" },
  { label: "UberEats", href: "https://www.ubereats.com/nl/store/ranchi-amsterdam/lHP2FCj_Uw6tnf9EWxnFew" },
  { label: "Thuisbezorgd", href: "https://www.thuisbezorgd.nl/menu/ranchi#pre-order" },
];

const OrderIcon: React.FC<{ label: string }> = ({ label }) => {
  if (label === "UberEats")
    return (
      <span className="grid h-6 w-6 place-content-center rounded-full bg-black text-white text-[10px] font-black">
        UE
      </span>
    );
  if (label === "Thuisbezorgd")
    return (
      <span className="grid h-6 w-6 place-content-center rounded-full bg-[#ff6a2a] text-black text-[10px] font-black">
        TB
      </span>
    );
  return (
    <span className="grid h-6 w-6 place-content-center rounded-full bg-white text-black text-base">
      🛍️
    </span>
  );
};

const OrderMenuButton: React.FC<{
  size?: "lg" | "md" | "sm";
  label?: string;
  align?: "left" | "right";
}> = ({ size = "md", label = "Order now", align = "right" }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const sizing =
    size === "lg"
      ? "px-6 py-3 text-base"
      : size === "sm"
      ? "px-3 py-1.5 text-sm"
      : "px-5 py-2.5";
  const cls = `inline-flex items-center justify-center ${R.btn} font-semibold shadow-[2px_2px_0_0_var(--ink)] transition-transform active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--ink)] bg-[var(--umami)] text-[var(--ink)] hover:brightness-95 border-2 border-[var(--ink)] ${sizing}`;
  React.useEffect(() => {
    const onDoc = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);
  return (
    <div className="relative inline-block" ref={ref}>
      <button type="button" className={cls} onClick={() => setOpen((v) => !v)}>
        {label}
      </button>
      {open && (
        <div
          className={`absolute ${
            align === "left" ? "left-0" : "right-0"
          } z-50 mt-2 w-64 ${R.outer} border-2 border-[var(--ink)] bg-white p-2 shadow-[4px_4px_0_0_var(--ink)]`}
        >
          {ORDER_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-2 flex items-center justify-between rounded-lg border-2 border-[var(--ink)] bg-[var(--mayo)] px-3 py-2 text-sm font-semibold last:mb-0 hover:brightness-95`}
            >
              <span className="flex items-center gap-2">
                <OrderIcon label={l.label} />
                {l.label}
              </span>
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Framed card without corner pins. Inner stroke mirrors radius.
const Frame: React.FC<{
  children: React.ReactNode;
  pad?: "none" | "sm" | "md" | "lg";
  tone?: "cream" | "pink" | "orange" | "green" | "white";
  inner?: boolean;
  fill?: boolean;
}> = ({ children, pad = "lg", tone = "cream", inner = true, fill = false }) => {
  const bg =
    tone === "pink"
      ? "bg-[var(--pickled-pink)]"
      : tone === "orange"
      ? "bg-[var(--umami)]"
      : tone === "green"
      ? "bg-[var(--nori)]"
      : tone === "white"
      ? "bg-white"
      : "bg-[var(--mayo)]";
  const padding =
    pad === "none"
      ? "p-0"
      : pad === "sm"
      ? "p-4 md:p-6"
      : pad === "md"
      ? "p-6 md:p-8"
      : "p-8 md:p-12";
  return (
    <div
      className={`relative ${bg} border-2 border-[var(--ink)] shadow-[5px_5px_0_0_var(--ink)] ${R.outer} ${
        fill ? "h-full" : ""
      }`}
    >
      {inner && (
        <div
          className={`pointer-events-none absolute inset-2 ${R.inner} border-2 border-[var(--ink)]`}
        />
      )}
      <div className={`${padding} ${fill ? "h-full" : ""}`}>{children}</div>
    </div>
  );
};

// Data -----------------------------------------------------------------------
const MENU: {
  category: string;
  items: { name: string; desc: string; price: string; tags?: string[] }[];
}[] = [
  {
    category: "Sando's",
    items: [
      {
        name: "Egg salad",
        price: "11,00",
        desc: "Classic Japanese egg salad sandwich. Hand peeled eggs, mayo, miso, scallion and rice vinegar. Served with a semi hard boiled egg.",
      },
      {
        name: "Plant based chicken katsu",
        price: "14,00",
        desc: "Chicken katsu made of plants. Supplied by Tindle, the award-winning plant-based chicken. Served with mayo, crispy cabbage and sweet & tangy Bulldog sauce.",
      },
      {
        name: "Xo beef",
        price: "16,00",
        desc: "Our decadent take on a burger. Locally sourced beef patty, hand breaded, deep-fried till perfection. Served with XO mayo and our homemade BBQ sauce.",
      },
      {
        name: "Chicken katsu",
        price: "13,50",
        desc: "Our famous chicken katsu. 24h brined filet, hand breaded and deep fried for the juiciest chicken. Served with mayo, crispy cabbage and sweet & tangy Bulldog sauce.",
      },
      {
        name: "Ton katsu",
        price: "14,95",
        desc: "The OG Japanese pork sandwich. Brined Zuiderzee pork filet, breaded in-house and deep fried for the juiciest pork. Served with mayo, crispy cabbage and sweet & tangy Bulldog sauce.",
      },
      {
        name: "Tsukune",
        price: "14,50",
        desc: "Chicken meatloaf served on crispy cabbage with a sweet and savoury soy sauce.",
      },
    ],
  },
  {
    category: "Side's & snacks",
    items: [
      {
        name: "Waffle fries",
        price: "6,00",
        desc: "The perfect side to any sandwich. Waffle fries served with homemade sriracha mayo.",
      },
      {
        name: "Potato salad",
        price: "5,00",
        desc: "Creamy potato salad with carrot, chives, egg, corn, rice vinegar and mayo.",
      },
      {
        name: "Chicken chunks",
        price: "9,00",
        desc: "In-house brined and breaded chicken chunks, dressed in Szechuan chili oil. Served with sweet & tangy Bulldog sauce or sriracha mayo.",
      },
      {
        name: "Korokke",
        price: "6,50",
        desc: "Japanese croquettes made with mashed potatoes, carrots, peas and Zuiderzee pork. Served with a dipping sauce.",
      },
      {
        name: "Loaded fries",
        price: "10,00",
        desc: "Fries tossed in sriracha mayo, then topped with fried chicken, scallion and pickled red onion.",
      },
      { name: "Edamame", price: "5,00", desc: "Edamame soy beans with crispy chili oil." },
      { name: "Dille pickle", price: "5,50", desc: "Homemade Dille Pickle." },
      {
        name: "Chicken Croquette",
        price: "6,00",
        desc: "Three chicken croquettes served with tartar sauce.",
      },
    ],
  },
  { category: "Desserts", items: [{ name: "Homemade cake", price: "5,50", desc: "Basque matcha cheesecake." }] },
  {
    category: "Drinks",
    items: [
      { name: "Iced latte", price: "5,00", desc: "" },
      { name: "Spa blauw", price: "3,30", desc: "" },
      { name: "Appelsap", price: "3,00", desc: "" },
      { name: "Coca-Cola", price: "3,30", desc: "" },
      { name: "Hibiscus Iced Tea", price: "4,50", desc: "Hibiscus iced tea with mint-lemon syrup." },
      { name: "Coca-Cola zero", price: "3,30", desc: "" },
      { name: "Sourcy rood", price: "3,30", desc: "" },
      { name: "Lemongrass lemon lemonade", price: "4,50", desc: "Homemade lemongrass lemon lemonade." },
      { name: "Iced coffee", price: "4,00", desc: "" },
    ],
  },
];

// Decorative SVG (subtle)
const SandoPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full opacity-10"
    aria-hidden
    viewBox="0 0 200 200"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="sandopat" width="40" height="40" patternUnits="userSpaceOnUse">
        <g stroke="currentColor" strokeWidth="3" fill="none" color="var(--ink)">
          <path d="M5 30 Q20 10 35 30" />
          <path d="M5 30 Q20 40 35 30" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#sandopat)" />
  </svg>
);

// Page -----------------------------------------------------------------------
function RanchiLandingPageInner() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <StyleTokens />
      <TopBar />
      <main>
        <Hero />
        <DesignSystemStrip />
        <About />
        <Menu />
        <Visit />
      </main>
      <Footer />
      <StickyOrderBar />
    </div>
  );
}

// Sections -------------------------------------------------------------------
const TopBar = () => (
  <header className="sticky top-0 z-40 border-b-2 border-[var(--ink)] bg-[var(--mayo)]/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
      <a href="#top" className="flex items-center gap-3">
        <div
          className={`grid h-8 w-8 place-content-center ${R.chip} border-2 border-[var(--ink)] bg-[var(--umami)] font-black leading-none shadow-[2px_2px_0_0_var(--ink)]`}
        >
          🍞
        </div>
        <div className="text-lg font-black leading-tight tracking-tight">
          Ranchi Amsterdam
          <span className="block text-[11px] font-semibold tracking-widest text-[var(--ink)]/70">
            Japanese style sandwiches
          </span>
        </div>
      </a>
      <nav className="hidden gap-8 md:flex">
        <a href="#menu" className="text-sm font-semibold underline decoration-[3px] underline-offset-4 hover:underline">
          Menu
        </a>
        <a href="#about" className="text-sm font-semibold underline decoration-[3px] underline-offset-4 hover:underline">
          About
        </a>
        <a href="#visit" className="text-sm font-semibold underline decoration-[3px] underline-offset-4 hover:underline">
          Visit
        </a>
      </nav>
      <OrderMenuButton size="sm" />
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-6 md:pt-20">
    <Frame tone="orange">
      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="mb-4 inline-flex items-center gap-2.5">
            <Tag>Amsterdam</Tag>
            <Tag>Since 2020</Tag>
          </div>
          <h1 className="mt-1 text-4xl md:text-6xl font-black leading-[50px] tracking-[-3px]">
            The home of Japanese <span className="whitespace-nowrap">sando’s</span> in Amsterdam
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed md:text-lg">
            Crave-worthy katsu on thick milk bread. Bright, punchy flavors. Built by two brothers who turned lockdown into the city’s go-to for Japanese style sandwiches.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <OrderMenuButton size="lg" align="left" />
            <Button href="#menu" variant="ghost" size="lg">
              See the Menu
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative isolate w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px]">
            <SandoPattern />
            <div className="absolute inset-0 -rotate-1 p-3 md:p-4 z-10">
              <div className={`relative h-full w-full overflow-hidden ${R.inner} border-2 border-[var(--ink)] bg-white`}>
                <SafeImg
                  src={HERO_IMG}
                  alt="Wagyu katsu sando on milk bread"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rotate-1 z-40">
              <Frame tone="green" pad="sm">
                <div className="text-sm font-black leading-none">
                  Open daily
                  <br />
                  11:00–17:00
                </div>
              </Frame>
            </div>
            <div className="absolute -right-4 -top-4 z-40">
              <Frame tone="white" pad="sm">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span>⭐️⭐️⭐️⭐️⭐️</span> “Best katsu in town”
                </div>
              </Frame>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  </section>
);

const DesignSystemStrip = () => (
  <section className="border-y-2 border-[var(--ink)] bg-[var(--paper)]">
    <div className="mx-auto grid max-w-7xl grid-cols-2 items-stretch gap-5 px-4 py-5 md:grid-cols-6 md:px-6">
      {[
        { name: "Umami", var: "--umami" },
        { name: "Nori", var: "--nori" },
        { name: "Pickled Pink", var: "--pickled-pink" },
        { name: "Mayo", var: "--mayo" },
        { name: "Paper", var: "--paper" },
        { name: "Ink", var: "--ink", ring: true },
      ].map((c) => (
        <div key={c.name} className="flex items-center gap-3.5">
          <div
            className={`h-10 w-10 ${R.inner} border-2 ${
              c.ring ? "border-[var(--ink)] bg-[var(--paper)]" : "border-[var(--ink)]"
            }`}
            style={{ background: `var(${c.var})` }}
          />
          <div className="text-xs font-semibold leading-tight">{c.name}</div>
        </div>
      ))}
      <div className="col-span-2 hidden items-center justify-end gap-3 md:flex">
        <Tag>Bold frames</Tag>
        <Tag>Punchy palette</Tag>
        <Tag>Playful type</Tag>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <div className="mb-7">
      <HeaderKicker title="About us" subtitle="Two brothers. One mission: elevate the humble sandwich." />
    </div>
    <div className="grid items-stretch gap-10 md:grid-cols-2">
      {/* Story left */}
      <Frame tone="cream" fill>
        <p className="text-base leading-relaxed">
          As two brothers who worked in hospitality for years, we watched restaurants close during the pandemic. Stuck at
          home with no clear end in sight, we asked how to make the best of dark times. Amsterdam’s food scene had evolved,
          but the everyday sandwich… not so much.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Our search led to the Japanese <em>sando</em>—taking North America by storm. We figured Amsterdam could use one
          too. Home delivery became the obvious start. After testing with friends and family, we took the plunge and
          launched on Instagram.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Ranchi Amsterdam was born. We’ve supplied the city with crispy, juicy, joy-packed Japanese style sandwiches ever
          since.
        </p>
        <div className="mt-7">
          <Button href="#menu">Explore the menu</Button>
        </div>
      </Frame>
      {/* Founders photo right */}
      <div className="grid gap-6">
        <Frame tone="white" pad="none" inner={false}>
          <div className={`relative ${R.outer} overflow-hidden`}>
            <div className="relative w-full h-[280px] md:h-[360px] lg:h-[420px]">
              <SafeImg
                src={OWNER_IMG}
                alt="Ranchi owners at the storefront"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </Frame>
        <Frame tone="orange" pad="md">
          <p className="text-base font-semibold leading-relaxed">
            “When that katsu crunch hits milk bread and Bulldog sauce… that’s our happy place.”
          </p>
        </Frame>
      </div>
    </div>
  </section>
);

const Menu = () => (
  <section id="menu" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <HeaderKicker title="Menu" subtitle="Sando's · Side's & snacks · Desserts · Drinks" />

    {/* House favorite callout — shown first to guide attention */}
    <div className="mt-6 w-full md:w-[50vw] md:ml-0">
      <Frame tone="pink" pad="none" inner={false}>
        <div className={`relative ${R.outer} overflow-hidden`}>
          <div className="relative h-[260px] md:h-[360px] lg:h-[420px]">
            <SafeImg
              src={IMG["Chicken katsu"]}
              alt="House favorite chicken katsu sando"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute left-4 top-4">
              <Frame tone="green" pad="sm">
                <span className="text-xs font-black uppercase tracking-wide">House favorite</span>
              </Frame>
            </div>
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3">
              <div className="max-w-[70%] md:max-w-none">
                <h3 className="text-xl md:text-2xl font-black leading-tight">Chicken katsu sando</h3>
                <p className="text-sm md:text-base font-semibold opacity-90">
                  Crispy 24h-brined chicken, milk bread, cabbage & Bulldog sauce.
                </p>
              </div>
              <OrderMenuButton size="md" align="right" label="Order the favorite" />
            </div>
          </div>
        </div>
      </Frame>
    </div>

    <div className="mt-10 grid gap-12">
      {MENU.map((block) => (
        <div key={block.category}>
          <div className="mb-5 inline-flex items-center gap-3">
            <h3 className="text-2xl font-black">{block.category}</h3>
            <div className="h-2 w-2 rounded-full bg-[var(--ink)]" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {block.items.map((i) => (
              <Frame key={i.name} tone="white" pad="md">
                <div className="flex items-start gap-4">
                  <div className={`hidden h-24 w-28 shrink-0 overflow-hidden ${R.inner} border-2 border-[var(--ink)] md:block`}>
                    <SafeImg alt={i.name} className="h-full w-full object-cover" src={IMG[i.name]} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-black leading-tight">{i.name}</h4>
                      <div className={`${R.chip} border-2 border-[var(--ink)] bg-[var(--mayo)] px-2 py-1 text-sm font-black`}>
                        €{i.price}
                      </div>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed">{i.desc}</p>
                    {!!i.tags?.length && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {i.tags!.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Frame>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Visit = () => (
  <section id="visit" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <HeaderKicker title="Visit & contact" subtitle="Come say hi or order for pickup/delivery" />
    <div className="mt-7 grid items-stretch gap-8 md:grid-cols-2">
      <Frame tone="cream" fill>
        <div className="grid gap-3 text-base">
          <div className="font-black">Address</div>
          <p>Albert Cuypstraat 260h, 1073BR Amsterdam</p>
          <div className="mt-4 font-black">Hours</div>
          <p>Open daily from 11:00 to 17:00</p>
          <div className="mt-4 font-black">Contact</div>
          <p>
            <a className="underline decoration-[3px] underline-offset-4" href="mailto:info@ranchi.amsterdam">
              info@ranchi.amsterdam
            </a>
            <br />
            <a className="underline decoration-[3px] underline-offset-4" href="tel:+31681912883">
              +31 6 8191 2883
            </a>
          </p>
          <p className="mt-2 text-sm">
            IG:{" "}
            <a className="underline decoration-[3px] underline-offset-4" href="https://instagram.com/Ranchi.Amsterdam">
              @Ranchi.Amsterdam
            </a>
          </p>
        </div>
        <div className="mt-7">
          <OrderMenuButton />
        </div>
      </Frame>
      <Frame tone="white" pad="none" inner={false} fill>
        <div className={`relative ${R.outer} h-full overflow-hidden`}>
          <iframe
            title="Map to Ranchi Amsterdam"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.885%2C52.350%2C4.900%2C52.360&layer=mapnik&marker=52.356%2C4.892"
          />
        </div>
      </Frame>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-16 border-t-2 border-[var(--ink)] bg-[var(--paper)]">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
      <div>
        <div className="text-xl font-black leading-tight">Ranchi Amsterdam</div>
        <p className="mt-1 text-sm font-semibold tracking-wide text-[var(--ink)]/70">
          Japanese style sandwiches on thick milk bread.
        </p>
      </div>
      <nav className="flex items-start gap-6 md:justify-center">
        <a href="#menu" className="text-sm font-semibold underline decoration-[3px] underline-offset-4 hover:underline">
          Menu
        </a>
        <a href="#about" className="text-sm font-semibold underline decoration-[3px] underline-offset-4 hover:underline">
          About
        </a>
        <a href="#visit" className="text-sm font-semibold underline decoration-[3px] underline-offset-4 hover:underline">
          Visit
        </a>
      </nav>
      <div className="flex items-start justify-start gap-3 md:justify-end">
        <a
          href="https://www.instagram.com/ranchi.amsterdam/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`grid h-9 w-9 place-content-center rounded-full border-2 border-[var(--ink)] bg-[var(--mayo)] shadow-[2px_2px_0_0_var(--ink)] transition-transform active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--ink)]`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z" />
            <path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6z" />
            <circle cx="17.5" cy="6.5" r="1.25" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/Ranchi.Amsterdam/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={`grid h-9 w-9 place-content-center rounded-full border-2 border-[var(--ink)] bg-[var(--mayo)] shadow-[2px_2px_0_0_var(--ink)] transition-transform active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--ink)]`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114.3 6h2.7v3h-2c-.7 0-1.3.6-1.3 1.3V12H17l-.5 3h-3v7A10 10 0 0022 12z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="border-t-2 border-[var(--ink)] bg-[var(--mayo)] px-4 py-3 text-center text-xs font-semibold md:px-6">
      © {new Date().getFullYear()} Ranchi Amsterdam
    </div>
  </footer>
);

const StickyOrderBar = () => (
  <div className="fixed inset-x-0 bottom-3 z-40 mx-auto w-full max-w-3xl px-4 md:hidden">
    <div className={`border-2 border-[var(--ink)] bg-[var(--mayo)] p-3 shadow-[4px_4px_0_0_var(--ink)] ${R.outer}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-black leading-none">Craving a sando?</div>
          <div className="text-[11px] font-semibold opacity-80">Open today 11:00–17:00</div>
        </div>
        <OrderMenuButton size="sm" />
      </div>
    </div>
  </div>
);

// Header kicker --------------------------------------------------------------
const HeaderKicker: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="flex flex-wrap items-end justify-between gap-3">
    <div>
      <div
        className={`inline-flex items-center gap-2 ${R.chip} border-2 border-[var(--ink)] bg-[var(--mayo)] px-2 py-1 text-[11px] font-black tracking-widest uppercase`}
      >
        Greetings from <span className="text-[var(--umami)]">Ranchi</span>
      </div>
      <h2 className="mt-3 text-3xl font-black md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-1 max-w-prose text-sm font-semibold leading-relaxed text-[var(--ink)]/80">{subtitle}</p>
      )}
    </div>
  </div>
);

// Tokens ---------------------------------------------------------------------
const StyleTokens = () => (
  <style>{`
    :root{
      --umami: #ff6a2a;        /* punchy orange-red */
      --nori: #2aa76b;          /* fresh green */
      --pickled-pink: #ff9bd0;  /* playful pink */
      --mayo: #fff6d6;          /* warm cream */
      --paper: #fffaf1;         /* background */
      --ink: #111111;           /* near-black */
    }
    html,body{scroll-behavior:smooth}
  `}</style>
);

/* -------------------------------------------------------------------------- */
/* Next.js default export                                                      */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return <RanchiLandingPageInner />;
}
