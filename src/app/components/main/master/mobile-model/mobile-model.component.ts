import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileService } from '../../../../Services/mobile.service';
import { SharedModule } from '../../../shared/Shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-mobile-model',
  standalone: true,
   imports: [CommonModule, FormsModule, SharedModule,NgSelectModule ,
        ReactiveFormsModule],
  templateUrl: './mobile-model.component.html',
  styleUrl: './mobile-model.component.css'
})
export class MobileModelComponent implements OnInit{

MobileModelList : any[] = [];
CompanyMaster : any[] = [];
ColourMaster : any[] = [];
RamMaster : any[] = [];
RomMaster : any[] = [];
TypeMaster : any[] = [];
MobileModel : any[] = [];
RamMasters = [
  { RamId: 1, Ram: '4GB' },
  { RamId: 2, Ram: '6GB' },
  { RamId: 3, Ram: '8GB' }
];

constructor(private modal : NgbModal , private mobileService : MobileService){}

ngOnInit() {
  this.getMasterData()
}
  addType(model){
    this.MobileModel = [];
    this.modal.open(model, { size: 'xl', backdrop: 'static' });
  }

  onclose(){
    this.modal.dismissAll();
  }

  AddType(){
    debugger
    this.MobileModel['Input'] = 'Insert';
    const addType = this.mobileService.MobileModelTransaction(this.MobileModel).subscribe((response) =>
    {
      if(response){
        //this.getMasterData();
        this.onclose()
      }
    })
  }

  getMasterData(){
    debugger
    const getData = this.mobileService.GetMobileMasterData().subscribe((response) =>
      {
        if(response){
          this.TypeMaster = response[0];
          this.ColourMaster = response[1];
          this.CompanyMaster = response[2];
          this.RamMaster = response[3];
          this.RomMaster = response[4];
        }
      })
  }
}
