import React from 'react';
import './styles.css';

const Feature = ({ title, description }) => (
  <div className="feature">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <Feature title="Feature 1" description="Detail about feature 1." />
    <Feature title="Feature 2" description="Detail about feature 2." />
    <Feature title="Feature 3" description="Detail about feature 3." />
  </section>
);

export default FeaturesSection;
