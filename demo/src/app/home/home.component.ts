import {Component, OnInit, ViewChild} from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public email: string = null;
  public name: string = null;
  public size: number = 100;
  public background: string = '#cf2c4b';
  public displayType: string = null;
  public letter: string = '?';

  @ViewChild('avatar') private elAvatar : any;

  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ng2-avatar');
  }

  changeData() {
    this.elAvatar.ngOnInit();
  }

}
