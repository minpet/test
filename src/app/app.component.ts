import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="bg-success p-2 text-center text-white">This is SportsStore</div>
             <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'SportsStore';
}
