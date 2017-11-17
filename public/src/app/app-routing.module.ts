import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { RankComponent } from './rank/rank.component';
import { InfoComponent } from './battle/info/info.component';
import { ResultComponent } from './battle/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'battle/info', pathMatch: 'full' },
  { path: 'rankings', component: RankComponent},
  { path: 'battle', component: BattleComponent, children:[
      { path: 'info', component: InfoComponent },
      { path: 'result', component: ResultComponent },
  ] },

  { path: '**', redirectTo: 'battle/info' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
