import React, { useState } from 'react';
import Card from './Cards'


const Products = (state) => {
    const [products, setProducts] = useState(null)
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)
    return (

        <div className="container-filter">
            <h2>Filters</h2>
            <div className="filter-container">
                <div className="container-drop">
                    <form>
                        <h3>Reset Filter</h3>
                        <input type="button" value="reset"></input>
                    </form>
                </div>
                <div className="container-drop">
                    <h3 className="tag">Filter by Galaxy</h3>
                    <form className="dropdown-filter" name="type-drop">
                        <select >
                            <option defaultValue={true} disabled="disabled" value="any">--- Select A Galaxy ---</option>
                            <option value="character">Galaxy #1</option>
                            <option value="animal">Galaxy #2</option>
                            <option value="other">Galaxy #3</option>
                        </select>
                    </form>
                </div>

                <div className="container-drop">
                    <h3 className="tag">Filter by Time</h3>
                    <form className="dropdown-filter" name="price-drop">
                        <select>
                            <option defaultValue={true} disabled="disabled" value="any">--- Select A Time ---</option>
                            <option value="1">Time #1</option>
                            <option value="2">Time #2</option>
                            <option value="3">Time #3</option>
                        </select>
                    </form>
                </div>

                <div className="container-drop">
                    <h3 className="tag">Filter by Price</h3>
                    <form className="dropdown-filter" name="price-drop">
                        <select>
                            <option defaultValue={true} disabled="disabled" value="any">--- Select A Price ---</option>
                            <option value="1">Price #1</option>
                            <option value="2">Price #2</option>
                            <option value="3">Price #3</option>
                        </select>
                    </form>
                </div>
            </div>
            <div>
                {products && products.map((item) => {
                    return (
                        <Card item={item} />
                    )
                })}
            </div>
        </div>
    )
}


export default Products;