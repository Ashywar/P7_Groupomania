import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { AuthService } from './components/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-app';
  isAuth$!: Observable<boolean>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isAuth$ = this.auth.isAuth$.pipe(shareReplay(1));
  }
}
