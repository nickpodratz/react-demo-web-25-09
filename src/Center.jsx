function Center({ children }) {
    const centerStyles = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        itemAlign: "center"
    }
    return (
        <div style={centerStyles}>
            {children}
        </div>
    )
}

export default Center