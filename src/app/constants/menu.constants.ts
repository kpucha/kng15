import { Menu } from '../interfaces/menu.interface';

export class MENU {
  public static PUBLIC: Menu[] = [
    // {
    //   name: 'Blog',
    //   url: '/blog',
    //   icon: 'menu_book',
    // },
    // {
    //   name: 'Tools',
    //   url: '/tools',
    //   icon: 'handyman',
    // },
    {
      name: 'About',
      url: '/about',
      icon: 'contact_support',
    },
    // {
    //   name: 'Help',
    //   url: '/help',
    //   icon: 'heart_plus',
    // },
  ];
  public static ADMIN: Menu[] = [
    { name: 'Admin', url: '/admin', icon: 'admin_panel_settings' },
  ];
}
