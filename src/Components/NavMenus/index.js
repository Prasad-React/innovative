
import React from "react";
import "./index.css";
import Nav from "../Header/Nav.js";
import NavBar from "../Header/NavBar.js";
import data from "../../sitedata.json";
import Dropdown from "react-multilevel-dropdown";


function Header() {
  return (
    <> 
    
      <Nav />
      <NavBar />
      <section className="font-weight-bold  sticky-top navdetails">
        <div  className="col-md-auto">
        <div className="container" > 
        <nav className="navbar navbar-expand-xl col-sm-12  navbar-light " id="expand" >
          <a className="nav-link d-sm-none" href="#">
            <i
              className="fa fa-home"
              aria-hidden="true"
              style={{ fontSize: "28px", color: "#ffff" }}
            />
            <span className="sr-only">(current)</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon my-toggler toggle"></span>
          </button>
          <section
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
          <ul className="navbar-nav navlinkdetails links" >
              {data.Navlink.map((j) => {
                return (
                  <React.Fragment>
                    <li className="nav-item active">
                      <a className="nav-link"  href={j.link} id="navbarDropdown1">
                        {j.title}
                      </a>
                    </li>
                    </React.Fragment>
                   );
                })}
             </ul>

         <ul className="navbar-nav navlinkdetails  links">
        {data.drop.map((j) =>{
        return(
          <React.Fragment>
        <li className="nav-item dropdown" id="dropdown">
          <a 
             className="nav-link dropdown-toggle"
             id="navbarDropdown" 
             href={j.link}>
            {j.name}
            <span className="sr-only">(current)</span>
          </a>
           <div className="dropdown-menu">
            <div className="Dropdown-item " aria-labelledby="nav-Dropdown" id="item1">
             {j.children.map((item) => {
                 return(
                  <li className=""  id="dropdown-item">
                  <a  className="nav-link"  href={item.link} >
                     {item.name }
                  </a>
                  </li>
                    )})}
                  </div>
                </div>
              </li>  
              </React.Fragment>
                )})}
          </ul>

      

       <ul className="navbar-nav ml-auto links" >
              {data.Navlinkleft.map((j) => {
                return (
                  <>
                    <li className="nav-item " >
                      <a className="nav-link" id="navbarDropdown2"  href={j.link} target="_blank" >
                       {j.title } 
                        <span className="sr-only" >
                        </span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul> 
           </section>
          </nav>
        </div>
        </div>
      </section>
    
    </>
  );
}

export default Header;
