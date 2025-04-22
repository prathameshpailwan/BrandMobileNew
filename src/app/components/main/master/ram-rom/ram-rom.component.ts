import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileService } from '../../../../Services/mobile.service';

@Component({
  selector: 'app-ram-rom',
  standalone: true,
  imports: [CommonModule, FormsModule,
        ReactiveFormsModule],
  templateUrl: './ram-rom.component.html',
  styleUrl: './ram-rom.component.css'
})
export class RamRomComponent implements OnInit{

RamList : any[] = [];
RomList : any[] = [];
RamRomList : any[] = [];
RamRomModel : any[] = [];
typeFlag : boolean = false;
title : string = '';
constructor(private modal : NgbModal , private mobileService : MobileService){}

ngOnInit() {
  this.getMasterData()
}
  addType(model ,type){
    this.title = type
    this.typeFlag =  type === 'Ram' ? true : false;
    this.RamRomModel = [];
    this.modal.open(model, { size: 'md', backdrop: 'static' });
  }

  onclose(){
    this.modal.dismissAll();
  }

  AddRamRom(){
    debugger
    if(this.title === 'Ram'){
      this.RamRomModel['Input'] =    'InsertRam' ;
    }
    if(this.title === 'Rom'){
      this.RamRomModel['Input'] =    'InsertRom' ;
    }
    const addRamRom = this.mobileService.AddTypeColourComapny(this.RamRomModel).subscribe((response) =>
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
          this.RamList = response[3];
          this.RomList = response[4];
          this.RamRomList = response[4];
        }
      })
  }
}

