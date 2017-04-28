import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggingserviceService} from '../loggingservice.service';
import {DataService} from '../data.service';
declare var firebase:any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
providers:[DataService]

})
export class DirectoryComponent implements OnInit {
   id:string;
   myclass={'blue':true,'red':false,'underline':true};
   test=true;
   players=[
     {name:"ali" , belt:"black"},
       {name:"feras" , belt:"red"},
         {name:"ali" , belt:"blue"}

   ];
   term:string;
   persons=[];
  constructor(private router :ActivatedRoute,private logger: LoggingserviceService,private data:DataService) {
this.id=router.snapshot.params["id"];
}
logit(){
  this.logger.log();
}

getall(){
  this.data.fetchdata().subscribe(
    mydata=>{this.persons=mydata}

  );
}
  ngOnInit() {
  //  this.data.fetchdata().subscribe(
    //  mydata=>{this.persons=mydata}

    //);
      this.firebase_get();
  }

  firebase_get(){
    firebase.database().ref('/').on('child_added',(snapshot)=>

    this.persons.push(snapshot.val())
  )
  }

  postdatatofirebase(name,family){
    firebase.database().ref('/').push({name:name,family:family});
  }

}
