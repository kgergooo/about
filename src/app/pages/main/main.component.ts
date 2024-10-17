import { Component } from '@angular/core';
import { App, APP_LIST } from 'src/app-config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  appList: App[] = APP_LIST;

  openStore(event: any): void {
    event?.stopPropagation();
  }
}
