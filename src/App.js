import Home from "./views/Home";
import { Router, LocationProvider } from "@reach/router"
import PropertyList from "./views/PropertyList";
import Agents from "./views/Agents";
import ContactUs from "./views/ContactUs";
import Favorites from "./views/Favorites";
import Login from "./views/Login";
import Register from "./views/Register";
import PropertyDetails from "./views/PropertyDetails";
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AgentDetails from "./views/AgentDetails";
import TokenContextProvider from "./contexts/TokenContext";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <div className="App">
      <LocationProvider>
      <TokenContextProvider>
        <GlobalStyles />
        <Header />
        <Navbar />
        <Router>
          <Home path="/" />
          <PropertyList path="properties" />
          <Agents path="medarbejdere" />
          <Favorites path="favoritter" />
          <ContactUs path="kontakt" />
          <Login path="login" />
          <PropertyDetails path="details/:id" />
          <AgentDetails path="medarbejderinfo/:id" />
          <Register path="opret" />
          <ErrorPage path="fejl" />
        </Router>
        <Footer />
      </TokenContextProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
 