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