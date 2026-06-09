import { SectionHeader } from "./ProductSection";
import { useHs, type Goal } from "@/lib/hs-context";
import {
  TrendingUp,
  Wallet,
  Megaphone,
  LayoutDashboard,
  Tablet,
  Plug,
  Boxes,
  Headphones,
  Megaphone as MegaphoneAlt,
  Smartphone,
  Heart,
  CalendarDays,
  Globe,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import rider from "@/assets/delivery-rider.jpg";
import deckHplus from "@/assets/deck-hplus.png";
import deckFullMenu from "@/assets/deck-full-menu-discount.png";
import deckSponsored from "@/assets/deck-sponsored-listing.png";
import deckKeyword from "@/assets/deck-keyword-search.png";
import deckDisplay from "@/assets/deck-display-ads.png";
import deckAwareness from "@/assets/deck-awareness-banner.png";
import deckOfferHour from "@/assets/deck-offer-hour.png";
import deckVendorPortal from "@/assets/deck-vendor-portal.png";
import { ProductCard, type ProductCardData } from "./ProductCard";
import { ProductFamilyLayout } from "./ProductFamilyLayout";

function isOn(goal: Goal | null, target: Goal) {
  return goal === target;
}

/* ============================================================
   INCREASE ORDER VALUE & VOLUME — flagship: RDF/HPlus
   ============================================================ */

// Source: Jan 2025 deck, page 12 (Reduced Delivery Fees & HungerStation Plus)
// All stats below were Lovable-invented and NEED Sherif validation before external share.
const AOV_FLAGSHIP: ProductCardData = {
  name: "RDF / HPlus",
  subhead: "Reduce delivery fees to attract non-HPlus customers — and auto-enroll into the HPlus Vendor Pool.",
  body: "RDF (Reduced Delivery Fees) is a discount type designed to lower delivery fees for customers, particularly non-HPlus subscribers, to drive higher order volumes. Subscribing to RDF automatically enrolls partners into the HPlus Vendor Pool — where HPlus subscribers (HungerStation's free-delivery membership customers) see your restaurant with free delivery.",
  stats: [
    { value: "~2-3×", label: "order frequency lift" },
    { value: "+20-25%", label: "basket size lift" },
    { value: "+150-200%", label: "monthly orders (case lift)" },
  ],
  statsStatus: "directional",
  image: (
    <img
      src={deckHplus}
      alt="HungerStation HPlus app — phone showing free-delivery membership"
      loading="lazy"
      className="rounded-2xl w-full max-w-md mx-auto"
    />
  ),
  benefits: [
    "Drive more order volume",
    "Increase Menu Views for your restaurants",
    "Auto-enrollment into HPlus Vendor Pool",
    "No creative work required",
  ],
  steps: [
    { t: "Log in to Vendor Portal.", d: "Go to Promotions → Discounts." },
    { t: "Pick RDF discount.", d: "Select Discount Type → Fixed Delivery Fee. Configure your reduction." },
    { t: "Auto-enroll into HPlus pool.", d: "Subscribing to RDF automatically adds you to the HPlus Vendor Pool — visible to HPlus subscribers with free delivery." },
  ],
  testimonial: {
    quote: "[Vendor testimonial — NEEDS Omar (real KSA partner with HPlus consent + verified numbers)]",
    author: "[Vendor name, brand, city]",
  },
  economics: [
    { label: "Pricing model", value: "Vendor-funded discount" },
    { label: "Minimum spend", value: "[NEEDS Sherif]" },
    { label: "Expected lift", value: "[NEEDS Sherif]" },
  ],
  scenarioKey: "hplus",
};

const AOV_SECONDARY: ProductCardData[] = [
  // Source: Jan 2025 deck, page 13 (Super Saver)
  {
    name: "Super Saver",
    subhead: "Get featured in the Super Saver section — the spot in the app where customers actively browse for discounts.",
    body: "A promotional offer designed to boost visibility for partner restaurants. Participating restaurants appear under the popular \"Super Saver\" icon on the app's main screen — a spot where customers frequently look for discounts and deals. Items on sale carry a bright red tag, increasing visibility.",
    stats: [
      { value: "+30-40%", label: "featured visibility" },
      { value: "+15-25%", label: "incremental orders" },
    ],
    statsStatus: "directional",
    benefits: [
      "Featured placement in Super Saver section",
      "Red sale tags on discounted items",
      "Higher visibility on the app's main screen",
      "Repeat customer engagement via discount hook",
    ],
    steps: [
      { t: "Activate from Vendor Portal.", d: "Go to Promotions and enable Super Saver." },
      { t: "Set discount and items.", d: "Choose discount level and which items go on sale." },
      { t: "Get featured.", d: "Customers see your offers under the Super Saver icon on the app's main screen." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar (real Super Saver participant with verified numbers)]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Vendor-funded discount" },
      { label: "Activation", value: "Vendor Portal · Self-serve" },
      { label: "Expected lift", value: "[NEEDS Sherif]" },
    ],
    scenarioKey: "super-saver",
  },
  // Source: Jan 2025 deck, page 14 (Full Menu Discounts)
  {
    name: "Full Menu Discounts",
    subhead: "Discount your entire menu — 20% to 65% off — to capture customers actively filtering for offers.",
    body: "Full Menu Discount is a promotion that lets vendors offer a percentage discount across their entire menu, ranging from 20% to 65% off. Attracts customers actively filtering for offers in the app and increases customer visibility for participating restaurants.",
    stats: [
      { value: "20-65%", label: "off menu (range)" },
      { value: "+25-35%", label: "weekend order lift" },
    ],
    statsStatus: "directional",
    image: (
      <img
        src={deckFullMenu}
        alt="Full Menu Discount on HungerStation — 20% off whole menu"
        loading="lazy"
        className="rounded-2xl w-full max-w-xs mx-auto"
      />
    ),
    benefits: [
      "20%–65% off the entire menu",
      "Customer offer-filter visibility",
      "Order-level discount cap to protect margin",
      "Promotion applies across all menu items, not select dishes",
    ],
    steps: [
      { t: "Vendor Portal: Promotions → Discounts.", d: "Choose Percentage Discount type." },
      { t: "Configure.", d: "Select Full Menu under Select Menu. Pick discount level (20%–65%) and order cap." },
      { t: "Confirm and launch.", d: "Your full menu appears as a featured offer to customers filtering for deals." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar (real Full Menu Discount participant)]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Vendor-funded" },
      { label: "Discount range", value: "20%–65% off menu" },
      { label: "Per-order cap", value: "Vendor-configured" },
    ],
    scenarioKey: "full-menu",
  },
  // Source: Jan 2025 deck, page 15 (Meal for One)
  {
    name: "Meal for One",
    subhead: "Solo-meal offers built into the app. Customers see your meal-for-one listings on the homepage, separate from your regular menu, and go straight to checkout.",
    body: "Meal for One provides convenient and budget-friendly meal options tailored for individual customers. Solo diners choose from a variety of meals perfect for single-portion dining. Meal for One listings appear separately from the regular menu on the homepage — customers go directly to cart and checkout.",
    stats: [
      { value: "≤ 29 SAR", label: "max meal price" },
      { value: "20%+", label: "min discount required" },
      { value: "+15-25%", label: "solo-diner reach lift" },
    ],
    statsStatus: "directional",
    benefits: [
      "Free delivery on co-funded meals",
      "Homepage placement (separate from regular menu)",
      "Swimlane on restaurant listing page",
      "Reach the solo-diner customer segment",
    ],
    steps: [
      { t: "Offer a qualifying meal.", d: "20%+ discount, discounted price must be 29 SAR or less." },
      { t: "Listing appears.", d: "Meal shows on the Meal for One homepage section with your restaurant name and discount." },
      { t: "Direct-to-checkout.", d: "Customer picks the meal and goes straight to cart — no menu browsing required." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Co-funded delivery (HS + vendor)" },
      { label: "Min discount", value: "20% off" },
      { label: "Max discounted price", value: "SAR 29" },
    ],
    scenarioKey: "meal-for-one",
  },
  // Source: Jan 2025 deck, page 16 (Loyalty Programs / HRewards)
  {
    name: "HRewards",
    subhead: "Reach HungerStation's highest-frequency customers. HRewards customers earn points on every order — redeemable as discounts on the total order value.",
    body: "HRewards is a loyalty program designed for customers who contribute the highest market share of online orders to our partners. Customers earn points on their orders, redeemable as monetary discounts on the total order value from participating vendors. The program offers exclusive visibility to these top customers by funding discount vouchers.",
    stats: [
      { value: "Pay-on-redeem", label: "no cost until customer redeems" },
      { value: "+25-35%", label: "repeat-customer lift" },
      { value: "Monthly cap", label: "vendor-defined budget" },
    ],
    statsStatus: "directional",
    benefits: [
      "Pre-defined monthly budget — no surprises",
      "Pay only for redeemed orders",
      "Exclusive visibility to top-spending customers",
      "Enhanced vendor menu placement",
    ],
    steps: [
      { t: "Setup in Operations Portal.", d: "Define your monthly budget based on spending potential." },
      { t: "Get featured.", d: "HRewards customers see your menu with the loyalty badge and reward eligibility." },
      { t: "Pay on redemption only.", d: "You're charged only when a customer actually redeems points on your order." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar (HRewards participant with verified retention data)]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Pay-per-redemption" },
      { label: "Setup", value: "Operations Portal" },
      { label: "Budget control", value: "Vendor-defined monthly cap" },
    ],
    scenarioKey: "hrewards",
  },
];

export function OrderValueSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "aov");

  return (
    <section id="order-value" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={TrendingUp}
        eyebrow="Increase Order Value & Volume"
        title="More orders. Bigger baskets."
        copy="Tools that grow how often customers order — and how much they spend per order."
        highlight={highlight}
      />

      <ProductFamilyLayout
        sectionId="order-value"
        products={[AOV_FLAGSHIP, ...AOV_SECONDARY]}
        highlight={highlight}
      />
    </section>
  );
}

