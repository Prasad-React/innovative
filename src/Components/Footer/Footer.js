import React from "react";
import "./Footer.css";
import Subfooter from "./Subfooter";
import ScrollToTopBtn from "./ScrollToTop.js";
import data from "../../sitedata.json";

function Footer() {
  return (
    <>
      <ScrollToTopBtn />
      <div className="footer">
      <div className="footer_top p-2 text-center">
          <Subfooter />
        </div>
        <div className="footer_bottom">
            {data.Footer.map((information) =>{
              return(
          <section className="footer_subscription">
             <ul className="footer_subscription_heading1">
            <a >{information.p}
            
            <a  href={information.link} target="_blank">{information.title}
            </a>
            </a>
            </ul>
           
          </section>
          )})}
          <section className="text-center">
           
        
 
  
           
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
