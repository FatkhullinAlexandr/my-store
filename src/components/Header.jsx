import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';

function Header() {
    const { cartItems, favoriteItems } = React.useContext(AppContext);

    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        <span>my</span>Store
                    </Link>
                    <div className="header__logo-reseller">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="14"
                            viewBox="0 0 32 32">
                            <title>apple</title>
                            <path d="M24.734 17.003c-0.040-4.053 3.305-5.996 3.454-6.093-1.88-2.751-4.808-3.127-5.851-3.171-2.492-0.252-4.862 1.467-6.127 1.467-1.261 0-3.213-1.43-5.28-1.392-2.716 0.040-5.221 1.579-6.619 4.012-2.822 4.897-0.723 12.151 2.028 16.123 1.344 1.944 2.947 4.127 5.051 4.049 2.026-0.081 2.793-1.311 5.242-1.311s3.138 1.311 5.283 1.271c2.18-0.041 3.562-1.981 4.897-3.931 1.543-2.255 2.179-4.439 2.216-4.551-0.048-0.022-4.252-1.632-4.294-6.473zM20.705 5.11c1.117-1.355 1.871-3.235 1.665-5.11-1.609 0.066-3.559 1.072-4.713 2.423-1.036 1.199-1.942 3.113-1.699 4.951 1.796 0.14 3.629-0.913 4.747-2.264z"></path>
                        </svg>
                        <span>Premium Reseller</span>
                    </div>
                </div>
                <div className="header__links">
                    <Link to="/favorites" className="header__favorites">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 28 28">
                            <title>heart</title>
                            <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
                        </svg>
                        <span>Избранное</span>
                        <p>{favoriteItems.length}</p>
                    </Link>
                    <Link to="/cart" className="header__cart">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 2H20L17 11H4C3.448 11 3 11.448 3 12C3 12.552 3.448 13 4 13H17V15H4C2.343 15 1 13.657 1 12C1 10.343 2.343 9 4 9H4.33L3 5L2 2H0V0H3C3.552 0 4 0.448 4 1V2ZM5 20C3.895 20 3 19.105 3 18C3 16.895 3.895 16 5 16C6.105 16 7 16.895 7 18C7 19.105 6.105 20 5 20ZM15 20C13.895 20 13 19.105 13 18C13 16.895 13.895 16 15 16C16.105 16 17 16.895 17 18C17 19.105 16.105 20 15 20Z"
                                fill="white"
                            />
                        </svg>
                        <span>Корзина</span>
                        <p>{cartItems.length}</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
