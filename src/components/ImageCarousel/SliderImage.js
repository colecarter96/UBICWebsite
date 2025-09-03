const imageFilenames = [
  "titleSlide.svg",
  "UBIC_GBM.jpg",
  "sungod.jpg",
  "bonfire.jpg",
  "foodBank.jpg",
  "warren.jpg",
];

const SliderImage = imageFilenames.map((filename, index) => ({
  title: "",
  description:
    index === 0 ? "THE UNDERGRADUATE BIOINFORMATICS CLUB AT UCSD" : "",
  description2: index === 0 ? "Established 2012" : "",
  urls: `/imageCarousel/${filename}`,
}));

export default SliderImage;
