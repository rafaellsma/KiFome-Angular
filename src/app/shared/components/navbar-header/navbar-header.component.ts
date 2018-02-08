import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  showMenu: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.showMenu = this.auth.isLoggedInAsync;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('');
  }
}
