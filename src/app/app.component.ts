import { Component } from '@angular/core';

@Component({
  selector: 'loan-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanapp';
  logoPath = './assets/images/boa.jpg';
  private banner= './assets/images/banner.jpg';
}
