import { Component, Input } from '@angular/core';
import { SWMenu } from '../../core/entity/sw-menu';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css'
})
export class MobileNavComponent {

  @Input() menus: SWMenu[] = [];
  icon = false;

  toggle(i: number) {

    this.menus.forEach ( (menu, index) => {
      if (i === index) {
        menu.active = !menu.active;
      } else {
        menu.active = false;
      }
    })

  }

}
