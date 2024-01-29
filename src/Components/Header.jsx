import { useContext , useState } from 'react';
import { useNavigate , useLocation, Link } from 'react-router-dom';

import ytLogo from '../assets/yt-logo.png'
import ytMobileLogo from '../assets/yt-logo-mobile.png'
import { IoIosSearch } from "react-icons/io";   
import { SlMenu } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import {context} from '../context/contextApi'


const Header = () => {

  const[searchQuery , setSearchQuery] = useState("");
  const {loading ,mobileMenu , setMobileMenu } = useContext(context);
  const navigate = useNavigate();
  
  const searchQueryHandler = (event) =>{
    if((event?.key === "Enter" || event === "SearchButton") && searchQuery?.length> 0)
    {
        navigate(`searchResult/${searchQuery}`)
    }
  }

  const mobleMenuToggle = () =>{
    setMobileMenu(!mobileMenu);
  }
  
  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];
  console.log("pathname",pathname);

  return (
    <div className='h-14 w-full flex justify-between items-center bg-black ' >
      <div className='h-12 w-20 flex justify-center items-center px-2'> <img src={ytLogo} />  </div>
      <div className='h-12 w' ></div>

    </div>
  )
}

export default Header
