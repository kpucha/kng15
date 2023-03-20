import { Component } from '@angular/core';

@Component({
  selector: 'kng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menus: any[] = [
    {
      name: 'Blog',
      url: '/blog',
      icon: 'menu_book',
    },
    {
      name: 'Tools',
      url: '/tools',
      icon: 'handyman',
    },
    {
      name: 'About',
      url: '/about',
      icon: 'contact_support',
    },
    {
      name: 'Help',
      url: '/help',
      icon: 'heart_plus',
    },
    {
      name: 'Admin',
      url: '/admin',
      icon: 'admin_panel_settings',
    },
  ];
  activeLink = '/blog';
}
