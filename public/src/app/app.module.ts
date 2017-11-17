import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankComponent } from './rank/rank.component';
import { InfoComponent } from './battle/info/info.component';
import { ResultComponent } from './battle/result/result.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { ScoreService } from './score.service'; 

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RankComponent,
    InfoComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule,
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
