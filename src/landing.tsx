import { Link } from "react-router-dom";


function Landing() {
    return (
        <>
            <h3>Check out the list out the documentation for our current version</h3>
            <Link to="/v1.0.0">
                <p>v1.0.0</p>
            </Link>
            <h3>Previous Versions:</h3>
        </>
    )
}

export default Landing