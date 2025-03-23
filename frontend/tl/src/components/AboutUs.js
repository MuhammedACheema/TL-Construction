import React from 'react';
import './styling/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="section">
        <h2>Who We Are</h2>
        <p>
          TL General Construction has proudly served the Bronx and surrounding areas since 2008. We specialize in residential and commercial construction, including renovations, custom builds, and more. With 15+ years of experience, we’re committed to high-quality workmanship and exceptional service.
        </p>
      </section>

      <section className="section">
        <h2>Services We Offer</h2>
        <p className="services-list">
          Siding · Painting · Interior & Exterior Remodeling · Steam Cleaning · Brick Pointing · Sheetrock · Roofing · Windows · Cement & Brick Work · Tiles
        </p>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <p>OSHA Certified. Fully Licensed & Insured.</p>
      </section>

      <section className="section">
        <h2>Where We Work</h2>
        <p>We proudly serve all five boroughs of NYC and are open to projects in neighboring states. Reach out via our <a  href="/contact">Contact Page</a> to get started.</p>
      </section>

      <section className="section call-to-action">
        <h2>Let’s Build Something Together</h2>
        <a className="links" href="/contact">Get in Touch</a>
      </section>
    </div>
  );
}

export default AboutUs;
