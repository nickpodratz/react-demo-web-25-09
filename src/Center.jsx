function Center({ children }) {
    const centerStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
    }
    return (
        <div style={centerStyles}>
            {children}
    )
}

export default Center