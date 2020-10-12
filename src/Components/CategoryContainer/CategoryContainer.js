import React, { useState } from 'react'
import { products } from '../../Utility/Data/Data';
import { productCategorization } from '../../Utility/Utility';
import "./CategoryContainer.css";
import CategoryTab from './CategoryTab/CategoryTab';
const CategoryContainer = () => {
    var categorizedProduct = null;
    useState(() => {
        categorizedProduct = productCategorization(products);
        console.log(categorizedProduct)
    } , []) 
    console.log(products)
   
    return (
        <div className="category-container">
        {
            categorizedProduct && categorizedProduct.map(({category , products}) => (
                <CategoryTab key={category} category={category}     products={products} />
                
            ))
        }
        
        </div>
    )
}

export default CategoryContainer
