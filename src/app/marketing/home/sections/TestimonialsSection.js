"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function TestimonialsSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 24 },
  });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Inventor, Hyderabad",
      text:
        "I bought a plot in Green Valley 3 years ago. The value has nearly doubled! The registration process was incredibly smooth and transparent.",
      img: "/testimonial-image1.png",
    },
    {
      name: "Priya Reddy",
      role: "Inventor, Hyderabad",
      text:
        "As an NRI, I was worried about managing property in India. OpenPlots team handled everything from fencing to legal checks remotely.",
      img: "/testimonial-image1.png",
    },
    {
      name: "Anil Gupta",
      role: "Inventor, Hyderabad",
      text:
        "The best part was no hidden charges. The price quoted was all-inclusive. Very professional and great locations.",
      img: "/testimonial-image1.png",
    },
    {
      name: "Suresh Mehta",
      role: "Inventor, Hyderabad",
      text:
        "Highly reliable team. Clear communication and excellent after-sales support.",
      img: "/testimonial-image1.png",
    },
    {
      name: "Kavya Sharma",
      role: "Inventor, Hyderabad",
      text:
        "Investing was never this easy. Everything was well explained and documented.",
      img: "/testimonial-image1.png",
    },
  ];

  return (
    <section
      style={{
        padding: "6rem 0",
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2.3rem", fontWeight: 700, color: "#1F6F54" }}>
          Our Testimonials
        </h2>
        <p style={{ color: "#7A8C85", marginTop: "0.4rem" }}>
          What Our Customers Says
        </p>
      </div>

      {/* Quote watermark left */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "80px",
          fontSize: "6rem",
          color: "#EAF5F1",
          fontFamily: "serif",
        }}
      >
        “
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            style={{
              backgroundColor: "#FFFFFF",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.6",
                color: "#6B7C73",
                marginBottom: "1.8rem",
              }}
            >
              “{item.text}”
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <strong style={{ fontSize: "0.95rem" }}>{item.name}</strong>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#8A9C95",
                  }}
                >
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "2rem",
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              border: "1px solid #4AA384",
              backgroundColor: i === 2 ? "#4AA384" : "transparent",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Quote watermark right */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "80px",
          fontSize: "6rem",
          color: "#EAF5F1",
          fontFamily: "serif",
        }}
      >
        ”
      </div>
    </section>
  );
}
