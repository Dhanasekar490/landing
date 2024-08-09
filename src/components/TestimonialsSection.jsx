import React from 'react';
import './styles.css';

const Testimonial = ({ quote, author }) => (
  <div className="testimonial">
    <blockquote>
      <p>"{quote}"</p>
      <footer>- {author}</footer>
    </blockquote>
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <Testimonial quote="This product is fantastic!" author="Alice Johnson" />
    <Testimonial quote="Absolutely wonderful experience." author="Bob Smith" />
  </section>
);

export default TestimonialsSection;
