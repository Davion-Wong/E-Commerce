import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {

    const [checkoutInfo, setCheckoutInfo] = useState({
        fullName: '', address1: '', address2: '', city: '', state: '',
        zip: '', country: '', phone: '', paymentMethod: 'creditCard',
        cardName: '', cardNumber: '', expiryDate: '', cvv: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCheckoutInfo({
            ...checkoutInfo,
            [name]: value,
        });
    };

    function validateForm(checkoutInfo) {
        const {
          fullName,
          address1,
          city,
          state,
          zip,
          country,
          phone,
          paymentMethod,
          cardName,
          cardNumber,
          expiryDate,
          cvv,
        } = checkoutInfo;
      
        // Validate shipping information
        if (!fullName || !address1 || !city || !state || !zip || !country || !phone) {
          return "All shipping fields except Address Line 2 are required.";
        }
      
        // Validate phone number (can be customized to your specific needs)
        if (!/^[\d\s\-()+]+$/.test(phone)) {
          return "Invalid phone number.";
        }
      
        // Validate ZIP code (can be customized to your specific needs)
        if (!/^\d{5}(-\d{4})?$/.test(zip)) {
          return "Invalid ZIP code.";
        }
      
        // Validate payment information
        if (!paymentMethod || !cardName || !cardNumber || !expiryDate || !cvv) {
          return "All payment fields are required.";
        }
      
        // Validate credit card number (16 digits)
        if (cardNumber.replace(/\s+/g, "").length !== 16 || /\D/.test(cardNumber)) {
          return "Invalid credit card number.";
        }
      
        // Validate expiration date (MM/YY format)
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
          return "Invalid expiration date. Use MM/YY format.";
        }
      
        // Validate CVV (3 digits)
        if (cvv.length !== 3 || /\D/.test(cvv)) {
          return "Invalid CVV.";
        }
      
        return null; // Return null if no validation errors
    }
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateForm(checkoutInfo);
        if (validationError) {
            setErrorMessage(validationError);
            return; // Stop the form submission process
        }

        // If everything is fine, send the checkout info to the server
        // You may need to handle the server response and navigate the user to a success page or handle errors
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkoutInfo),
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle success
        })
        .catch((error) => {
            setErrorMessage('An error occurred during the checkout process. Please try again.');
        });
    };
      

    return (
        <div className="checkout">
            <h3>Shipping Information</h3>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form className="checkout-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={checkoutInfo.fullName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="address1">Address Line 1:</label>
                    <input type="text" id="address1" name="address1" value={checkoutInfo.address1} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="address2">Address Line 2:</label>
                    <input type="text" id="address2" name="address2" value={checkoutInfo.address2} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={checkoutInfo.city} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" value={checkoutInfo.state} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="zip">Zip Code:</label>
                    <input type="text" id="zip" name="zip" value={checkoutInfo.zip} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select id="country" name="country" value={checkoutInfo.country} onChange={handleChange} required>
                        <option>Australia</option>
                        <option>New Zealand</option>
                        {/* Option values for countries */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={checkoutInfo.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" name="paymentMethod" value={checkoutInfo.paymentMethod} onChange={handleChange}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="cardName">Cardholder's Name</label>
                    <input type="text" id="cardName" name="cardName" value={checkoutInfo.cardName} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={checkoutInfo.cardNumber} onChange={handleChange} required pattern="\d{16}" />
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiration Date</label>
                        <input type="text" id="expiryDate" name="expiryDate" value={checkoutInfo.expiryDate} onChange={handleChange} required pattern="\d{2}/\d{2}" />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" value={checkoutInfo.cvv} onChange={handleChange} required pattern="\d{3}" />
                    </div>
                </div>

                <button type="submit" className="checkout-button">Proceed to Checkout</button>
            </form>
        </div>
    );
}

export default Checkout;
