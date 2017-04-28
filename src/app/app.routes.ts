import {DirectoryComponent} from './directory/directory.component'
import {HomeComponent} from './home/home.component'
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
const App_Router=[
  {path:"directory/:id",component:DirectoryComponent},
  {path:"",component:HomeComponent}
];
export const routing:ModuleWithProviders=RouterModule.forRoot(App_Router);
