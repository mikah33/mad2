import { Link } from 'react-router-dom';
import { generateBreadcrumbSchema } from './StructuredData';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="breadcrumb-list">
          {allItems.map((item, index) => (
            <li key={item.url} className="breadcrumb-item">
              {index < allItems.length - 1 ? (
                <>
                  <Link to={item.url}>{item.name}</Link>
                  <span className="breadcrumb-separator" aria-hidden="true"> / </span>
                </>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
