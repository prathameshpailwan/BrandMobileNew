import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileService } from '../../../../Services/mobile.service';

@Component({
  selector: 'app-mobile-colour',
  standalone: true,
  imports: [CommonModule, FormsModule,
        ReactiveFormsModule],
  templateUrl: './mobile-colour.component.html',
  styleUrl: './mobile-colour.component.css'
})
export class MobileColourComponent implements OnInit{

Colourlist : any[] = [];
ColourModel : any[] = [];
constructor(private modal : NgbModal , private mobileService : MobileService){}

ngOnInit() {
  this.getMasterData()
}
  addType(model){
    this.ColourModel = [];
    this.modal.open(model, { size: 'md', backdrop: 'static' });
  }

  onclose(){
    this.modal.dismissAll();
  }

  AddColour(){
    debugger
    this.ColourModel['Input'] = 'InsertColour';
    const adColour = this.mobileService.AddTypeColourComapny(this.ColourModel).subscribe((response) =>
    {
      if(response){
        this.getMasterData();
        this.onclose()
      }
    })
  }

  getMasterData(){
    debugger
    const getData = this.mobileService.GetMobileMasterData().subscribe((response) =>
      {
        if(response){
          this.Colourlist = response[1];
        }
      })
  }
}
