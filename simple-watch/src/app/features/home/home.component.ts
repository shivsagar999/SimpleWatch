import { Component } from '@angular/core';
import { ToolBarComponent } from '../../shared/tool-bar/tool-bar.component';
import { SWMenu } from '../../core/entity/sw-menu';
import { MenuService } from '../../core/service/menu.service';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MobileNavComponent } from '../../shared/mobile-nav/mobile-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolBarComponent, MatSidenavModule, MatButtonModule, MobileNavComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menus: SWMenu[] = [];

  constructor(private readonly menuService: MenuService) {
    this.menus = menuService.getMenu();
  }


  openDrawer() {

  }
}
