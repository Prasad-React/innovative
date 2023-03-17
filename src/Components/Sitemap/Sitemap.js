
import React from "react";
import "./Sitemap.css";
import data from "../../sitedata.json";

function Header() {
  return (
    <> 
      <section className="font-weight-bold  navdetails" id="sitemap1">
        <div  className="col-md-auto">
        <div className="container" id="flow"> 
        <nav className="navbar navbar-expand-xl col-sm-12  navbar-light " id="expand" >
          <a className="nav-link d-sm-none">
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
            className=""
            id="navbarTogglerDemo01"
          >
            <div >
               <h3 className="Sitemap">Sitemap</h3>
             </div>
             <div className="sitemapA" > 
              {data.Navlink.map((j) => {
                return (
                    <ul className="nav-item "  >
                      <a className="nav-link"  href={j.link} >
                      <i  className=" fa fa-hand-o-right  px-2"></i>
                           {j.title}
                     
                      </a>
                    </ul>
                   );
                })}
             </div>
             <div>


{data.drop.map((information) => {
  return (
    <section className="sitemap2" id="">
        <h6 className="sitemap1">
        <i  className=" fa fa-hand-o-right  px-2"></i>
           {information.name}
           </h6>
        {information.children.map((content) => {
          return (
            <>
              <h5 className="  ">{content.subtitile}</h5>
                    <ul className="a">
                      <a  href={content.link} id="sitemap2" >
                       <i  className=" fa fa-hand-o-right  px-2"></i>
                         {content.name}
                     </a>
                    </ul>
                  </>
               );
            })}
      </section>
      );
    })}
</div>
           


           

       <ul className="sitemapE" >
              {data.Navlinkleft.map((j) => {
                return (
                  <>
                    <ul className=" " >
                      <a className="" id="navbarDropdown2"  href={j.link} target="_blank" >
                      <i  className=" fa fa-hand-o-right  px-2"></i>  
                        {j.title } 
                        <span className="sr-only" >
                        </span>
                      </a>
                    </ul>
                   </>
                 );
               })}
             </ul> 


     <div>
{data.footerlink.map((information) => {
  return (
    <section className="sitemap2" id="">
        <h5 className="sitemap1">{information.title}</h5>
        {information.content.map((details) => {
          return (
            <>
                    <ul className="a">
                      <a  href={details.link} id="sitemap5" >
                       <i  className=" fa fa-hand-o-right  px-2"></i>
                         {details.title}
                     </a>
                    </ul>
              </>
          );
        })}
    </section>
  );
})}
</div>

           </section>
          </nav>
        </div>
        </div>
      </section>
    </>
  );
}

export default Header;
