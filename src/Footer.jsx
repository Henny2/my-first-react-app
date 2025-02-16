function Footer() {
    // we can add javascript into return statement, using {} braces
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} Your website name
            </p>
        </footer>
    )
}

export default Footer