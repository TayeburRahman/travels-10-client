import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home';
import About from '../AboutPage/About';
import Tour from '../TourPage/Tour';
import Blog from '../BlogPage/Blog';
import Dashboard from '../DashboardPage/Dashboard';
import Contact from '../ContactPage/Contact';
import SignIn from '../SignUpSignInPage/SignIn/SignIn';
import SignUp from '../SignUpSignInPage/SignUp/SignUp';
import SingleBlog from '../SingleBlogPage/SingleBlog';
import TourSingle from '../TourSInglePage/TourSingle';
import BookNow from '../BookNow/BookNow';
import UpCommingEventDetails from '../HomePage/UpcomingEventDetails/UpCommingEventDetails';
import NoPageFound from '../NoPageFound/NoPageFound';
import PrivateRoute from '../SignUpSignInPage/PriveteRoute/PrivateRoute';
import DetailsPackage from '../DashboardPage/DetailsPackage/DetailsPackage';
import HostPage from '../HostPage/HostPage';
import ManageAdmins from '../DashboardPage/Admin/AdminDetails/ManageAdmins';
import ManageEvents from '../DashboardPage/Admin/ManageEvents/ManageEvents';
import ManageEventDetails from '../DashboardPage/Admin/ManageEventDetails/ManageEventDetails';
import ManageBooking from '../DashboardPage/Admin/ManageBooking/ManageBooking';
import ManageBookDetails from '../DashboardPage/Admin/ManageBookDetails/ManageBookDetails';
import ManageMessage from '../DashboardPage/Admin/ManageMessage/ManageMessage';
import ManageMessageView from '../DashboardPage/Admin/ManageMessageView/ManageMessageView';
import TouchMessageView from '../DashboardPage/Admin/TouchMessageView/TouchMessageView';
import ManagePackages from '../DashboardPage/Admin/ManagePackages/ManagePackages';
import ManageBlogs from '../DashboardPage/Admin/ManageBlog/ManageBlogs';


const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/singleTour/:id" element={<PrivateRoute> <TourSingle /> </PrivateRoute>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/singleBlog/:id" element={<PrivateRoute> <SingleBlog /> </PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/bookNow" element={<PrivateRoute> <BookNow /> </PrivateRoute>} />
            <Route path="/upComingEventDetails/:id" element={<UpCommingEventDetails />} />
            <Route path="/detailsPackage/:id" element={<DetailsPackage />} />
            <Route path="*" element={<NoPageFound />} />
            <Route path="/host" element={<HostPage />} />
            <Route path="/manageAdmins" element={<ManageAdmins />} />
            <Route path="/manageEvents" element={<ManageEvents />} />
            <Route path="/manageEventDetail/:id" element={<ManageEventDetails />} />
            <Route path="/manageBooking" element={<ManageBooking />} />
            <Route path="/bookDetails/:id" element={<ManageBookDetails />} />
            <Route path="/manageMessage" element={<ManageMessage />} />
            <Route path="/messageView/:id" element={<ManageMessageView />} />
            <Route path="/touchMessageView/:id" element={<TouchMessageView />} />
            <Route path="/managePackage" element={<ManagePackages />} />
            <Route path="/manageBlogs" element={<ManageBlogs />} />
        </Routes>
    );
};

export default AllRoute;