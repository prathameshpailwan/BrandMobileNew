import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/Shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileService } from '../../../../Services/mobile.service';

@Component({
  selector: 'app-mobile-type',
  standalone: true,
  imports: [SharedModule,CommonModule, FormsModule,
      ReactiveFormsModule],
  templateUrl: './mobile-type.component.html',
  styleUrl: './mobile-type.component.css'
})
export class MobileTypeComponent implements OnInit{

Typelist : any[] = [];
TypeModel : any[] = [];
constructor(private modal : NgbModal , private mobileService : MobileService){}

ngOnInit() {
  this.getMasterData()
}
  addType(model){
    this.TypeModel = [];
    this.modal.open(model, { size: 'md', backdrop: 'static' });
  }

  onclose(){
    this.modal.dismissAll();
  }

  AddType(){
    debugger
    this.TypeModel['Input'] = 'InsertType';
    const addType = this.mobileService.AddTypeColourComapny(this.TypeModel).subscribe((response) =>
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
          this.Typelist = response[0];
        }
      })
  }
}
