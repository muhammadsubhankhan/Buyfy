import React from 'react'
import { products } from '../../../Utility/Data/Data'
import { ProductCard } from '../../ProductCard/ProductCard'
import "./CategoryTab.css"
const CategoryTab = (props) => {
    var {category , products} =  props;
    return (
        <div className="category-tap-container">
        {products && products.map((product)=> <ProductCard key={product.name} product={product}  />)}
        </div>
    )
}

export default CategoryTab
