import React from 'react';
import './NewsletterSection.css';

function NewsletterSection() {
    return (
        <section className="newsletter-section">
            <h4>Join our newsletter so we can keep you posted.</h4>
            <input type="email" placeholder="Enter your email" />
            <button>Stay Updated</button>
        </section>
    );
}

export default NewsletterSection;