import React, { useState, useMemo } from 'react';
import { faqs, faqCategories, searchFAQs, getFAQsByCategory } from '../data/faqs-comprehensive';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="faq-answer-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

interface FAQSectionProps {
  limit?: number;
  category?: string;
  showSearch?: boolean;
  showCategoryFilter?: boolean;
  title?: string;
  description?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  limit,
  category,
  showSearch = true,
  showCategoryFilter = true,
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions about our auto detailing services in Columbia, SC'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set());

  const filteredFAQs = useMemo(() => {
    let results = faqs;

    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      results = getFAQsByCategory(selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      results = searchFAQs(searchQuery);
    }

    // Apply limit if specified
    if (limit && limit > 0) {
      results = results.slice(0, limit);
    }

    return results;
  }, [selectedCategory, searchQuery, limit]);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(faqId)) {
        newSet.delete(faqId);
      } else {
        newSet.add(faqId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenFAQs(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenFAQs(new Set());
  };

  const categoryGroups = useMemo(() => {
    const groups: { [key: string]: typeof faqs } = {};
    filteredFAQs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFAQs]);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">{title}</h2>
          {description && <p className="faq-description">{description}</p>}
        </div>

        {(showSearch || showCategoryFilter) && (
          <div className="faq-controls">
            {showSearch && (
              <div className="faq-search">
                <input
                  type="text"
                  className="faq-search-input"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search FAQs"
                />
                <span className="faq-search-icon" aria-hidden="true">🔍</span>
              </div>
            )}

            {showCategoryFilter && (
              <div className="faq-category-filter">
                <select
                  className="faq-category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  {faqCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="faq-expand-controls">
              <button
                onClick={expandAll}
                className="faq-control-btn"
                aria-label="Expand all FAQs"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="faq-control-btn"
                aria-label="Collapse all FAQs"
              >
                Collapse All
              </button>
            </div>
          </div>
        )}

        <div className="faq-results-count">
          Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
        </div>

        {filteredFAQs.length === 0 ? (
          <div className="faq-no-results">
            <p>No questions found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="faq-reset-btn"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="faq-list">
            {Object.entries(categoryGroups).map(([categoryName, categoryFAQs]) => (
              <div key={categoryName} className="faq-category-group">
                {!searchQuery && selectedCategory === 'all' && (
                  <h3 className="faq-category-title">
                    {faqCategories.find(c => c.id === categoryFAQs[0].category)?.icon}{' '}
                    {categoryName}
                  </h3>
                )}
                <div className="faq-items">
                  {categoryFAQs.map(faq => (
                    <FAQItem
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQs.has(faq.id)}
                      onToggle={() => toggleFAQ(faq.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .faq-section {
          padding: 4rem 0;
          background: #f9fafb;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .faq-description {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .faq-search {
          position: relative;
          flex: 1;
          min-width: 250px;
        }

        .faq-search-input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .faq-search-input:focus {
          outline: none;
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .faq-search-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .faq-category-filter {
          flex: 1;
          min-width: 200px;
        }

        .faq-category-select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-category-select:focus {
          outline: none;
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .faq-expand-controls {
          display: flex;
          gap: 0.5rem;
        }

        .faq-control-btn {
          padding: 0.5rem 1rem;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-control-btn:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: #fef2f2;
        }

        .faq-results-count {
          margin-bottom: 1.5rem;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .faq-category-group {
          margin-bottom: 3rem;
        }

        .faq-category-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .faq-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.2s;
        }

        .faq-item:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: white;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-question:hover {
          background: #f9fafb;
        }

        .faq-question.active {
          background: #fef2f2;
        }

        .faq-question-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          padding-right: 1rem;
          line-height: 1.5;
        }

        .faq-icon {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ef4444;
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .faq-question.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer-content {
          padding: 0 1.5rem 1.25rem;
        }

        .faq-answer-content p {
          color: #4b5563;
          line-height: 1.75;
          margin: 0;
        }

        .faq-no-results {
          text-align: center;
          padding: 3rem 1rem;
          background: white;
          border-radius: 8px;
        }

        .faq-no-results p {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .faq-reset-btn {
          padding: 0.75rem 2rem;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-reset-btn:hover {
          background: #dc2626;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .faq-title {
            font-size: 2rem;
          }

          .faq-description {
            font-size: 1rem;
          }

          .faq-controls {
            flex-direction: column;
          }

          .faq-search,
          .faq-category-filter {
            width: 100%;
          }

          .faq-expand-controls {
            width: 100%;
            justify-content: space-between;
          }

          .faq-control-btn {
            flex: 1;
          }

          .faq-question-text {
            font-size: 1rem;
          }

          .faq-question {
            padding: 1rem;
          }

          .faq-answer-content {
            padding: 0 1rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
