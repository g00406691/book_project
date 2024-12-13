import BookItem from "./bookitem";

function Books(props) {
    const books = Array.isArray(props.myBooks) ? props.myBooks : []; // Check if myBooks is an array

    return (
        <div className="book-grid">
            {books.length > 0 ? (
                books.map((book) => (
                    <BookItem
                        myBook={book} // Pass book data to BookItem component
                        key={book._id}
                        Reload={props.ReloadData} // Pass Reload function to BookItem component
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
