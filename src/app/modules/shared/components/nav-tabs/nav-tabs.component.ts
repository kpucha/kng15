import { AuthService } from 'src/app/modules/auth/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/layout.service';
import { MENU } from 'src/app/constants/menu.constants';
import { Menu } from 'src/app/interfaces/menu.interface';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'kng-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
})
export class NavTabsComponent implements OnInit, OnDestroy {
  @Input() position!: 'header' | 'sidenav';

  private publicMenu: Menu[] = MENU.PUBLIC;
  private adminMenu: Menu[] = MENU.ADMIN;

  public menus: Menu[] = this.publicMenu;
  public activeLink = '';

  constructor(
    private router: Router,
    public auth: AuthService,
    public layout: LayoutService
  ) {}

  ngOnInit(): void {
    this.activeLink = this.layout.currentActiveLink;
    this.layout.activeLinkChange.subscribe(
      (activeLink) => (this.activeLink = activeLink)
    );
    this.menus = this.getMenu();
    this.auth.onAuthStateChanged.subscribe((userLogged) => {
      if (userLogged != null) {
        this.menus = this.getMenu();
      } else {
        this.menus = this.publicMenu;
      }
    });
  }

  ngOnDestroy(): void {
    this.layout.activeLinkChange.unsubscribe();
    this.auth.onAuthStateChanged.unsubscribe();
  }

  public goTo(link: string) {
    this.activeLink = link;
    this.router.navigate(['/' + link]);
  }

  private getMenu(): any[] {
    return this.auth.isAdmin()
      ? this.publicMenu.concat(this.adminMenu)
      : this.publicMenu;
  }
}
