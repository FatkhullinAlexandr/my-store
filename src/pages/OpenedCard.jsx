import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppContext } from '../App';

import { onClickAddToCart } from '../redux/actions/cart';
import { onClickFavorite, onClickRemoveFavorite } from '../redux/actions/favorites';

function OpenedCard() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [product, setProduct] = React.useState({});
    const [activeMemory, setActiveMemory] = React.useState(null);
    const [memory, setMemory] = React.useState('');
    const { cartItems, favoriteItems, correctedPrice } = React.useContext(AppContext);

    const addedProduct = {
        ...product,
        memory: memory,
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error('Не удалось загрузить товар');
            }
        };
        fetchData();
    }, []);

    React.useEffect(() => {
        const itemMemory = () => {
            if (product.memory) {
                const memoryItem = product.memory[activeMemory];
                setMemory(memoryItem);
            } else {
                setMemory('-');
            }
        };
        itemMemory();
    }, [activeMemory]);

    const checkCartItems = () => {
        return cartItems.some((item) => item.id === product.id);
    };

    const addToCart = (e) => {
        e.preventDefault();

        if (product.memory) {
            activeMemory !== null
                ? onClickAddToCart(dispatch, addedProduct)
                : alert('Выберете объем памяти');
        } else {
            onClickAddToCart(dispatch, addedProduct);
        }
    };

    const checkFavoritesItems = () => {
        return favoriteItems.some((item) => item.id === product.id);
    };

    const onFavorite = () => {
        if (checkFavoritesItems()) {
            onClickRemoveFavorite(dispatch, product.id);
        } else {
            onClickFavorite(dispatch, product);
        }
    };

    return (
        <div className="opened-card">
            <div className="opened-card__body">
                <div className="opened-card__left-block left-block">
                    <div className="left-block__title">{product.name}</div>
                    <div className="left-block__image">
                        <img src={product.img} alt="Картинка" />
                    </div>
                </div>
                <div className="opened-card__right-block right-block">
                    {product.memory && (
                        <div className="right-block__memory">
                            <span className="right-block__memory-title">Накопитель:</span>
                            <div className="right-block__memory-items">
                                {product.memory.map((item, index) => (
                                    <div
                                        className={
                                            activeMemory === index
                                                ? 'right-block__memory-item active'
                                                : 'right-block__memory-item'
                                        }
                                        onClick={() => setActiveMemory(index)}
                                        key={`${item}_${index}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="right-block__description">
                        <span className="right-block__description-title">Описание:</span>
                        <p className="right-block__description-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            suscipit eum voluptatum neque laborum dolores quam praesentium fuga
                            provident minima! Blanditiis veniam ratione quis repellat? Quos deserunt
                            natus nihil id?
                        </p>
                    </div>
                    <div className="right-block__price">{correctedPrice(product.price)} руб</div>
                    <div className="right-block__buttons">
                        <button
                            className="right-block__button-green button"
                            disabled={checkCartItems() ? true : false}
                            onClick={(e) => addToCart(e)}>
                            {checkCartItems() ? 'Товар добавлен' : 'В корзину'}
                        </button>
                        <button
                            className="right-block__button-purple button"
                            onClick={() => onFavorite()}>
                            {checkFavoritesItems() ? 'В избранном' : 'В избранное'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpenedCard;
