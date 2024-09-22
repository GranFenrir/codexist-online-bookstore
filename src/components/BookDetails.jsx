import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContent';
import { fetchBooks } from '../api/bookApi';
import { Toast } from 'primereact/toast';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  
  const toast = useRef(null); 

  useEffect(() => {
    const getBookDetails = async () => {
      const booksFromApi = await fetchBooks();
      const foundBook = booksFromApi.find((b) => b.id === id);
      setBook(foundBook);
      setLoading(false);
    };

    getBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="p-grid book-details">
      <Toast ref={toast} />
      <div className="p-col-12 p-md-6">
        <img src="https://via.placeholder.com/400" alt={book.title} className="book-details-image" />
      </div>
      <div className="p-col-12 p-md-6">
        <h1>{book.title}</h1>
        <h3>Author: {book.author}</h3>
        <p>Details: {book.details}</p>
        <p>Price: {book.price} TL</p>
        <button className="p-button p-component" onClick={() => {
          addToCart(book);
          toast.current.show({ severity: 'success', summary: 'Success!', detail: 'Book added to cart!', life: 3000 });
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
