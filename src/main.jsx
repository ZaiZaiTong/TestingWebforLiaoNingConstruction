// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";

import App from "./ui/App.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import Renovation from "./pages/Renovation.jsx";              // Major Works
import AluminiumGlazing from "./pages/AluminiumGlazing.jsx";

// ✅ 这里名字要和组件保持一致，假设你在 specialist-works.jsx 里 export default MetalRoofing
import SpecialistWorks from "./pages/SpecialistWorks.jsx";

import Construction from "./pages/Construction.jsx";
import PlumbingElectrical from "./pages/PlumbingElectrical.jsx";
import MaterialsInteriorSolutions from "./pages/MaterialsInteriorSolutions.jsx";

import Properties from "./pages/properties/Properties.jsx";
import ForSale from "./pages/properties/ForSale.jsx";
import UnderConstruction from "./pages/properties/UnderConstruction.jsx";
import Completed from "./pages/properties/Completed.jsx";
import PropertyDetail from "./pages/properties/PropertyDetail.jsx";

import WhoWeAre from "./pages/about/WhoWeAre.jsx";
import OurProcess from "./pages/about/OurProcess.jsx";
import BecomePartner from "./pages/about/BecomePartner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // -------- SERVICES --------
      { path: "services", element: <Services /> },

      { path: "services/construction-design-and-build", element: <Construction /> },
      // 旧链接重定向到新的
      { path: "services/construction", element: <Navigate to="/services/construction-design-and-build" replace /> },

      { path: "services/major-works", element: <Renovation /> },
      { path: "services/aluminium-and-glazing", element: <AluminiumGlazing /> },

      // ✅ Specialist Works 正确写法：用 MetalRoofing 这个组件名
      { path: "services/specialist-works", element: <SpecialistWorks /> },

      { path: "services/plumbing-and-electrical", element: <PlumbingElectrical /> },

      // ✅ 路由路径改成和 Navbar 一样
      { path: "services/materials-interior-solutions", element: <MaterialsInteriorSolutions /> },

      // -------- PROPERTIES --------
      {
        path: "properties",
        element: <Properties />,
        children: [
          { index: true, element: <Navigate to="for-sale" replace /> },
          { path: "for-sale", element: <ForSale /> },
          { path: "under-construction", element: <UnderConstruction /> },
          { path: "completed", element: <Completed /> },
        ],
      },
      { path: "properties/:slug", element: <PropertyDetail /> },

      // -------- ABOUT --------
      { path: "about/who-we-are", element: <WhoWeAre /> },
      { path: "about/our-process", element: <OurProcess /> },
      { path: "about/become-a-business-partner", element: <BecomePartner /> },

      // -------- CONTACT & 404 --------
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
