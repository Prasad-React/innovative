import React from "react";
import "./Nav.css";
import data from "../../sitedata.json";
import Dropdown from "react-multilevel-dropdown";


function Nav() {
  return (
    <>
    <div >
      {data.socialicons.map((e) => {
        return (
          <>
            <section className="">
              <div className="topBar  d-none d-md-block" id="run">
              <div className="row container-fluid" id="fluid">
                <div className=" col-xs-12 col-lg-9 col-sm-12 col-md-6">
                  <div href={e.link1} className=" float-left clearfix ml-5 ">
                    <a
                      href={e.link1}
                      className="skipContent"
                      aria-label="Skip to main content"
                    >
                      <span className="m-hide ">{e.title1}</span>
                      <span className="icon-skip-to-main m-show"></span>
                    </a>
                  </div>
                  <div href={e.link2} className=" float-left clearfix ">
                    <a
                      href={e.link2}
                      className="skipContent"
                      aria-label="Skip to main content"
                    >
                      <span className="m-hide ">{e.title2}</span>
                      <span className="icon-skip-to-main m-show"></span>
                    </a>
                  </div>
                </div>
         
             
                <div className=" col-xs-12 col-lg-2  col-sm-6 col-md-4  " id="socials" >
                  <div className="float-right icons" >
                    <ul className="socials " >
                      <li>
                        {e.iconslink.map((f) => {
                          return (
                            <>
                            <div className="icon">
                              <a href={f.link1} > {f.description}
                                <i className={f.iconname1}></i>
                              </a>
                              </div>
                            </>
                          );
                        })}
                       </li>
                     </ul>
                    </div>
                    </div>
                 
                  <div>
                <ul className="topbar navlinkdetails  link " id="topbar">
                <li className="nav-item dropdown  " id="">
                <a
                  className="nav-link "
                  href="navbarDropdown"
                  data-toggle="dropdown"
                  id=""
                  aria-haspopup="false"
                  aria-expanded="true"
                  area-current="page"
                >
                  
            <img
             src="./images/social_media.svg"
             style={{width:"20px", height:"20px"}} />
              </a>
              
                 <div className="dropdown-menu " 
                 aria-labelledby="navbarDropdown" 
                id="menu"
                 >
                  <a
                    className="nav-link-dropdown1 "
                    href="https://www.twitter.com/"
                    target="t_blank"
                  >
                 <img src="./images/ico-twitter.png"
                       style={{width:"20px", height:"20px"}}/>
                  </a>
                  <a
                    className="nav-link-dropdown1"
                    href="https://www.facebook.com/"
                    target="t_blank"
                  >
                   <img src="./images/ico-facebook.png"
                       style={{width:"20px", height:"20px"}}/>
                  </a>
                  <a
                    className="nav-link-dropdown1"
                    href="https://www.linkedin.com/"
                    target="t_blank"
                  >
                   <img src="./images/ico-linkedin.png"
                       style={{width:"20px", height:"20px"}}/>
                  </a>
                    </div> 
                     </li>
                       </ul>  
                        </div>
                      </div>
                     </div>
                   </section>
                  </>
                );
             })}
          </div>
       </>
   );
 }

export default Nav;
