import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'kng-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
})
export class NavTabsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('activeLink') != null)
      this.activeLink = localStorage.getItem('activeLink')!;
  }
  public goTo(link: string) {
    this.activeLink = link;
    localStorage.setItem('activeLink', this.activeLink);
    this.router.navigate(['/' + link]);
  }
  @Input() position!: 'header' | 'sidenav';

  public menus: any[] = [
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
    // {
    //   name: 'Admin',
    //   url: '/admin',
    //   icon: 'admin_panel_settings',
    // },
  ];
  activeLink = '';
}
