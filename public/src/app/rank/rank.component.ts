import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  all_players;
  constructor(private _scoreService:ScoreService) { }

  ngOnInit() {
    this._scoreService.getalluser((res)=>{
      this.all_players = res;
      console.log(this.all_players);
    })
  }

}
