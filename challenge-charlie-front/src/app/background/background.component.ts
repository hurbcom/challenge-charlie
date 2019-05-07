import { Component, OnInit } from '@angular/core';

import { Background } from './background';
import { BackgroundService } from './background.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class BackgroundComponent implements OnInit {
  
  background: Background;

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
    this.backgroundService.getBackgroundUrl().subscribe(background => this.background = background);
  }

}
