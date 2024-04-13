import { CommonEngine } from '@angular/ssr';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SWMenu } from '../../core/entity/sw-menu';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, LayoutModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

  @Input() menus: SWMenu[] = [];
  webView = true;
  mobileView = false;

  constructor(private readonly responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.Tablet,
      Breakpoints.Handset,
      Breakpoints.Web])
      .subscribe(result => {
    
        const breakpoints = result.breakpoints;
    
        if ( breakpoints[Breakpoints.TabletPortrait]  || breakpoints[Breakpoints.HandsetLandscape] 
          || breakpoints[Breakpoints.HandsetPortrait]) {
          this.mobileView = true;
        }
        else if (breakpoints[Breakpoints.WebLandscape] || breakpoints[Breakpoints.WebPortrait] || 
                breakpoints[Breakpoints.TabletLandscape] ) {
          this.mobileView = false;
        }
    
      });
  }

}
