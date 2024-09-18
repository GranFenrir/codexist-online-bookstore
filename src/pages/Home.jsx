import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';  
import { useNavigate } from 'react-router-dom';
import 'primeflex/primeflex.css'; 

function Home({ books }) {
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      book.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
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

      <div className="p-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="">
            <Card className="p-card p-shadow-3">
              <img 
                src={book.imgUrl} 
                alt={book.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="p-card-content p-text-center">
                <h3 className="p-mb-2">{book.title}</h3>
                <p className="p-mb-2">Yazar: {book.author}</p>
                <p className="p-mb-2">Fiyat: {book.price} TL</p>
                <Rating value={book.rating} readOnly stars={5} cancel={false} className="p-mb-2" />
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
