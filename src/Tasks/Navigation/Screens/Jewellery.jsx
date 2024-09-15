import { useEffect, useState } from "react"
import CustomNavBar from "../../../Components/NavBar/navBar"
import axios from "axios"
import CustomCards from "../../../Components/CustomCards/customCards"


const JewelleryScreen = ()=>{
    const[products,setProducts]=useState([])

    useEffect(()=>{
        const dataCollected = async()=>{
            const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")

            setProducts(response.data)
        }

        dataCollected();
    },[])

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

export default JewelleryScreen