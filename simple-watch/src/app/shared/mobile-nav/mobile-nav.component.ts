import { Component, Input } from '@angular/core';
import { SWMenu } from '../../core/entity/sw-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css'
})
export class MobileNavComponent {

  @Input() menus: SWMenu[] = [];

  toggle(i: number) {

    this.menus.forEach ( (menu, index) => {
      if (i === index) {
        menu.active = true;
      } else {
        menu.active = false;
      }
    })

  }

}
