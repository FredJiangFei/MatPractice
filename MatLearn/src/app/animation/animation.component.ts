import { Component, OnInit } from '@angular/core';
import { openClose, insertRemove } from './transition';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [openClose, insertRemove]
})
export class AnimationComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
