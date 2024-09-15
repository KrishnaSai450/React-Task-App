import { useEffect, useState } from "react"

import axios from "axios"
import CustomCards from "../../../Components/CustomCards/customCards"




const HomeScreen = ()=>{

    const [products,setProducts] = useState([])

    useEffect(()=>{
        let apiCalling = async()=>{
            let response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data)
            
        }

        apiCalling()
    },[])
    console.log(products)
    return(
        <>
            <div className="container"  >
            <div className="row">
           {
            
             products.map((eachItem,id)=>{
                return(
                    
                        <div className="col-sm-4" key={id} >
                            <CustomCards  title={eachItem.title} text={eachItem.description} source={eachItem.image} buttonText={eachItem.price}/>
                        </div>
                        
                )
             })
           } 
           </div>
           </div>
        </>
        
    )
}

export default HomeScreen