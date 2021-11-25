import React from 'react'
import './productList.css'
import { products } from "../../data";
import Product from "../product/Product";

const ProductList = () => {
    return (
        <div className="productList">
            <div className="productList-texts">
                <h1 className="productList-title">Create & inspire. It's PixelsX</h1>
                <p className="productList-desc">
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
                </p>
            </div>
            <div className="productList-list">
                {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
