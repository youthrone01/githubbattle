import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score.service'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  user1={
    name:"",
    avatar_url:"",
    public_repos:0,
    followers:0,
  };
  user2={
    name:"",
    avatar_url:"",
    public_repos:0,
    followers:0,
  };

  first;
  second;
  constructor(private _scoreService:ScoreService, private _router:Router) {
      this.user1 = this._scoreService.player1;
      this.user2= this._scoreService.player2;
   }

   reset(){
    this._router.navigate(['battle','info']);
    this.user1={
      name:"",
      avatar_url:"",
      public_repos:0,
      followers:0,
    };
    this.user2={
      name:"",
      avatar_url:"",
      public_repos:0,
      followers:0,
    };
   }

   battle(){
    if((this.user1.public_repos + this.user1.followers) >(this.user2.public_repos + this.user2.followers)){
      this.first = this.user1;
      this.second = this.user2;
    }else{
      this.first = this.user2;
      this.second = this.user1;
    }
   }
  ngOnInit() {
    this.battle();
  }

}
