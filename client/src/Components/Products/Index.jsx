import React from 'react';

const Products = () => {
    return (
        <div className="container-filter">
            <div className="container-type">
                <h2>Filters</h2>
                <form>
                    <h3>Reset Filter</h3>
                    <input type="button" value="reset"></input>
                </form>
            </div>
            <div className="container-galaxy">
                <h3 className="tag">Filter by Galaxy</h3>
                <form className="filterButtons" name="type-drop">
                    <select >
                        <option defaultValue={true} disabled="disabled" value="">--- Select A Galaxy ---</option>
                        <option value="character">Galaxy #1</option>
                        <option value="animal">Galaxy #2</option>
                        <option value="other">Galaxy #3</option>
                    </select>
                </form>
            </div>

            <div className="container-time">
                <h3 className="tag">Filter by Time</h3>
                <form className="filterButtons" name="price-drop">
                    <select>
                        <option defaultValue={true} disabled="disabled" value="">--- Select A Time ---</option>
                        <option value="1">Time #1</option>
                        <option value="2">Time #2</option>
                        <option value="3">Time #3</option>
                    </select>
                </form>
            </div>

            <div className="container-price">
                <h3 className="tag">Filter by Price</h3>
                <form className="filterButtons" name="price-drop">
                    <select>
                        <option defaultValue={true} disabled="disabled" value="">--- Select A Price ---</option>
                        <option value="1">Price #1</option>
                        <option value="2">Price #2</option>
                        <option value="3">Price #3</option>
                    </select>
                </form>
            </div>
        </div>
    )
}


export default Products;