import { Component, OnInit } from '@angular/core';

import { BingService } from './bing.service';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.less']
})
export class BingComponent implements OnInit {
  public background;

  constructor(private bingService: BingService) { }

  ngOnInit() {
    this.bingService.getBackgroundUrl().subscribe(background => this.background = background);
  }

}