/* ============================================================
   ATTRACT NEW CUSTOMERS — flagship: Sponsored Listing
   ============================================================ */

// Source: Jan 2025 deck, pages 19-20 (Sponsored Listing CPC + Placements)
// Stats Lovable-invented — NEED Sherif validation.
const ATTRACT_FLAGSHIP: ProductCardData = {
  name: "Sponsored Listing",
  subhead: "Pay-per-click ads that boost your brand across HungerStation's browse, search, and product listing pages.",
  body: "Sponsored Listing (CPC) boosts brands and products more prominently on HungerStation's browse, search, and relevant product listing pages. Partners participating in our Cost Per Click (CPC) model enjoy elevated priority (higher positions in listings) to maximize conversions. Available across 5 placement types: Restaurant Listing page, Featured Homepage swimlane, Recently Viewed swimlane, Top Rated, and Pre-Search.",
  stats: [
    { value: "5 placements", label: "across the app" },
    { value: "~3-4×", label: "avg ROAS" },
    { value: "+200-300%", label: "impression lift" },
  ],
  statsStatus: "directional",
  image: (
    <img
      src={deckSponsored}
      alt="HungerStation Sponsored Listing — restaurant listing page with sponsored brands"
      loading="lazy"
      className="rounded-2xl w-full max-w-xs mx-auto"
    />
  ),
  benefits: [
    "Elevated priority across 5 placement types",
    "Pay only per click (CPC model)",
    "Daily budget control",
    "Area-level targeting flexibility",
  ],
  steps: [
    { t: "Create your campaign.", d: "Set up in Vendor Portal: cities, daily budget, max CPC, target placements." },
    { t: "Get featured.", d: "Your restaurant appears in premium slots across Homepage swimlane, Top Rated, Recently Viewed, Restaurant Listing, and Pre-Search." },
    { t: "Monitor and adjust.", d: "View campaign performance daily — refine bids, budget, and target areas as needed." },
  ],
  testimonial: {
    quote: "[Vendor testimonial — NEEDS Omar (real Sponsored Listing campaign with verified ROAS)]",
    author: "[Vendor name, brand, city]",
  },
  economics: [
    { label: "Pricing model", value: "CPC (cost per click)" },
    { label: "Min daily budget", value: "[NEEDS Sherif]" },
    { label: "Expected ROAS", value: "[NEEDS Sherif]" },
  ],
  scenarioKey: "sponsored",
};

