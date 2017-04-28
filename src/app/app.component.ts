import { Component } from '@angular/core';
import {HomeComponent} from "./home/home.component";
@Component({
  // you can use moduleId:module.id to put in templateUrl and styleUrls urls without ./
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })
export class AppComponent {
  title = 'app works! ';
  name="Fayek";
  data_from_rootcomponent_to_homecomponent={x:"helloooo from root",y:"component"};//must be the same name in the two components ind put it as property in home component tag
  rootfunc(e){
    alert("This is event from home");
    console.log(e);
  }
}
