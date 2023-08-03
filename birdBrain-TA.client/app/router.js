import { AboutController } from "./controllers/AboutController.js";
import { BirdsController } from "./controllers/BirdsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SpottersController } from "./controllers/SpottersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { HomeView } from "./views/HomeView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [BirdsController, SpottersController],
    view: HomeView
    // view: /*html*/`
    // <div class="card">
    //   <div class="card-body">
    //     <p>Home Page</p>
    //     <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
    //   </div>
    // </div>
    // `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */