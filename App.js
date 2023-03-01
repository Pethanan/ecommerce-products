import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

import Welcome from "./pages/Welcome";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products/" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
