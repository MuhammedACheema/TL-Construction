import React from 'react';
import './styling/AboutUs.css'

function AboutUs(){
  return (
    <div className="about-us">
      {/* Introduction */}
      <div className="section introduction">
        {/* <h1>TL General Contractor</h1>
        <p>A brief statement summarizing the company's mission or expertise.</p> */}
        <h2>Who We Are</h2>
        <p>
        TL General Construction has been proudly serving the Bronx and surrounding areas since 2008. Specializing in residential and commercial construction, we offer a wide range of services, including renovations, new builds, and custom projects. With over 15 years of experience, we are committed to delivering high-quality workmanship and exceptional service to homeowners, businesses, and property managers in our community.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="section mission">
        <h2>Our Mission</h2>
        <p>
        At TL General Construction, our mission is to transform visions into reality by delivering exceptional construction services that prioritize quality, safety, and customer satisfaction. We are dedicated to building lasting relationships with our clients through integrity, transparency, and craftsmanship. By combining industry expertise with a commitment to excellence, we strive to create spaces that not only meet but exceed the expectations of homeowners and businesses in our community.
        </p>
      </div>

      {/* Company History */}
      <div className="section history">
        <h2>Our History</h2>
        <p>
          Share the origin story: when and why the company was founded, major milestones, or how it has evolved over time.
        </p>
        <p>Mention key achievements or awards.</p>
      </div>

      {/* Services Offered */}
      <div className="section services">
        <h2>Services We Offer</h2>
        <p>
        SIDING - PAINTING - EXTERIOR & INTERIOR REMODELING - STEAM CLEANING - BRICK POINTING - SHEETROCK - ROOFING - WINDOWS - CEMENT & BRICK WORK - TILES.
        </p>
      </div>

      {/* Team Introduction */}
      <div className="section team">
        <h2>Meet Our Team</h2>
        <p>
          Introduce the key members of the team, such as founders, project managers, or skilled workers.
        </p>
        <p>Include their expertise, experience, and a personal touch to humanize the business.</p>
      </div>

      {/* Certifications and Licenses */}
      <div className="section certifications">
        <h2>Certifications and Licenses</h2>
        <p>
          List relevant certifications, licenses, or memberships that add credibility (e.g., OSHA-certified, LEED-certified, etc.).
        </p>
      </div>

      {/* Geographic Area Served */}
      <div className="section geography">
        <h2>Where We Work</h2>
        <p>We mainly work throughout NYC, but are willing to work in neighboring states and cities. For more info on these jobs please head to the contact page to schedule a call with us</p>
      </div>

      {/* Commitment to Quality and Safety */}
      <div className="section quality-safety">
        <h2>Our Commitment to Quality and Safety</h2>
        <p>
        At TL General Construction, we ensure high-quality workmanship by employing experienced professionals, using premium materials, and adhering to rigorous industry standards on every project. Our team follows a meticulous approach, from thorough planning and precise execution to detailed quality checks at each phase of construction. Safety is at the core of our operations—we strictly comply with OSHA regulations, provide ongoing training for our staff, and maintain a secure work environment to protect both our team and clients. By combining craftsmanship with a commitment to safety, we deliver results that stand the test of time.
        </p>
      </div>

      {/* Call to Action */}
      <div className="section cta">
        <h2>Get in Touch</h2>
        <p>
          Encourage visitors to get in touch by providing a link or button to the contact page, free consultation offers, or an inquiry form.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
