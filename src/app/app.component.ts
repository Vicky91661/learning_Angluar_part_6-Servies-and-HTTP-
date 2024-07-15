import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOneComponent } from "./component/component-one/component-one.component";
import { ComponentTwoComponent } from "./component/component-two/component-two.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentOneComponent, ComponentTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sixthAngularApp';
}
