import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar_profile',
  templateUrl: './navbar_profile.component.html',
})
export class Navbar_profileComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
