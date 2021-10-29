import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Ranking } from '../interface/ranking';
import { Schedule } from '../interface/schedule';
import {SoccerService} from'../service/SoccerService';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  public UsingAsync:boolean = false;
  public MyTeams : Team[];
  public LeagueName : string;
  public Myschedule : Schedule[];
  public Standings : Ranking[];
  
  constructor(private_titleService:Title, private_soccerService: SoccerService) {
    this._titleService.setTitle('Pertandingan Sepak Bola Negara Aku');
    this.getTeams();
    this.LeagueName = 'Ligaku';
    this.getSchedule();
    this.ComputerRangkings();
   }

  ngOnInit(): void {
  }
  getTeams(){
    if(this.UsingAsync){
      let xx = this._soccerService.getAllTeamsAsync();
        xx.then((Teams:Team[]=>this.MyTeams = Teams));
    }
    else {
      this.MyTeams = this._soccerService.getAllTeams();
    }
  }
}
