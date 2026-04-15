import Hello from "./Hello"

function HelloTitle({ name }) {
    return (
        <>
            <Hello name={name} />
            <hr />
        </>
    )
}

export default HelloTitle