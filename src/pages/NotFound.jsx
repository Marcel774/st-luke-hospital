import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">
      <div className="not-found">
        <div className="error-code">404</div>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not
          exist.
        </p>

        <Link to="/" className="button primary">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;