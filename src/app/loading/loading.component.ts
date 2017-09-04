import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'loading',
  template: '{{loadingMessage}}',
  changeDetection: ChangeDetectionStrategy.Default//OnPush
})
export class LoadingComponent {
  @Input('status') loadingMessage;

  constructor() {
    setTimeout(() => {
      this.loadingMessage = "test"
    }, 5000);
  }
}