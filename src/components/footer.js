const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} MyBookCollection. All rights reserved.</p> {/* Display current year */}
                <p className="footer-links">
                    <a href="/read">View Books</a> | <a href="/create">Add Book</a> | <a href="https://example.com" target="_blank" rel="noopener noreferrer">More Resources</a>
                </p> {/* Add links to view books, add book, and external resources that leads to an example link */}
            </div>
        </footer>
    );
};

export default Footer;
