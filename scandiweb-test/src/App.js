import './App.css';
import ProductList from "./components/product-list/ProductList";
import ProductAdd from "./components/product-add/ProductAdd";
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className='App'>
        <BrowserRouter>
            <Switch>
                <Route path="/form">
                    <ProductAdd/>
                </Route>
                <Route path="/products">
                    <ProductList/>
                </Route>
               <Redirect to="/products"/>
            </Switch>
           <Footer/>
        </BrowserRouter>
        </div>
    );
}

export default App;
