import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import JewelleryScreen from "./Screens/Jewellery"
import ElectronicsScreen from "./Screens/Electronics"
import MensClothingScreen from "./Screens/MensClothing"
import WomensClothingScreen from "./Screens/womensClothing"
import CustomNavBar from "../../Components/NavBar/navBar"


const NavigationStack =()=>{

    return(
        <>
           
            

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/jewellery" element={<JewelleryScreen/>}/>
                    <Route path="/electronics" element={<ElectronicsScreen/>}/>
                    <Route path="/mensclothing" element={<MensClothingScreen/>}/>
                    <Route path="/womensclothing" element={<WomensClothingScreen/>}/>
                </Routes>
            </BrowserRouter>

            <CustomNavBar/>
        </>
    )
}

export default NavigationStack