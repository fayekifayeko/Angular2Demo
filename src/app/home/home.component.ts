import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homeTitle="this is home component........";
myvalue="this value comes from the module";
myboolean="true"
player={name:"Fayek",belt:"black"}
@Input()   data_from_rootcomponent_to_homecomponent;//must be the same name in the two components ind put it as property in home component tag
@Output() event_from_home_comp_to_root=new EventEmitter();
clickMe(val){
  alert(val);
}


fireanevent(e){
  this.event_from_home_comp_to_root.emit(e);
}
  constructor() { }

  ngOnInit() {
  }

}
