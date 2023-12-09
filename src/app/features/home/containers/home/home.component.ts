import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _email = 'yvanneboyama@gmail.com'

  public redirectToEmail() {
    const url = new URL("mailto:", window.location.origin);
    url.searchParams.set("to", this._email);
  
    window.open(url);
  }

}
