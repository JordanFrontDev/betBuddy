import { Link } from "react-router-dom";

function AgeRestrictionPage() {
  return (
    <div>
      <h1>Are you over 18?</h1>
      <div>
        <Link to="/app">Yes</Link>
        <Link to="/">No</Link>
      </div>
    </div>
  );
}

export default AgeRestrictionPage;
