import { Component } from '@angular/core';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
})
export class NavbarsComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
