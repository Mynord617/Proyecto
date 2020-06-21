import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html'
})
export class FootersComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
