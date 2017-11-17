import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score.service'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  getuser1=false;
  getuser2=false;
  user1={
    name:"",
    avatar_url:"",
  };
  user2={
    name:"",
    avatar_url:"",
  };
  username1;
  username2;
  btn=0;
  constructor(private _scoreService:ScoreService, private _router:Router) { }

  onSubmit(user){
    if(user === 'first'){
      this._scoreService.getUser(user,this.username1, (res)=>{
        if(res == "404"){
          console.log('404');
        }else{
          this.user1 = res;
          console.log(this.user1);
          this.getuser1 = true;
          this.btn++;
        }
      })
      this.username1 = null;
    }else if(user === "second"){
      this._scoreService.getUser(user,this.username2, (res)=>{
        if(res == "404"){
          console.log('404');
        }else{
          this.user2 = res;
          console.log(this.user2);
          this.getuser2 = true;
          this.btn++;
        }
      })
      this.username2 = null;
    }
  }

  battle(){
    this._router.navigate(['battle','result']);
    this.getuser1=false;
    this.getuser2=false;
    this.btn = 0;
    this.user1={
      name:"",
      avatar_url:"",
    };
    this.user2={
      name:"",
      avatar_url:"",
    };
  }
  ngOnInit() {
    this.getuser1=false;
    this.getuser2=false;
    this.btn = 0;
    this.user1={
      name:"",
      avatar_url:"",
    };
    this.user2={
      name:"",
      avatar_url:"",
    };
  }

}
