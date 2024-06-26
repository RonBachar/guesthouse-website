import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

interface Room {
  value: string;
  url: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  rooms: Room[] = [
    { value: 'גשם', url: '/rain' },
    { value: 'יער', url: '/forest' },
  ];

  selectedRoom?: Room;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(public translateService: TranslateService, private router: Router) {
    translateService.addLangs(['en', 'he']);
    translateService.setDefaultLang('he');

    // Get User Language from Browser
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|he/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }


  navigate(room: Room): void {
    console.log('***ROOM***', room);
    
    this.router.navigate([room.url]);
  }


}
