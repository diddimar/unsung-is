import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: ['']
})
export class AppComponent implements OnInit {
  
  constructor(
    private swUpdate: SwUpdate
  ) { }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((next) => {
        if (window.confirm('New version availible. Update?')) {
          window.location.reload();
        };
      });
    } 
  }
}
