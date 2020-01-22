//Browse Vendor Search Page
import search from './Browse/BrowsePage/Search';

//Vendor browse components
import viewaboutvendor from './Browse/VendorPage/components/ViewAboutVendor';
import viewvendorposts from './Browse/VendorPage/components/ViewVendorPosts';
import viewvendorproduct from './Browse/VendorPage/components/ViewVendorProduct';
import viewvendorproducts from './Browse/VendorPage/components/ViewVendorProducts';

//Landing page Components
import carouselbrowse from '../components/Landing/CarouselBrowse';
import carouseltop from '../components/Landing/CarouselTop';
import menu from '../components/Landing/Menu';

// Profile  bulletin components
import addpostform from '../components/Profile/Bulletin/AddPostForm';
import bulletin from '../components/Profile/Bulletin/Bulletin';
import vendorpost from '../components/Profile/Bulletin/VendorPost';
import vendorpostlist from '../components/Profile/Bulletin/VendorPostList';

// Profile  product components
import addproductform from '../components/Profile/Product/AddProductForm';
import product from '../components/Profile/Product/Product';
import vendorproducts from '../components/Profile/Product/VendorProducts';

//Profile  About vendor components
import about from '../components/Profile/Profile/About';
import aboutform from '../components/Profile/Profile/AboutForm';
import banneruploader from '../components/Profile/Profile/BannerUploader';

// Register customer components
import customerconfirmation from '../components/Register/Customer/CustomerConfirmation';

// Register components
import registerdetails from '../components/Register/RegisterDetails';

// Register vendor components
import vendorconfirmation from '../components/Register/Vendor/VendorConfirmation';
import vendordetails from '../components/Register/Vendor/VendorDetails';

// Shared components
import footer from '../components/shared/Footer';
import map from '../components/shared/Map';
import navbar from '../components/shared/NavBar';
import custombutton from '../components/shared/CustomButton';

// mobile components
import carouseltopmobile from '../components/Landing/CarouselTopMobile';

//Landing Components exports
export const CarouselBrowse = carouselbrowse;
export const CarouselTop = carouseltop;
export const Menu = menu;

// mobile components
export const CarouselTopMobile = carouseltopmobile;
// Browse exports
export const Search = search;

//Vendor exports
export const ViewAboutVendor = viewaboutvendor;
export const ViewVendorPosts = viewvendorposts;
export const ViewVendorProduct = viewvendorproduct;
export const ViewVendorProducts = viewvendorproducts;

//Profile bulletin components
export const AddPostForm = addpostform;
export const Bulletin = bulletin;
export const VendorPost = vendorpost;
export const VendorPostList = vendorpostlist;

// Profile product exports
export const AddProductForm = addproductform;
export const Product = product;
export const VendorProducts = vendorproducts;

//Profile About vendor exports
export const About = about;
export const AboutForm = aboutform;
export const BannerUploader = banneruploader;

// Register customer components exports
export const CustomerConfirmation = customerconfirmation;

// Register components
export const RegisterDetails = registerdetails;

// Register vendor components
export const VendorConfirmation = vendorconfirmation;
export const VendorDetails = vendordetails;

// Shared components
export const Footer = footer;
export const Map = map;
export const NavBar = navbar;
export const CustomButton = custombutton;
