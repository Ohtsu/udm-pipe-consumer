import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <pre>{{title}}</pre>
    <pre>{{title | udmtrim}}`
})
export class AppComponent {
  title = '     app      ';
}
