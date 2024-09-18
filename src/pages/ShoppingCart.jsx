import React from "react";

const ShoppingCart = () => {
    return (
        <div>
            <header>
                <h1>Shopping Cart</h1>
            </header>
            <main>
                <section>
                    <h2>Items in Cart</h2>
                    <div className="cart-items">
                        {/* Add cart item components or cart item details here */}
                    </div>
                </section>
                <section>
                    <h2>Order Summary</h2>
                    <div className="order-summary">
                        {/* Add order summary components or order summary details here */}
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Online Bookstore. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ShoppingCart;