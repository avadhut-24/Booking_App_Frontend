// import './App.css'
import {Route, Routes} from "react-router-dom";
import MainLoginPage from "./pages/Login/mainlogin.jsx";
import AdminLoginPage from "./pages/Login/adminlogin.jsx";
import HostLoginPage from "./pages/Login/hostlogin.jsx";
import CustomerLoginPage from "./pages/Login/customerlogin.jsx";
import AdminRegsiterPage from "./pages/Register/adminregister.jsx";
import HostRegsiterPage from "./pages/Register/hostregister.jsx";
import CustomerRegsiterPage from "./pages/Register/customerregister.jsx"
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import {UserContextProvider} from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    

      //Main LoginPage
      //After selecting appropriate user then it should redirect to that login pages
      //After login, index page of that user 

      <Routes>
        <Route path="/" element={<MainLoginPage />}  />
        <Route path="/adminlogin" element={<AdminLoginPage />}  />
        <Route path="/hostlogin" element={<HostLoginPage />}  />
        <Route path="/customerlogin" element={<CustomerLoginPage />}  />
        <Route path="/adminregister" element={<AdminRegsiterPage />}  />
        <Route path="/hostregister" element={<HostRegsiterPage />}  />
        <Route path="/customerregister" element={<CustomerRegsiterPage />} />
        
      </Routes>
    )
    }

    {/*<UserContextProvider>
         <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route> 
        </UserContextProvider> 
        */}
  
          
         


export default App
