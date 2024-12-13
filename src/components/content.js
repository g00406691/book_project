const Content = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Welcome to My Book App!</h1>
            <p className="homepage-description">
                Add, view, and manage your favorite books.
            </p>
            <br />
            <div className="homepage-instructions card shadow"> {/* Add a card to style the instructions */}
                <h2 className="instructions-title">How to Use:</h2>
                <ul className="instructions-list"> {/* Add a list to display instructions */}
                    <li><strong>Home Page:</strong> You’re already here! Explore the features to get started.</li>
                    <li><strong>Add a Book:</strong> Go to "Add Book" to create a new entry. Provide a title, author, genre, and cover image.</li>
                    <li><strong>View Books:</strong> On "View Books," browse all the books you’ve added, displayed as neat, uniform cards.</li>
                    <li><strong>Edit or Delete:</strong> On "View Books," edit details or remove unwanted books with a single click.</li>
                    <li><strong>Search & Filter:</strong> Look for the search bar and filters on "View Books" to find titles by author or genre.</li>
                </ul>
                <p className="instructions-footer"> {/* Add a footer to the instructions */}
                    Use the navigation bar at the top to move between pages. Whether you’re an avid reader or just cataloging your library, this app keeps your books organized beautifully.
                </p>
            </div>
        </div>
    );
}

export default Content;
