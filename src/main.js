const concerns = {
  allergies: {
    label: "For allergy-prone homes",
    headline: "Make your home feel like relief, not a trigger.",
    body:
      "Sanipure is well-positioned for households tired of sneezing, itchy eyes, and dusty air. The strongest value angle is everyday comfort backed by serious filtration, not empty wellness language.",
    metrics: ["99.4% particle elimination", "Great for pollen and dust", "Bedroom-to-living-room fit"],
    product: "The Mod Jr Air Purifier",
    blurb:
      "A natural match for bedrooms, living rooms, and family spaces where cleaner air needs to feel immediate and easy to live with.",
    points: [
      "Cleans 163 square metres per hour according to Sanipure's site.",
      "Targets pollen, pet dander, mould, dust, and tiny airborne particles.",
      "Supports an emotional promise of fewer symptoms and calmer mornings.",
    ],
  },
  pets: {
    label: "For pet-loving households",
    headline: "Keep the pet. Lose the dander, fluff, and stale smells.",
    body:
      "Sanipure's messaging already speaks directly to people who do not want to choose between loving their pets and breathing comfortably. That makes pet homes a strong, conversion-friendly audience.",
    metrics: ["Pet dander support", "Activated carbon for odours", "Easy everyday operation"],
    product: "The Mod Air Purifier",
    blurb:
      "The larger-capacity model gives you a stronger story for open-plan spaces, busy lounges, and homes where pet hair seems to appear everywhere at once.",
    points: [
      "Market it as cleaner shared spaces, not just a technical appliance.",
      "Odour and fluff reduction make the value easy to notice fast.",
      "Customer proof on the site already reinforces this direction.",
    ],
  },
  mould: {
    label: "For damp or mould-prone homes",
    headline: "Help stale, musty rooms feel fresh again.",
    body:
      "For many NZ buyers, black mould is not a niche issue. It is part of everyday home life. Sanipure's mould references make this a practical and locally relevant marketing angle.",
    metrics: ["Black mould mentioned repeatedly", "Medical-grade HEPA", "Clear practical benefit"],
    product: "The Mod Air Purifier",
    blurb:
      "Use the larger model when the story is whole-home freshness, faster air turnover, and confidence in older or more challenging spaces.",
    points: [
      "The site calls out mould, spores, and odours in plain language.",
      "This message works best when paired with healthier-home imagery.",
      "It frames value as prevention and daily comfort, not just cleanup.",
    ],
  },
  smoke: {
    label: "For homes battling smoke and odours",
    headline: "Clear the air after cooking, smoke, and everyday life.",
    body:
      "Smoke and odour reduction are easy-to-understand wins. This concern turns technical specs into a more tangible promise: the room feels fresher, faster.",
    metrics: ["Activated carbon support", "Fast clean-air delivery", "Noticeable room feel"],
    product: "The Mod Air Purifier",
    blurb:
      "Lead with the bigger coverage story here, especially for open living areas where smells and smoke hang around longer.",
    points: [
      "Sanipure's copy explicitly mentions smoke, odours, and VOCs.",
      "This is a strong hook for paid ads because the benefit is instantly relatable.",
      "It also crosses over well with pet and mould audiences.",
    ],
  },
  sleep: {
    label: "For people chasing better rest",
    headline: "Turn bedtime into a cleaner-air ritual.",
    body:
      "The Sanipure site does not pitch sleep directly, but it is a sensible emotional extension of the current story. Cleaner bedroom air, fewer irritants, and calmer nights make the value feel personal.",
    metrics: ["Quiet bedroom positioning", "Low-maintenance routine", "Emotional daily payoff"],
    product: "The Mod Jr Air Purifier",
    blurb:
      "This model suits a bedroom-focused story: compact enough to live with, powerful enough to make the room feel more cared for.",
    points: [
      "Position it around nightly comfort rather than medical claims.",
      "This expands the brand from symptom relief into wellbeing.",
      "It keeps the science-led credibility while making the outcome more aspirational.",
    ],
  },
};

const chips = [...document.querySelectorAll(".finder-chip")];
const storyLabel = document.querySelector("#storyLabel");
const storyHeadline = document.querySelector("#storyHeadline");
const storyBody = document.querySelector("#storyBody");
const storyMetrics = document.querySelector("#storyMetrics");
const productName = document.querySelector("#productName");
const productBlurb = document.querySelector("#productBlurb");
const productPoints = document.querySelector("#productPoints");

function renderConcern(key) {
  const concern = concerns[key];
  if (!concern) {
    return;
  }

  storyLabel.textContent = concern.label;
  storyHeadline.textContent = concern.headline;
  storyBody.textContent = concern.body;
  productName.textContent = concern.product;
  productBlurb.textContent = concern.blurb;

  storyMetrics.innerHTML = concern.metrics
    .map((metric) => `<span class="metric-pill">${metric}</span>`)
    .join("");

  productPoints.innerHTML = concern.points.map((point) => `<li>${point}</li>`).join("");

  chips.forEach((chip) => {
    const isActive = chip.dataset.concern === key;
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    renderConcern(chip.dataset.concern);
  });
});

renderConcern("allergies");
