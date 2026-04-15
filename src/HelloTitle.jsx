import Hello from "./Hello"

function HelloTitle({ name }) {
    return (
        <>
            <Hello name={name} />
            <hr style={{ width: "100%" }} />
        </>
    )
}

export default HelloTitle