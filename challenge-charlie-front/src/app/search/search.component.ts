import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {

  location: string;

  @Output() search = new EventEmitter<string>();

  get normalizedLocation() {
    return this.location == null ? null : this.location.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); //Remove accents from characters
  }
  
  updateLocation(location: string) {
    this.location = location;
  }
}
