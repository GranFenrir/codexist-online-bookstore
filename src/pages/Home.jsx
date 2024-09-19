import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import { useNavigate } from 'react-router-dom';
import { fetchBooks } from '../api/bookApi';
import 'primeflex/primeflex.css'; 
import '../components/Home.css'; 

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFromApi = await fetchBooks();
      setBooks(booksFromApi);
    };

    getBooks();
  }, []);

  useEffect(() => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, books]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="p-d-flex p-jc-center p-mb-4">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText 
            placeholder="Search by title or author..." 
            value={searchTerm} 
            onChange={handleSearch} 
            className="p-inputtext-lg"
          />
        </span>
      </div>
      <div>
        {filteredBooks.length === 0 && <h1 className="p-text-center">No books found!</h1>}
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <Card className="p-card p-shadow-3">
              <img 
                src="https://via.placeholder.com/200"
                alt={book.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="p-card-content p-text-center">
                <h3 className="p-mb-2">{book.title}</h3>
                <p className="p-mb-2">Author: {book.author}</p>
                <p className="p-mb-2">Price: {book.price} TL</p>
                <Rating value={5} readOnly stars={5} cancel={false} className="p-mb-2" />
                <Button 
                  label="Details" 
                  icon="pi pi-info-circle" 
                  className="p-button-rounded p-mt-2" 
                  onClick={() => navigate(`/bookdetails/${book.id}`)} 
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
