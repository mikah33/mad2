import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { FAQSection } from '../components/FAQSection';
import { faqs, faqCategories, generateFAQSchema } from '../data/faqs-comprehensive';

export const FAQPage = () => {
  const schema = generateFAQSchema(faqs);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions - Mobile Auto Detailing Columbia SC | Mikahs Auto Detailing"
        description="Get answers to your auto detailing questions. Learn about mobile detailing services, pricing, ceramic coating, interior/exterior cleaning in Columbia, Lexington & Irmo SC."
        keywords="auto detailing FAQ Columbia SC, mobile detailing questions, ceramic coating FAQ, interior detailing questions, exterior detailing FAQ, detailing pricing Columbia, car detailing services Lexington SC"
        canonical="https://mikahsautodetailing.com/faq"
        schema={schema}
      />

      <Breadcrumbs
        items={[
          { name: 'FAQ', url: '/faq' }
        ]}
      />

      <div className="faq-page">
        {/* Hero Section */}
        <section className="faq-hero">
          <div className="faq-hero-container">
            <h1 className="faq-hero-title">
              Frequently Asked Questions
            </h1>
            <p className="faq-hero-subtitle">
              Everything you need to know about professional mobile auto detailing in Columbia, SC
            </p>
            <div className="faq-hero-stats">
              <div className="faq-stat">
                <span className="faq-stat-number">{faqs.length}+</span>
                <span className="faq-stat-label">Questions Answered</span>
              </div>
              <div className="faq-stat">
                <span className="faq-stat-number">{faqCategories.length}</span>
                <span className="faq-stat-label">Categories</span>
              </div>
              <div className="faq-stat">
                <span className="faq-stat-number">24/7</span>
                <span className="faq-stat-label">Information Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="faq-quick-nav">
          <div className="faq-quick-nav-container">
            <h2 className="faq-quick-nav-title">Jump to Category</h2>
            <div className="faq-quick-nav-grid">
              {faqCategories.map(category => (
                <a
                  key={category.id}
                  href={`#category-${category.id}`}
                  className="faq-quick-nav-card"
                >
                  <span className="faq-quick-nav-icon">{category.icon}</span>
                  <span className="faq-quick-nav-name">{category.name}</span>
                  <span className="faq-quick-nav-count">
                    {faqs.filter(f => f.category === category.id).length} questions
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main FAQ Section */}
        <FAQSection
          showSearch={true}
          showCategoryFilter={true}
          title="All Your Questions Answered"
          description="Browse our comprehensive FAQ database or use the search and filters to find exactly what you're looking for."
        />

        {/* Category Anchors for Quick Nav */}
        {faqCategories.map(category => (
          <div key={category.id} id={`category-${category.id}`} style={{ scrollMarginTop: '100px' }} />
        ))}

        {/* CTA Section */}
        <section className="faq-cta">
          <div className="faq-cta-container">
            <h2 className="faq-cta-title">Still Have Questions?</h2>
            <p className="faq-cta-text">
              Can't find what you're looking for? Our team is here to help with any questions about our mobile detailing services in Columbia, Lexington, and Irmo.
            </p>
            <div className="faq-cta-buttons">
              <a href="/contact" className="faq-cta-btn faq-cta-btn-primary">
                Contact Us
              </a>
              <a href="tel:+18035551234" className="faq-cta-btn faq-cta-btn-secondary">
                Call (803) 555-1234
              </a>
              <a href="/booking" className="faq-cta-btn faq-cta-btn-secondary">
                Book Online
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .faq-page {
          background: white;
        }

        /* Hero Section */
        .faq-hero {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .faq-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .faq-hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .faq-hero-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .faq-hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .faq-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .faq-stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ef4444;
        }

        .faq-stat-label {
          font-size: 0.875rem;
          color: #d1d5db;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Quick Navigation */
        .faq-quick-nav {
          padding: 3rem 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .faq-quick-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .faq-quick-nav-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .faq-quick-nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .faq-quick-nav-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          background: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .faq-quick-nav-card:hover {
          border-color: #ef4444;
          background: #fef2f2;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .faq-quick-nav-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .faq-quick-nav-name {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }

        .faq-quick-nav-count {
          font-size: 0.875rem;
          color: #6b7280;
        }

        /* CTA Section */
        .faq-cta {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .faq-cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .faq-cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .faq-cta-text {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .faq-cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .faq-cta-btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }

        .faq-cta-btn-primary {
          background: white;
          color: #ef4444;
        }

        .faq-cta-btn-primary:hover {
          background: #f9fafb;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .faq-cta-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid white;
        }

        .faq-cta-btn-secondary:hover {
          background: white;
          color: #ef4444;
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .faq-hero-title {
            font-size: 2rem;
          }

          .faq-hero-subtitle {
            font-size: 1rem;
          }

          .faq-hero-stats {
            gap: 1.5rem;
          }

          .faq-stat-number {
            font-size: 2rem;
          }

          .faq-quick-nav-grid {
            grid-template-columns: 1fr;
          }

          .faq-cta-title {
            font-size: 1.75rem;
          }

          .faq-cta-text {
            font-size: 1rem;
          }

          .faq-cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .faq-cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};
