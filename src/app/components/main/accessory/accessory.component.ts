import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessoryService } from '../../../Services/accessory.service';
@Component({
  selector: 'app-accessory',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './accessory.component.html',
  styleUrl: './accessory.component.css'
})
export class AccessoryComponent {
  public AccessoryData : any[] = [];
  constructor(private  accessory:AccessoryService) {  }
ngOnInit(){
  debugger
  this.getAccessory();
}
  addAccessory(){

  }

  getAccessory(){
debugger
    const getAccessory = this.accessory.GetAccessory().subscribe((response)=>{
      if(response){
        if (Array.isArray(response)) { // ✅ Ensure response is an array
          this.AccessoryData = response[0];
        } else {
          console.error("API did not return an array", response);
          this.AccessoryData = []; // Handle unexpected response
        }
      }
    })
  }
}
