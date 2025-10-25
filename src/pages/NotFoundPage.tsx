import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />

      <div className="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">Return to Home</Link>
      </div>
    </>
  );
};
