import React ,{useState} from "react";

import { Link } from "react-router-dom";

const Menu = () => {

  const [selectMenu,setSelectMenu]=useState(0);
  const [profileDropdownOpen,setprofileDropdownOpen]=useState(false);

  const handleClick=(index)=>
  {
    setSelectMenu(index);
  }

  const handleDropdown=()=>
  {
    setprofileDropdownOpen(!profileDropdownOpen);
  }

  const menuClass="menu";
  const activeClass="menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{width:'40px'}}/>
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to={'/'} onClick={()=>handleClick(0)} >
              <p className={selectMenu===0?activeClass:menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
               <Link style={{textDecoration:'none'}} to={'/orders'} onClick={()=>handleClick(1)} >
              <p  className={selectMenu===1?activeClass:menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
               <Link style={{textDecoration:'none'}} to={'/holdings'} onClick={()=>handleClick(2)} >
              <p  className={selectMenu===2?activeClass:menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
               <Link style={{textDecoration:'none'}} to={'/positions'} onClick={()=>handleClick(3)} >
              <p  className={selectMenu===3?activeClass:menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            
               <Link style={{textDecoration:'none'}} to={'/funds'} onClick={()=>handleClick(4)} >
              <p  className={selectMenu===4?activeClass:menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
               <Link style={{textDecoration:'none'}} to={'/apps'} onClick={()=>handleClick(5)} >
              <p  className={selectMenu===5?activeClass:menuClass}>
                Apps
              </p>
            </Link>
         
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleDropdown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
