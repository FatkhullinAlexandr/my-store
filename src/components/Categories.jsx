import React from 'react';

function Categories({ activeCategory, onClickCategory }) {
    const categories = ['Mac', 'iPhone', 'iPad', 'Apple Watch', 'Аксессуары'];

    return (
        <div className="home__categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {categories.map((item, index) => (
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={`${item}_${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