const ATTRACT_SECONDARY: ProductCardData[] = [
  // Source: Jan 2025 deck, page 21 (Keyword Search CPC)
  {
    name: "Keyword Search",
    subhead: "Bid on specific search terms — cuisines, dishes — and appear at the top of search results.",
    body: "The Keyword CPC Search Tool allows vendors to bid on specific search terms, such as cuisines or dishes, to gain visibility in search results. Similar to Premium Placement CPC, it charges vendors only for clicks and uses all available CPC slots. Item-level or cuisine-level targeting based on consumer behavior. Combined with Sponsored Listing, it compounds conversion likelihood.",
    stats: [
      { value: "~3×", label: "avg ROAS" },
      { value: "Item-level", label: "targeting precision" },
    ],
    statsStatus: "directional",
    image: (
      <img
        src={deckKeyword}
        alt="HungerStation Keyword Search — pre-search recent terms and most popular"
        loading="lazy"
        className="rounded-2xl w-full max-w-xs mx-auto"
      />
    ),
    benefits: [
      "Item-level or cuisine-level targeting",
      "Pay only per click (CPC)",
      "Set budget by area and search term",
      "Stacks with Sponsored Listing for compounding conversions",
    ],
    steps: [
      { t: "Pick your search terms.", d: "Vendor Portal: select cuisines, dishes, or specific search terms to bid on." },
      { t: "Set bid and budget.", d: "Max CPC, daily budget, and area-level targeting." },
      { t: "Monitor and adjust.", d: "Daily performance view — adjust bids and budget by area." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "CPC (cost per click)" },
      { label: "Min CPC", value: "[NEEDS Sherif]" },
      { label: "Booking", value: "Vendor Portal · Self-serve" },
    ],
    scenarioKey: "keyword",
  },
  // Source: Jan 2025 deck, pages 22-23 (Display Ads + Placements)
  {
    name: "Display Ads",
    subhead: "Visual brand ads across the HungerStation app — image-based, full-attention, designed to drive awareness.",
    body: "Drive your brand's awareness through HungerStation Display Ads. Image-based ads designed to capture instant attention and engage users more effectively than text-based ads. Available across 5 placements: Order Tracking page, Offers screen, Homepage, Restaurant Listing page, and the More tab.",
    stats: [
      { value: "5 placements", label: "across the app" },
      { value: "~2-2.5×", label: "avg ROAS" },
      { value: "Full-screen", label: "visual format" },
    ],
    statsStatus: "directional",
    image: (
      <img
        src={deckDisplay}
        alt="HungerStation Display Ad — KFC Meal for One on Order Tracking page"
        loading="lazy"
        className="rounded-2xl w-full max-w-xs mx-auto"
      />
    ),
    benefits: [
      "Full-screen visual format — image-led",
      "5 placements across the app",
      "Boosted brand awareness across user sessions",
      "Budget control by area and daily spend",
    ],
    steps: [
      { t: "Choose your placements.", d: "Select from 5 placement types: Order Tracking, Offers, Homepage, Restaurant Listing, More tab." },
      { t: "Upload creative.", d: "Image-led, brand-forward visual. (HS studio can support creative if needed.)" },
      { t: "Set budget and target.", d: "Daily budget, area targeting. Track campaign performance daily." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "[NEEDS Sherif — likely CPM]" },
      { label: "Min spend", value: "[NEEDS Sherif]" },
      { label: "Booking", value: "Vendor Portal or AM" },
    ],
    scenarioKey: "display",
  },
  // Source: Jan 2025 deck, page 24 (Awareness Banner)
  {
    name: "Awareness Banner",
    subhead: "Prime real estate at the top of the HungerStation home screen — your product in front of every customer.",
    body: "Awareness Banner is prime real estate in the HungerStation app, placed prominently on top of the Home Screen. Daily exposure to a broad audience — capturing full user attention with prominent placement and brand-forward creative.",
    stats: [
      { value: "Top of Home", label: "first thing customers see" },
      { value: "+10-15%", label: "brand recall lift" },
      { value: "Daily window", label: "campaign duration" },
    ],
    statsStatus: "directional",
    image: (
      <img
        src={deckAwareness}
        alt="HungerStation Awareness Banner — SNB Local Shops banner on home screen"
        loading="lazy"
        className="rounded-2xl w-full max-w-xs mx-auto"
      />
    ),
    benefits: [
      "Top of the Home Screen — first thing customers see",
      "Daily exposure to the HS customer base",
      "Brand-forward visual format — full attention",
      "High engagement via prominent placement",
    ],
    steps: [
      { t: "Book the placement.", d: "Via Account Manager or Vendor Portal — reserve your campaign window." },
      { t: "Provide creative.", d: "Image-led, single brand message. (HS studio can support creative.)" },
      { t: "Banner runs.", d: "Top of the Home Screen for your chosen campaign window — visible to every user opening the app." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Flat fee per campaign window" },
      { label: "Booking", value: "Via AM or Vendor Portal" },
      { label: "Availability", value: "Limited supply — first come basis" },
    ],
    scenarioKey: "awareness",
  },
  // Source: Jan 2025 deck, page 25 (Offer Hour / FlashDeals / Joker)
  {
    name: "Offer Hour / FlashDeals",
    subhead: "Time-bounded flash promotions with tiered discounts. Customers have 45 minutes to complete their order.",
    body: "FlashDeals (Joker) is a tool to attract users with limited-time offers featuring high discounts. Customers have a 45-minute window to complete the full order cycle. Discounts scale with basket size — higher basket = higher discount. Users pay a fixed delivery fee for all Joker vendors (free for HPlus subscribers). FlashDeals has its own dedicated vendor listing and order flow.",
    stats: [
      { value: "45 min", label: "customer order window" },
      { value: "+30-50%", label: "off-peak order lift" },
      { value: "Tiered", label: "basket-based discounts" },
    ],
    statsStatus: "directional",
    image: (
      <img
        src={deckOfferHour}
        alt="HungerStation FlashDeals — tiered basket discounts with 45-min window"
        loading="lazy"
        className="rounded-2xl w-full max-w-xs mx-auto"
      />
    ),
    benefits: [
      "Tiered discounts — bigger baskets, bigger discounts",
      "45-minute customer order window drives urgency",
      "Dedicated FlashDeals vendor listing — your brand front and center",
      "Fixed delivery fee for all Joker vendors (free for HPlus)",
    ],
    steps: [
      { t: "Launch your campaign.", d: "Vendor Portal: set up your FlashDeals campaign with tiered discounts." },
      { t: "Configure tiers and target.", d: "Set discount levels by basket size, daily acquisition target, and target areas." },
      { t: "Monitor live.", d: "Track campaign performance and adjust during the window." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Vendor-funded discount" },
      { label: "Customer order window", value: "45 minutes" },
      { label: "Delivery fee", value: "Fixed (e.g. SAR 7) · Free for HPlus" },
    ],
    scenarioKey: "offer-hour",
  },
  // Source: Jan 2025 deck, page 26 (Splash Screen)
  {
    name: "Splash Screen",
    subhead: "Full-screen brand moment on every customer's HungerStation app launch. Reach millions in a single campaign window.",
    body: "The HungerStation Splash Screen offers a unique opportunity to reach a wider audience. This exclusive feature enables you to reach millions of customers across Saudi Arabia. The ad captures full user attention by occupying the entire screen — strong, immediate brand impact on every app launch within the campaign window.",
    stats: [
      { value: "Every", label: "app launch in window" },
      { value: "+12-18%", label: "brand recall lift" },
      { value: "Limited", label: "supply per day" },
    ],
    statsStatus: "directional",
    benefits: [
      "Full-screen — entire screen real estate",
      "Every app launch within your campaign window",
      "Strongest brand impact on the platform",
      "Highest engagement and recall",
    ],
    steps: [
      { t: "Book the placement.", d: "Via Account Manager — Splash windows are limited supply." },
      { t: "Provide creative.", d: "Image or short video, brand-forward. (HS studio supports creative.)" },
      { t: "Splash goes live.", d: "Every app launch within your campaign window shows your brand first." },
    ],
    testimonial: {
      quote: "[Vendor testimonial — NEEDS Omar]",
      author: "[Vendor name, brand, city]",
    },
    economics: [
      { label: "Pricing model", value: "Flat fee per campaign window" },
      { label: "Booking", value: "Via AM only" },
      { label: "Availability", value: "Highly limited — book in advance" },
    ],
    scenarioKey: "splash",
  },
];

export function AttractSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "newcustomers");
  return (
    <section
      id="attract"
      className="relative scroll-mt-24 border-t border-border bg-background text-foreground"
    >
      <SectionHeader
        icon={Megaphone}
        eyebrow="Attract New Customers"
        title="Be the first thing they tap."
        copy="The full ad stack across HungerStation — from sponsored placements to time-boxed flash deals — running where 9M+ Saudis already decide what to eat."
        highlight={highlight}
      />
      <ProductFamilyLayout
        sectionId="attract"
        products={[ATTRACT_FLAGSHIP, ...ATTRACT_SECONDARY]}
        highlight={highlight}
      />

      <div className="container-x pb-20 md:pb-28">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Booking channels:
          <span className="rounded-full border px-3 py-1">Via Account Manager</span>
          <span className="rounded-full border px-3 py-1">Self-Booking Portal</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FUND YOUR GROWTH — Vendor Financing (placeholder)
   Note: Mofawter is a customer-facing postpaid (BNPL) payment
   capability — it does NOT belong in this section. The product
   here is "Vendor Financing", which is a separate offering for
   vendors. No source content available yet — NEEDS owner.
   ============================================================ */

// Source: NONE. Vendor Financing content is not yet in the Jan 2025 deck or any other
// available source. Placeholder card — NEEDS the Vendor Financing product owner
// to provide product description, terms, eligibility, case studies, and imagery.
// Brief context: Q2 Top 3 priority #2 at SAR 120M target (vendor financing).
const VENDOR_FINANCING: ProductCardData = {
  name: "Vendor Financing",
  subhead: "[NEEDS owner — HungerStation vendor financing product: high-level description, target vendor, mechanism]",
  body: "[NEEDS owner — product description, eligibility criteria, repayment mechanism, target vendor profile, regulatory framing]",
  image: (
    <img
      src={rider}
      alt="HungerStation rider — placeholder until Vendor Financing imagery is available"
      loading="lazy"
      className="rounded-2xl w-full aspect-[4/5] object-cover"
    />
  ),
  stats: [
    { value: "[NEEDS owner]", label: "advance size range" },
    { value: "[NEEDS owner]", label: "time to disbursement" },
    { value: "[NEEDS owner]", label: "repayment model" },
  ],
  statsStatus: "directional",
  benefits: [
    "[NEEDS owner — verified benefit 1]",
    "[NEEDS owner — verified benefit 2]",
    "[NEEDS owner — verified benefit 3]",
    "[NEEDS owner — verified benefit 4]",
  ],
  steps: [
    { t: "[NEEDS owner — Step 1 title]", d: "[NEEDS owner — Step 1 detail]" },
    { t: "[NEEDS owner — Step 2 title]", d: "[NEEDS owner — Step 2 detail]" },
    { t: "[NEEDS owner — Step 3 title]", d: "[NEEDS owner — Step 3 detail]" },
  ],
  testimonial: {
    quote: "[NEEDS Omar — real Vendor Financing vendor case with verified advance size, repayment timeline, and use case]",
    author: "[Vendor name, brand, city]",
  },
  economics: [
    { label: "Advance size", value: "[NEEDS owner]" },
    { label: "Repayment model", value: "[NEEDS owner]" },
    { label: "Term length", value: "[NEEDS owner]" },
    { label: "Eligibility", value: "[NEEDS owner]" },
  ],
  scenarioKey: "vendor-financing",
};

export function FinancingSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "financing");

  return (
    <section id="financing" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={Wallet}
        eyebrow="Fund Your Growth"
        title="Fund Your Growth."
        copy="HungerStation's vendor financing product — designed to help partner restaurants invest in growth. [NEEDS owner: full product description.]"
        highlight={highlight}
      />
      <div className="container-x pb-20 md:pb-28">
        <ProductCard data={VENDOR_FINANCING} size="flagship" highlight={highlight} />
      </div>
    </section>
  );
}

