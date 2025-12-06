import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ShoppingCart from "Pages/shoppingCart";
import HomeLanding from "Pages/home-landing";
import LoginPage from "Pages/login";
import UserAccount from "Pages/user-account";
import ProfileDetails from "Pages/profile-details";
import Register from "Pages/register";
import MenuCatalog from "Pages/menu-catalog";
import TableReservation from "Pages/table-reservation";
import OrderTracking from "Pages/order-tracking";


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomeLanding />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/home-landing" element={<HomeLanding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu-catalog" element={<MenuCatalog />} />
        <Route path="/table-reservation" element={<TableReservation />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;