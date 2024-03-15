import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  selectedDate: any;
  
  onSelect(event: Event){
    console.log(event);
    this.selectedDate= event;
  }
}
