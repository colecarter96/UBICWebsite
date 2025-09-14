function SliderContent({ activeIndex, SliderImage }) {
  return (
    <section>
      {SliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          {/* Overlay UBIC logo on the first slide */}
          {index === 0 && (
            <img
              className="overlay-image"
              src="/ubicLogo_white.png"
              alt="UBIC_logo_white"
              style={{ width: "300px" }}
            />
          )}
          <div className="flex-slide">
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
            <h4 className="slide-text2">{slide.description2}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
