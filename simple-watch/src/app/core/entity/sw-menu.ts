
export class SWMenu {
    name?: string;
    url?: string;
    subMenu: SWMenu[] = [];

    constructor(name:string, url: string, subMenu: SWMenu[]) {
        this.name = name;
        this.url = url;
        this.subMenu = subMenu;
    }
}