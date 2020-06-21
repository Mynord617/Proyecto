import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer_profile',
  templateUrl: './footer_profile.component.html'
})
export class Footer_profileComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
