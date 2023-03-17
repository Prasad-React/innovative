
import Home from "../menus/Menu1/Static.js";
import Static2 from "../menus/Menu1/Static2.js";
import node701 from "../menus/Menu4/Contact.js";
import node201 from "../menus/Menu1/C142.js";
import map from "../menus/Menu4/map";
import websitepolicies from "../Components/Footer/Webpolicies.js";
import help from "../Components/Footer/Help";
import sitemap from "../Components/Sitemap/Sitemap.js";



const routesConfig = [
  
  {
    path: "/Home",
    component:Home,
  },
  {
    path: "/Static2",
    component:Static2,
  },
  {
    path: "/node701",
    component:node701,
  },
  {
    path: "/node201",
    component:node201,
  },


 
  {
    path: "/websitepolicies",
    component: websitepolicies,
  },
  {
    path: "/help",
    component: help,
  },
  {
    path: "/map",
    component: map,
  },
  {
    path: "/sitemap",
    component: sitemap,
  }
 
];

export default routesConfig;