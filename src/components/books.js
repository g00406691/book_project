import BookItem from "./bookitem";

// Define the Books functional component
function Books(props) {
    const books = Array.isArray(props.myBooks) ? props.myBooks : [];

    return (
        <>
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
        </>
    );
}

Books.defaultProps = {
    myBooks: [],
};

export default Books;
