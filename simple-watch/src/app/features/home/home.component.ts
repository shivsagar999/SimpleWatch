import { Component } from '@angular/core';
import { ToolBarComponent } from '../../shared/tool-bar/tool-bar.component';
import { SWMenu } from '../../core/entity/sw-menu';
import { MenuService } from '../../core/service/menu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menus: SWMenu[] = [];

  constructor(private readonly menuService: MenuService) {
    this.menus = menuService.getMenu();
  }
}
