import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { App, APP_LIST } from 'src/app-config';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss'],
})
export class AppDetailsComponent {
  application: App | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params: any) => {
      this.application = APP_LIST.find((item) => item.id === params['id']);
      console.log(this.application);
    });
  }
}
