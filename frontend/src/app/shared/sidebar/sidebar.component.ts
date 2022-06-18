import { Component, Input, SimpleChanges, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { SidebarPanel, SIDEBAR_NAVS} from './sidebar.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnChanges {

  @Input("display") display: boolean = true;
  @Output("displayChange") displayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.display.currentValue);
  }

  onVisibleChange(visibleValue: boolean) {
    console.log('display value is ', this.display);
    console.log('visibleChange value is ', visibleValue);
    this.displayChange.emit(visibleValue);
  }

  panelOpenState = false;
  panels: SidebarPanel[] = SIDEBAR_NAVS;
}
