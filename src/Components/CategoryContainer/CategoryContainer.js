import React, { useState , useEffect } from 'react'
import { products } from '../../Utility/Data/Data';
import { productCategorization } from '../../Utility/Utility';
import "./CategoryContainer.css";
import CategoryTab from './CategoryTab/CategoryTab';
const CategoryContainer = () => {

    var categorizedProduct = null;
    var [categorizedProduct, setCategorizedProduct] = useState([]);
    useEffect(() => {
        setCategorizedProduct(productCategorization(products))
        
        
    }, [])
    console.log(categorizedProduct)
    
   
   
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
