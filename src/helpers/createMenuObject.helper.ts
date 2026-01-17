import type { MenuOptions } from "../interfaces/menuOptions.interface.js";
import type { MenuKey } from "../types/menuKey.type.js";

export const createMenuOptions = (active: MenuKey): MenuOptions => {
    const menu: MenuOptions = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    const isInvalidMenuKey: boolean = active === '' || !(active in menu);

    if (isInvalidMenuKey) {
        return menu;
    }

    menu[active] = true;
    return menu;
};