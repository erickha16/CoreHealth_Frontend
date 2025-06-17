import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenu } from "./layout/nav-menu/nav-menu";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavMenu, Footer],
  templateUrl: './app.html',
})
export class App {
  protected title = 'CoreHealth_Front';
}
