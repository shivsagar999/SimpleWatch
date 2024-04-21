
import { Injectable } from '@angular/core';
import { SWMenu } from '../entity/sw-menu';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menu: SWMenu[] = [];

  constructor() { 
    this.menu = [ new SWMenu("topwatch", [],  "hfhf"), new SWMenu("Stopwatch", [new SWMenu("Stopwatch",  [], "https://www.w3schools.com/howto/howto_css_dropdown.asp")]), 
                  new SWMenu("Loopwatch", [])];
  }

  getMenu() {
    return this.menu;
  }
}
