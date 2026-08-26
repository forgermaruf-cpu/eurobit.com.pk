import productImg from "@/assets/product-membrane.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Bitumen Membrane" | "Admixture" | "Coating" | "Sealant";
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
};

export const productImage = productImg;

/**
 * NOTE ON SPECS: Product names, taglines, descriptions and applications below
 * are drawn from Eurobit's real product line (eurobit.com.pk). The numeric
 * spec values (thickness, softening point, dosage, coverage, etc.) are
 * PLACEHOLDERS pending your actual technical data sheets — swap these for
 * verified figures before publishing.
 */
export const products: Product[] = [
  {
    slug: "europroof-app-membrane",
    name: "EuroProof APP Membrane",
    category: "Bitumen Membrane",
    tagline: "APP-modified torch-on membrane for roofs and foundations.",
    description:
      "Atactic Polypropylene (APP) modified bitumen waterproofing membrane designed for torch-on application. Manufactured from a premium bitumen and APP compound with superior polyester reinforcement for excellent heat and UV resistance.",
    specs: [
      { label: "Type", value: "APP-modified, plastomeric" },
      { label: "Reinforcement", value: "Non-woven polyester" },
      { label: "Application", value: "Torch-on" },
      { label: "Use", value: "Roofs, foundations, basements, bridges & tunnels" },
    ],
    image: productImg,
  },
  {
    slug: "europroof-g-app-membrane",
    name: "EuroProof G APP Membrane",
    category: "Bitumen Membrane",
    tagline: "Granule-surfaced membrane for exposed rooftop applications.",
    description:
      "Mineral granule-surfaced APP-modified bitumen membrane, engineered for durability on exposed roofs without additional protective coating.",
    specs: [
      { label: "Type", value: "APP-modified, granule surfaced" },
      { label: "Reinforcement", value: "Non-woven polyester" },
      { label: "Application", value: "Torch-on, exposed roofs" },
      { label: "Finish", value: "Mineral granule" },
    ],
    image: productImg,
  },
  {
    slug: "europroof-al-app-membrane",
    name: "EuroProof AL APP Membrane",
    category: "Bitumen Membrane",
    tagline: "Aluminium-faced membrane, reflective and heat-resistant.",
    description:
      "APP-modified membrane finished with a durable aluminium foil surface that reflects heat and UV, suited to exposed rooftop applications in hot climates.",
    specs: [
      { label: "Type", value: "APP-modified, aluminium foil surfaced" },
      { label: "Reinforcement", value: "Non-woven polyester" },
      { label: "Application", value: "Exposed roofs" },
      { label: "Finish", value: "Aluminium foil" },
    ],
    image: productImg,
  },
  {
    slug: "eurostick-app-membrane",
    name: "EuroStick APP Membrane",
    category: "Bitumen Membrane",
    tagline: "Self-adhesive membrane for below-ground damp-proofing.",
    description:
      "High-quality self-adhesive APP membrane for damp-proofing below-ground concrete structures and walls, eliminating the need for torching where open-flame application is difficult.",
    specs: [
      { label: "Type", value: "Self-adhesive, APP-modified" },
      { label: "Application", value: "Cold-applied, no torch" },
      { label: "Use", value: "Below-ground walls & structures" },
      { label: "Reinforcement", value: "Non-woven polyester" },
    ],
    image: productImg,
  },
  {
    slug: "europroof-flex-g-membrane",
    name: "EuroProof Flex G Membrane",
    category: "Bitumen Membrane",
    tagline: "Self-adhesive damp-proofing membrane for below-grade structures.",
    description:
      "Flexible self-adhesive membrane designed for damp-proofing below-ground concrete structures and walls, providing reliable waterproofing where torching isn't practical.",
    specs: [
      { label: "Type", value: "Self-adhesive, flexible" },
      { label: "Application", value: "Cold-applied, no torch" },
      { label: "Use", value: "Below-ground structures & walls" },
      { label: "Reinforcement", value: "Non-woven polyester" },
    ],
    image: productImg,
  },
  {
    slug: "europroof-sbs-membrane",
    name: "EuroProof SBS Membrane",
    category: "Bitumen Membrane",
    tagline: "Elastomeric membrane with excellent flexibility for movement.",
    description:
      "Styrene-Butadiene-Styrene (SBS) modified bitumen membrane saturated with a rubberised asphaltic compound. Polyester reinforcement delivers superior tear strength, low-temperature flexibility, and dimensional stability.",
    specs: [
      { label: "Type", value: "SBS-modified, elastomeric" },
      { label: "Reinforcement", value: "Non-woven polyester" },
      { label: "Application", value: "Heat-welded, hot asphalt or cold process" },
      { label: "Use", value: "Roofs, tunnels, basements, cold areas" },
    ],
    image: productImg,
  },
  {
    slug: "europroof-g-sbs-membrane",
    name: "EuroProof G SBS Membrane",
    category: "Bitumen Membrane",
    tagline: "Granule-surfaced SBS membrane for re-roofing & flashings.",
    description:
      "Granule-surfaced SBS modified bitumen membrane suited to new roofing, re-roofing, and flashing details, with strong performance in low-temperature and freeze-thaw conditions.",
    specs: [
      { label: "Type", value: "SBS-modified, granule surfaced" },
      { label: "Reinforcement", value: "Non-woven polyester" },
      { label: "Application", value: "New roofing & re-roofing" },
      { label: "Use", value: "Low-temperature / freeze-thaw areas" },
    ],
    image: productImg,
  },
  {
    slug: "europroof-al-sbs-membrane",
    name: "EuroProof AL SBS Membrane",
    category: "Bitumen Membrane",
    tagline: "Aluminium-faced SBS membrane, reflective and durable.",
    description:
      "Aluminium foil-surfaced SBS modified bitumen membrane combining elastomeric flexibility with a reflective, weather-resistant finish for exposed applications.",
    specs: [
      { label: "Type", value: "SBS-modified, aluminium foil surfaced" },
      { label: "Reinforcement", value: "Non-woven polyester" },
      { label: "Application", value: "Exposed roofs" },
      { label: "Finish", value: "Aluminium foil" },
    ],
    image: productImg,
  },
  {
    slug: "euroboard-hd",
    name: "EuroBoard HD",
    category: "Coating",
    tagline: "High-density protective board for waterproofed surfaces.",
    description:
      "Protective board system used over waterproofing membranes to guard against mechanical damage during backfilling and construction.",
    specs: [
      { label: "Type", value: "High-density protection board" },
      { label: "Use", value: "Protects membranes at basements & foundations" },
      { label: "Installation", value: "Over completed membrane layer" },
      { label: "Category", value: "Protection accessory" },
    ],
    image: productImg,
  },
  {
    slug: "europrime",
    name: "EuroPrime",
    category: "Sealant",
    tagline: "Bitumen primer for surface preparation before membrane laying.",
    description:
      "Bituminous primer that improves adhesion between the substrate and modified bitumen membranes, ensuring a stronger, longer-lasting waterproofing bond.",
    specs: [
      { label: "Type", value: "Bituminous primer" },
      { label: "Use", value: "Substrate preparation before membrane laying" },
      { label: "Application", value: "Brush, roller or spray" },
      { label: "Category", value: "Primer" },
    ],
    image: productImg,
  },
  {
    slug: "eurofla",
    name: "EuroFlah",
    category: "Sealant",
    tagline: "Flashing compound for detailing around penetrations.",
    description:
      "Flashing and detailing compound used with Eurobit membranes around openings, penetrations, upstands, and complex junctions to complete a fully sealed waterproofing system.",
    specs: [
      { label: "Type", value: "Flashing / detailing compound" },
      { label: "Use", value: "Openings, penetrations, upstands" },
      { label: "Pairs With", value: "EuroProof membrane systems" },
      { label: "Category", value: "Accessory" },
    ],
    image: productImg,
  },
];

export const productCategories = [
  "Bitumen Membrane",
  "Admixture",
  "Coating",
  "Sealant",
] as const;