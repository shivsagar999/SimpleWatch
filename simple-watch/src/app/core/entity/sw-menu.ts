
export class SWMenu {
    name?: string;
    url?: string;
    active: boolean = false;
    subMenu: SWMenu[] = [];

    constructor(name:string, subMenu: SWMenu[], url?: string, ) {
        this.name = name;
        this.url = url;
        this.subMenu = subMenu;
    }
}