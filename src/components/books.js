import BookItem from "./bookitem";

function Books(props) {
    const books = Array.isArray(props.myBooks) ? props.myBooks : [];

    return (
        <div className="book-grid">
            {books.length > 0 ? (
                books.map((book) => (
                    <BookItem
                        myBook={book}
                        key={book._id}
                        Reload={props.ReloadData}
                    />
                ))
            ) : (
                <p>No books available</p>
            )}
        </div>
    );
}

Books.defaultProps = {
    myBooks: [],
};

export default Books;
