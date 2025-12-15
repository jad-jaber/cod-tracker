import { Link } from "react-router";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Public Home Page</h1>
      <p>This is the public index page.</p>

      <Link to="/log-match">Go to Log Match</Link>
    </div>
  );
}