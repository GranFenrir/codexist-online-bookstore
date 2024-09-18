import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Find the book by ID
    const foundBook = books.find((b) => b.id === parseInt(id));
    setBook(foundBook);
    setLoading(false); 
  }, [id, books]); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!book) {
    return <div>Book not found!</div>; 
  }

  return (
    <div className="p-grid book-details">
      <div className="p-col-12 p-md-6">
        <img src={book.imgUrl} alt={book.title} className="book-details-image" />
      </div>
      <div className="p-col-12 p-md-6">
        <h1>{book.title}</h1>
        <h3>Yazar: {book.author}</h3>
        <p>Yayın Yılı: {book.publishYear}</p>
        <p>Fiyat: {book.price} TL</p>
        <p>{book.description}</p>
        <button className="p-button p-component">Add to Cart</button>
      </div>
    </div>
  );
};

export default BookDetails;
