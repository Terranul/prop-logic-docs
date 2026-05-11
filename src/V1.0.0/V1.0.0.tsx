import { Link } from "react-router-dom";

function Display() {
    return (
        <>
            <h1>Version 1.0.0</h1>
            <h3>Released May 6 2026</h3>

            <table>
                <thead>
                    <tr>
                        <th>Path</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <Link to="/v1.0.0/eval"><th>/Eval</th></Link>
                        <th>Service for Evaluation of Propositional Logic</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Display