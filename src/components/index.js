//Browse Vendor Search Page
import search from '../components/Browse/BrowsePage/Search';

//Vendor browse page components
import viewaboutvendor from './Browse/VendorPage/components/ViewAboutVendor';
import viewvendorposts from './Browse/VendorPage/components/ViewVendorPosts';
import viewvendorproduct from './Browse/VendorPage/components/ViewVendorProduct';
import viewvendorproducts from './Browse/VendorPage/components/ViewVendorProducts';

//Landing page Components
import carouselbrowse from '../components/Landing/CarouselBrowse';
import carouseltop from '../components/Landing/CarouselTop';
import menu from '../components/Landing/Menu';

// Profile page bulletin components
import addpostform from '../components/Profile/Bulletin/AddPostForm';
import bulletin from '../components/Profile/Bulletin/Bulletin';
import vendorpost from '../components/Profile/Bulletin/VendorPost';
import vendorpostlist from '../components/Profile/Bulletin/VendorPostList';

// Profile page product components
import addproductform from '../components/Profile/Product/AddProductForm';
import product from '../components/Profile/Product/Product';
import vendorproducts from '../components/Profile/Product/VendorProducts';

//Profile page About vendor components
import about from '../components/Profile/Profile/About';
import aboutform from '../components/Profile/Profile/AboutForm';
import banneruploader from '../components/Profile/Profile/BannerUploader';

//Components directory

import customerconfirmation from '../components/Register/Customer/Confirmation';

import map from '../components/shared/Map';
import userdetails from '../components/Register/Vendor/UserDetails';
import vendorconfirmation from '../components/Register/Vendor/VendorConfirmation';
import vendordetails from '../components/Register/Vendor/VendorDetails';

//Landing page Components exports
export const CarouselBrowse = carouselbrowse;
export const CarouselTop = carouseltop;
export const Menu = menu;

// Browse page exports
export const Search = search;

//Vendor page exports
export const ViewAboutVendor = viewaboutvendor;
export const ViewVendorPosts = viewvendorposts;
export const ViewVendorProduct = viewvendorproduct;
export const ViewVendorProducts = viewvendorproducts;

//Profile page bulletin components
export const AddPostForm = addpostform;
export const Bulletin = bulletin;
export const VendorPost = vendorpost;
export const VendorPostList = vendorpostlist;

// Profile page product exports
export const AddProductForm = addproductform;
export const Product = product;
export const VendorProducts = vendorproducts;

//Profile page About vendor exports
export const About = about;
export const AboutForm = aboutform;
export const BannerUploader = banneruploader;
