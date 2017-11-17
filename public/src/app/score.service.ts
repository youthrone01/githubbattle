import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {
  github_url = 'https://api.github.com/users/';
  player1;
  player2;
  constructor(private _http: Http) { }

  getUser(user,name, callback){
    this.github_url = this.github_url + name +"?access_token=881fd48a1ce06350073edc03edd272670bdb245d";
    this._http.get(this.github_url).subscribe(
      (res)=>{
        callback(res.json());
        if(user == "first"){
          this.player1 = res.json();
        }else{
          this.player2 = res.json();
        }
        this._http.post('/players',res.json()).subscribe(
          (res)=>{
            console.log('success 1');
          },
          (error)=>{
            console.log("error 1 ");
          }
        )
      },
      (error)=>{
        console.log(error.status);
        console.log("error 2 ");
        callback('404');
      }
    )
    this.github_url = 'https://api.github.com/users/';
  }

  getalluser(callback){
    this._http.get("/players").subscribe(
      (res)=>{
        console.log('success 2');
        callback(res.json());
      },
      (error)=>{
        console.log("error 3 ");
      }
    )
  }

}
