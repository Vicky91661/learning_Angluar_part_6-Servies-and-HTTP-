import { Component } from '@angular/core';
import { CountServiceService } from '../../servies/count-service.service';
import { ComponentThreeComponent } from "../component-three/component-three.component";

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [ComponentThreeComponent],
  providers:[CountServiceService],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent {
  constructor(public countServie:CountServiceService){}
}
