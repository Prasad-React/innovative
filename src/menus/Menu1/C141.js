import React from "react";
import "./home.css";
import data from "../../sitedata.json";



class Home extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  
    componentDidMount() {
        // Simple POST request with a JSON body using fetch
      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ }) //change the 'pname'(ex:p1 -project1 and p2-project2...etc..) for different projects
        };
        fetch(" http://openweathermap.org/forecast5", requestOptions)
        .then(response => response.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
          })
        }
  render() {
   const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div  className="test">
     <h1>Please wait for some time</h1>
     </div>
   return(
  <div className="test">
    <section className="container" id="latest">
      {items.map((details) => {
        return (
         <div >
          <section className="" >
           <div >
            <div className="announcements row d-lg-block">
             <h3  className="announcements__text col-xs-8  col-lg-2 col-md-12 col-sm-12   text-center " id="announcements" >
              {details.message}
               </h3>
               {details.list.map((e) => {
                return( 
                  <div>
                 <p className="announcements__list">
                  <a href="node11">  
                   {e.dt} 
                   </a>
                  </p> 
              
                {e.main.map((f) => {
                  return(
                    <p className="announcements__list">
                    <a href="node11">  
                     {f.temp} 
                     </a>
                    </p> 
                  )})}
                  </div>
                )
              })}
            </div>
          </div> 
         </section>
        </div>
      )})}
     </section>
     </div>
    ) 
   }
  }         
export default Home;  