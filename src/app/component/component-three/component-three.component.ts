import { Component } from '@angular/core';
import { CountServiceService } from '../../servies/count-service.service';

@Component({
  selector: 'app-component-three',
  standalone: true,
  imports: [],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export class ComponentThreeComponent {
  constructor(public countServie:CountServiceService){}
}