/* ============================================================
   OPTIMIZE OPERATIONS — Vendor Portal flagship + 2 secondary
   + 9-module mini grid (unchanged)
   ============================================================ */

// Source: Jan 2025 deck, page 31 (Vendor Portal)
// Stats are factual (capabilities, not invented numbers) — no directional flag.
const OPS_FLAGSHIP: ProductCardData = {
  name: "Vendor Portal",
  subhead:
    "One dashboard to run every HungerStation function — menus, branch hours, promotions, performance, invoices.",
  body: "The Vendor Portal is a dashboard for vendors to track and manage all their restaurants. Manage branch hours, update menus, control store availability, monitor overall business performance, and run campaigns and offers. The go-to dashboard for vendors to keep their business in check. Documentation: partner-app.hungerstation.com/faq",
  image: (
    <img
      src={deckVendorPortal}
      alt="HungerStation Vendor Portal — dashboard mockup on tablet"
      loading="lazy"
      className="rounded-2xl w-full max-w-md mx-auto"
    />
  ),
  benefits: [
    "Multi-branch ready — manage all restaurants from one place",
    "Real-time menu and pricing edits",
    "Operational health monitoring — offline hours, rejections",
    "Live analytics — overall sales, by branch, by item",
  ],
  steps: [
    { t: "Log in to Vendor Portal.", d: "Access via partner-app.hungerstation.com." },
    { t: "Manage from one dashboard.", d: "Menus, hours, promotions, team access — all branches in one place." },
    { t: "Pull reports.", d: "Sales by branch, item performance, operational health. Daily or automated to your inbox." },
  ],
  stats: [
    { value: "1", label: "dashboard" },
    { value: "All", label: "branches" },
    { value: "24/7", label: "access" },
  ],
  testimonial: null,
  economics: [
    { label: "Cost", value: "Included with HungerStation" },
    { label: "Setup", value: "Self-serve" },
    { label: "Documentation", value: "partner-app.hungerstation.com/faq" },
  ],
  scenarioKey: "vendor-portal",
};

