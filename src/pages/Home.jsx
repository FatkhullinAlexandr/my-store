import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import Categories from '../components/Categories';
import SortBy from '../components/SortBy';

import { fetchProducts } from '../redux/actions/products';
import { setCategory, setSortBy } from '../redux/actions/filters';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(({ products }) => products.items);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const onClickCategory = (category) => {
        dispatch(setCategory(category));
    };

    const onClickSortBy = (item) => {
        dispatch(setSortBy(item));
    };

    React.useEffect(() => {
        fetchProducts(dispatch, category, sortBy);
    }, [category, sortBy]);

    return (
        <div className="home">
            <div className="home__banner">
                <img src="./img/banner.png" alt="Картинка" />
                <div className="home__banner-info info-banner">
                    <div className="info-banner__iphone">
                        <svg
                            width="27"
                            height="32"
                            viewBox="0 0 27 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.7628 17.003C21.7228 12.95 25.0678 11.007 25.2168 10.91C23.3368 8.159 20.4088 7.783 19.3658 7.739C16.8738 7.487 14.5038 9.206 13.2388 9.206C11.9778 9.206 10.0258 7.776 7.95883 7.814C5.24283 7.854 2.73783 9.393 1.33983 11.826C-1.48217 16.723 0.616831 23.977 3.36783 27.949C4.71183 29.893 6.31483 32.076 8.41883 31.998C10.4448 31.917 11.2118 30.687 13.6608 30.687C16.1098 30.687 16.7988 31.998 18.9438 31.958C21.1238 31.917 22.5058 29.977 23.8408 28.027C25.3838 25.772 26.0198 23.588 26.0568 23.476C26.0088 23.454 21.8048 21.844 21.7628 17.003V17.003ZM17.7338 5.11C18.8508 3.755 19.6048 1.875 19.3988 0C17.7898 0.066 15.8398 1.072 14.6858 2.423C13.6498 3.622 12.7438 5.536 12.9868 7.374C14.7828 7.514 16.6158 6.461 17.7338 5.11V5.11Z"
                                fill="white"
                            />
                        </svg>
                        <span>iPhone 13 Pro</span>
                    </div>
                    <div className="info-banner__trade-in">Доступен в трейд-ин.</div>
                </div>
            </div>
            <div className="home__container">
                <h2 className="home__title">Наши товары</h2>
                <div className="home__filters">
                    <Categories activeCategory={category} onClickCategory={onClickCategory} />
                    <SortBy activeSortType={sortBy.type} onClickSortBy={onClickSortBy} />
                </div>
                <div className="home__products">
                    {products.map((item) => (
                        <Card {...item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
