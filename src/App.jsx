import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favourites/Favourites";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Contact from "./pages/Contact/Contact";

function App() {
  const queryClient = new QueryClient();
  const [showSplash, setShowSplash] = useState(true);
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Change the delay time as needed
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Website />} />
                  <Route path="/properties">
                    <Route index element={<Properties />} />
                    <Route path=":propertyId" element={<Property />} />
                  </Route>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/favourites" element={<Favourites />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        )}
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
