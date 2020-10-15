export var fontWeightParser = (fontWeightString) =>{
    var value = 700;
    switch (fontWeightString) {
        case "light":
            value = 300;
            break;

        case "regular":
                value = 400;
                break;
            
        case "medium":
                    value = 500;
                    break;
        case "bold":
            value = 700;
            break;
    
        default:
            value=300
            break;
           
    }
    return value;
}

export var productCategorization = (products) => {
    var categorizedProducts = [];
    var exist = null
    products.forEach((product) => {
        exist =categorizedProducts.some((cp) => cp.category === product.category)
        if(!exist) {
            categorizedProducts.push({
                category: product.category , 
                products : [product] , 

            });
        } else { 
            categorizedProducts.map((cp) => {
                if(cp.category === product.category) {
                    return  {
                        ...cp  , 
                        products : cp.products.push(product)
                    }
                }
                else {
                    return cp;
                }
            }) 
        }
    });
    return categorizedProducts;
}

 export var addItemToCartHelper = (itemArr , itemToAdd) => {
     var exist = itemArr.some((item) => item.id === itemToAdd.id)
     if(exist) {
        itemArr.map((item) => {
            if(item.id ===itemToAdd.id) {
                return{
                    ...item , 
                    quantity : item.quantity +1 
                }
                
            }
            else {
                return item
            }
        })
     }
     else {
         return [...itemArr , {...itemToAdd , quantity : 1}]
     }
}