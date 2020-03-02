import { Component } from '@angular/core';
import { LazyService } from './lazy.service';

@Component({
  selector: 'app-lazy',
  template: `
    This is a lazy component with an ngFor:
    <ul><li *ngFor="let item of items">{{item}}</li></ul>
    {{service.value}}`
})
export class LazyComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  constructor(public service: LazyService) { }
}
