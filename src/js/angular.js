import Routes from "./routes.js";
import Controllers from "./controllers/controllers.js";
import Services from "./services/services.js";

export default function App(){
 
    const myApp = angular.module("myApp",["ui.router","ui.router.state.events","ngAnimate", "ngMaterial", "ngMessages"]);
    Routes(myApp);
    Controllers(myApp);
    Services(myApp);
    
}

