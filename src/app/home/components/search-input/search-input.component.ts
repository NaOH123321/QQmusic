import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  value: string;
  @Output()
  search = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  handleClick() {
    console.log(this.value);
    this.search.emit(this.value);
  }
}
