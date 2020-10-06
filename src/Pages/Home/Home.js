import React, {useState} from "react";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Paragraph from "../../Components/Paragraph/Paragraph";
import StyledInput from "../../Components/StyledInput/StyledInput";



const Home = () => {
    var [email , setEmail] = useState("");
    console.log(email)
    return (
       
        <div>
            Home
            <Header fontColor="red" fontWeight="bold" fontSize={70}>This is dynamic Content</Header>
            <Paragraph >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
            <Button>Submit</Button>
            
            <StyledInput 
            value={email} 
            onChange={ (e) => setEmail(e.target.value)}
              />
            
           <div style={{width:"300px" , margin:"10px"  }}> </div>

        </div>
        
    )
}

export default Home;