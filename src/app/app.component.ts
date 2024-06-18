import { Component } from '@angular/core';
import { Router, NavigationEnd, Event  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-systeme-sco-laire-angular';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }

  checkRoute(url: string): void {
    const noHeaderRoutes = ['/login', '/register'];
    this.showHeader = !noHeaderRoutes.includes(url);
  }
}
