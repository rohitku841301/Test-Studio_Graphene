import React from "react";
import ReactDOM from "react-dom/client"
import Footer from "./Components/Footer";
import Body from "./Components/Body"
import Header from "./Components/Header"
import Banner from "./Components/Banner"



const AppLayout = ()=>{
    return(
        <>
            <Header />
            <Banner />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);