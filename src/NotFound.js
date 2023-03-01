import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page">
      <h2>Sorry</h2>
      <p>The page you were looking for doesn't exit</p>
      <Link to='/'> Go to Homepage </Link>
    </div>
  );
};

export default NotFound;
