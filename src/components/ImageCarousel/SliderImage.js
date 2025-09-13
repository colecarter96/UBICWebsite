const imageFilenames = [
  "titleSlide.svg",
  "UBIC_GBM.jpg",
  "sungod.jpg",
  "bonfire2024.jpg",
  "bonfire.jpg",
  "sungod2023.jpg",
  "foodBank.jpg",
  "gbm2025-2.jpg",
  "gbm2025.jpg",
];

const SliderImage = imageFilenames.map((filename, index) => ({
  title: "",
  description:
    index === 0 ? "THE UNDERGRADUATE BIOINFORMATICS CLUB AT UCSD" : "",
  description2: index === 0 ? "Established 2012" : "",
  urls: `/imageCarousel/${filename}`,
}));

export default SliderImage;
