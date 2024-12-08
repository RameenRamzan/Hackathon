import Link from "next/link";
import './globals.css';
import { FiShoppingCart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdCancelPresentation } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar(){
    return(
<div>
    <div className="discount">
        <div className="text">
        <p id="discountInfo">Sign up and get 20% off to your first order.<span id="signUpNow">(Sign Up Now)</span></p>
        </div>
        <MdCancelPresentation id="cancelVector" />
    </div>
<nav>
    <div className="links">
    <span className="logo">
     <h1>SHOP.CO</h1>
    
    </span>
    <span className="li">
    <Link href="/shops" >Shops</Link>
    <Link href="/onsale">On Sale</Link>
    <Link href="/newarrivals">New Arrivals</Link>
    <Link href="/brands">Brands</Link>

    <div className="search-bar">
    <CiSearch className="search-icon" />
    <input type="text" placeholder="Search for products..." />
    </div>

    <span className="logos">
    <FiShoppingCart />
    <IoMdContact />
    </span>
    </span>
    </div>
</nav>
</div>
);
}

export default Navbar;
