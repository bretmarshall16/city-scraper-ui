import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private nav: NavService
  ) { }

  ngOnInit() {
  }

  goHome(): void {
    this.nav.goToMain();
  }
}