const OPS_SECONDARY: ProductCardData[] = [
  // Source: Jan 2025 deck, page 32 (Order Management Application Suite)
  // Stats are factual capabilities, not invented numbers — no directional flag.
  {
    name: "Order Management Suite",
    subhead:
      "Manage live orders on the device you prefer — HS tablet, Windows app, or web. 24/7 support included.",
    body: "Whether you use a HungerStation-provided tablet, the HungerStation Windows app, or the HungerStation Order Management website, the Order Manager empowers you to manage orders in real time, mark items as out of stock, communicate with customers, and resolve issues efficiently — all with 24/7 access to support.",
    stats: [
      { value: "3", label: "device choices" },
      { value: "24/7", label: "live support" },
    ],
    benefits: [
      "Choose your device: HS tablet, Windows app, or web",
      "Live order tracking — instant notifications",
      "Communicate with riders and customers in-flow",
      "Mark items out of stock or pause your store in one click",
    ],
    steps: [
      { t: "Pick your device.", d: "HS-provided tablet, Windows app, or web — same functionality across all." },
      { t: "Receive orders live.", d: "Instant notifications for new and in-progress orders. Accept and prep from the same interface." },
      { t: "Manage and communicate.", d: "Update store hours, mark items out of stock, leave rider feedback. 24/7 support included." },
    ],
    economics: [
      { label: "Cost", value: "Included with HungerStation" },
      { label: "Devices", value: "Tablet · Windows app · Web" },
      { label: "Support", value: "24/7" },
    ],
    scenarioKey: "oms",
  },
  // Source: Jan 2025 deck, page 33 (Point of Sale Integrations)
  {
    name: "POS Integrations",
    subhead:
      "Connect your existing POS — Deliverect, FeedUs, UrbanPiper, Grubtech, or POSist — and receive HungerStation orders in your existing flow.",
    body: "A POS integration creates a bridge for HungerStation to send and retrieve data from your POS system, so you can manage incoming orders and menu updates in one place. Orders flow directly into your POS, menu updates auto-sync from POS to HS, and order accuracy improves with zero manual entry. Available integration partners: Deliverect, FeedUs, UrbanPiper, Grubtech, POSist.",
    stats: [
      { value: "5", label: "POS partners supported" },
      { value: "Auto-sync", label: "menu changes" },
      { value: "+20-30%", label: "order accuracy lift" },
    ],
    statsStatus: "directional",
    benefits: [
      "Orders flow directly into your existing POS",
      "Menu updates sync POS → HS automatically",
      "Zero manual entry — fewer errors, faster operations",
      "5 integration partners available",
    ],
    steps: [
      { t: "Confirm your POS.", d: "Check that your POS is one of the 5 supported partners (Deliverect, FeedUs, UrbanPiper, Grubtech, POSist)." },
      { t: "HS team handles setup.", d: "Our technical team manages the integration on your behalf." },
      { t: "Go live.", d: "Orders and menu sync within days. You manage your business as usual — HS appears as another channel in your POS." },
    ],
    economics: [
      { label: "Cost", value: "[NEEDS Sherif — setup fee model]" },
      { label: "Integration partners", value: "Deliverect · FeedUs · UrbanPiper · Grubtech · POSist" },
      { label: "Time to go-live", value: "[NEEDS Sherif]" },
    ],
    scenarioKey: "pos-integrations",
  },
];

