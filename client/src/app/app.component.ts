import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar> 
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
