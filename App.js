import { Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ContactUs from "./pages/ContactUs";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/Welcome">
        <Welcome />
      </Route>
      <Route path="/Products">
        <Products />
      </Route>
      <Route path="/ContactUs">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