const PLATFORM_MODULES = [
  { icon: Boxes, name: "Stock & Inventory", desc: "Track ingredient and item availability in real-time." },
  { icon: Headphones, name: "Call Center Panel", desc: "HungerStation customer service routes issues directly to your team." },
  { icon: MegaphoneAlt, name: "Marketing Tool", desc: "Run targeted promos from the vendor portal." },
  { icon: Smartphone, name: "Cockpit App", desc: "Mobile control center for managers on the go." },
  { icon: Heart, name: "Loyalty", desc: "HRewards integration for customer retention." },
  { icon: CalendarDays, name: "Table Reservation", desc: "Manage in-restaurant bookings alongside delivery." },
  { icon: Globe, name: "Online / Web Ordering", desc: "White-label ordering for your own channels." },
  { icon: MessageSquare, name: "Feedback Management", desc: "Customer ratings and reviews dashboard." },
  { icon: BarChart3, name: "Performance Reports", desc: "Daily, weekly, and monthly analytics." },
];

// keep icons referenced so unused imports don't break — Tablet/Plug shown via PLATFORM headers
void Tablet;
void Plug;

export function OpsSection() {
  const { goal } = useHs();
  const highlight = isOn(goal, "ops");
  return (
    <section id="ops" className="relative scroll-mt-24 border-t border-border">
      <SectionHeader
        icon={LayoutDashboard}
        eyebrow="Optimize Operations"
        title="Run a tighter kitchen."
        copy="The back-office stack — vendor portal, order management, POS integrations, and a built-in platform of tools that come with HungerStation."
        highlight={highlight}
      />
      <ProductFamilyLayout
        sectionId="ops"
        products={[OPS_FLAGSHIP, ...OPS_SECONDARY]}
        highlight={highlight}
      />

      <div className="container-x">
        {/* Built-in platform tools — 9-module mini grid */}
        <div className="mt-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Built-in platform tools
              </div>
              <h3 className="mt-3 font-display text-4xl md:text-5xl text-balance max-w-[18ch]">
                Tools that come with the platform.
              </h3>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Nine modules included by default — no extra licensing, no separate logins.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_MODULES.map((m) => (
              <div
                key={m.name}
                className="group flex gap-4 rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-cream">
                  <m.icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-display text-lg text-foreground leading-tight">{m.name}</div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-20" />
    </section>
  );
}
