function Eval() {
    return (
        <>
        <h1>Evaluation Documentation V1.0.0</h1>
        <div id="get-eval-v1.0.0">
            <div>
                <h3>GET</h3>
                <p>Evaluate the propositional logic statement given in the query path with every single possible true false combination</p>
            </div>
            Example:
            <code>/eval/(a^b)</code>
            Result:
            <pre
    style={{
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
    }}
>
    <code>
{`{
    "statement": "(a^b)",
    "statementPretty": "(a ^ b)",
    "results": [
        {
            "result": true,
            "inputs": {
                "a": true,
                "b": true
            }
        },
        {
            "result": false,
            "inputs": {
                "a": true,
                "b": false
            }
        },
        {
            "result": false,
            "inputs": {
                "a": false,
                "b": true
            }
        },
        {
            "result": false,
            "inputs": {
                "a": false,
                "b": false
            }
        }
    ]
}`}
    </code>
</pre>
        </div>
        </>
    )
}

export default Eval