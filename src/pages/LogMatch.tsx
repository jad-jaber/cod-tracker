import { Link } from "react-router";

export default function LogMatch() {

    return (
    <div style={{ padding: 24 }}>
        <h1>Log Match</h1>
        <p>This is the LogMatch page.</p>

        <Link to="/">Back to Home</Link>
    </div>
    );
}