import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  data = {
    status: 'play',
    coverUrl: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg',
    name: 'asdasd',
    alia: 'asdasdsd',
    currentTime: 1000,
    durationTime: 32423,
    src: ''
  };
  currentLineWidth = 0;
  constructor() {}

  ngOnInit() {}
}
