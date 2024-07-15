import { Component } from '@angular/core';
import { CountServiceService } from '../../servies/count-service.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOneComponent {
    constructor(public countServie:CountServiceService){}
}
