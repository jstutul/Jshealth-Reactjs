import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Login from "./component/Auth/Login/Login";
import Signup from "./component/Auth/Signup/Signup";
import Error from "./component/Error/Error";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Service from "./component/Service/Service";
import ServiceDetails from "./component/Service/ServiceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="service" element={<Service />}></Route>

            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="service/:id" element={<ServiceDetails />}></Route>
              <Route path="about" element={<About />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
