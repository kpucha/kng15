import { AuthService } from '../../auth.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'kng-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignComponent {
  public signedUser: any;
  public isSigned$: Observable<any>;

  constructor(private router: Router, private auth: AuthService) {
    this.isSigned$ = this.auth.isSigned();
    this.auth
      .signedUser()
      .subscribe((signedUser) => (this.signedUser = signedUser));
  }

  signIn() {
    this.auth.signIn();
  }
  signOut() {
    this.auth.signOut();
  }
}
