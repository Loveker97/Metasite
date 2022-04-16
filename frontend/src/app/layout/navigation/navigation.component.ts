import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  display_sidebar: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  onDisplayChange(displayChange: boolean) {
    this.display_sidebar = displayChange;
    // console.log("displayChange value is", displayChange);
  }


}
