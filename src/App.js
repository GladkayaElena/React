import React from "react";
import Header from './component/header/Header.js';
import Promo from "./component/promo/Promo.jsx";
import Content from "./component/content/Content.jsx";
import Menu from "./component/menu/Menu.jsx";
import Footer from "./component/footer/Footer.jsx";

function App() {

    return (
        <div className="App">

        <Header />
        <Promo />
        <Content />
        <Menu />
        <Footer />

        </div>
        
    );
}

export default App;