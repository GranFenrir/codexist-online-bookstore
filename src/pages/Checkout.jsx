import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContent';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

const Checkout = () => {
  const { clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'surname') setSurname(value);
    if (name === 'cardNumber') setCardNumber(value);
    if (name === 'cvv') setCvv(value);
    if (name === 'expiryDate') setExpiryDate(value);
  };

  const validate = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const cardNumberRegex = /^[0-9]{16}$/;
    const cvvRegex = /^[0-9]{3,4}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const newErrors = {};

    if (!nameRegex.test(name)) newErrors.name = 'Invalid name.';
    if (!nameRegex.test(surname)) newErrors.surname = 'Invalid surname.';
    if (!cardNumberRegex.test(cardNumber)) newErrors.cardNumber = 'Invalid card number.';
    if (!cvvRegex.test(cvv)) newErrors.cvv = 'Invalid CVV.';
    if (!expiryDateRegex.test(expiryDate)) newErrors.expiryDate = 'Invalid expiry date.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      clearCart();
      toast.current.show({ severity: 'success', summary: 'Success!', detail: 'Payment completed!', life: 3000 });
      navigate('/');
    } else {
      toast.current.show({ severity: 'error', summary: 'Error!', detail: 'Please check the errors.', life: 3000 });
    }
  };

  return (
    <div className='checkout-container' style={styles.checkoutContainer}>
      <div className="p-card p-shadow-2" style={styles.card}>
        <Toast ref={toast} />
        <h2 className="p-text-center" style={styles.title}>Checkout Form</h2>
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">Name</label>
            <InputText id="name" name="name" value={name} onChange={handleChange} className={classNames({ 'p-invalid': errors.name })} required style={{ width: '100%' }} />
            {errors.name && <small className="p-error">{errors.name}</small>}
          </div>
          <div className="p-field">
            <label htmlFor="surname">Surname</label>
            <InputText id="surname" name="surname" value={surname} onChange={handleChange} className={classNames({ 'p-invalid': errors.surname })} required style={{ width: '100%' }} />
            {errors.surname && <small className="p-error">{errors.surname}</small>}
          </div>
          <div className="p-field">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <InputText id="cardNumber" name="cardNumber" value={cardNumber} onChange={handleChange} className={classNames({ 'p-invalid': errors.cardNumber })} required style={{ width: '100%' }} />
            {errors.cardNumber && <small className="p-error">{errors.cardNumber}</small>}
          </div>
          <div className="p-field">
            <label htmlFor="cvv">CVV</label>
            <InputText id="cvv" name="cvv" value={cvv} onChange={handleChange} className={classNames({ 'p-invalid': errors.cvv })} required style={{ width: '100%' }} />
            {errors.cvv && <small className="p-error">{errors.cvv}</small>}
          </div>
          <div className="p-field mb-5">
            <label htmlFor="expiryDate">Expiry Date</label>
            <InputText id="expiryDate" name="expiryDate" value={expiryDate} onChange={handleChange} placeholder="MM/YY" className={classNames({ 'p-invalid': errors.expiryDate })} required style={{ width: '100%' }} />
            {errors.expiryDate && <small className="p-error">{errors.expiryDate}</small>}
          </div>
          <Button label="Complete Payment" icon="pi pi-check" type="submit" className="p-mt-4" />
        </form>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
  },
  card: {
    width: '600px', 
    padding: '30px', 
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default Checkout;
