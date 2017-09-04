import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `Are we loading?: <loading [status]="loadingMessage"></loading>`
})
export class AppComponent implements OnInit {
  private loadingMessage = "Wait for it...";

  ngOnInit(): void {
    Observable.of(true)
      .delay(2000)
      .subscribe(success => {

        if (success) {
          console.log('Pretend loading: success!');
          this.loadingMessage = 'Success!';
        }

      });
  }

  title = 'app';
}
