import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileService } from '../../../../Services/mobile.service';

@Component({
  selector: 'app-mobile-company',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule],
  templateUrl: './mobile-company.component.html',
  styleUrl: './mobile-company.component.css'
})
export class MobileCompanyComponent implements OnInit {

  Companylist: any[] = [];
  CompanyModel: any[] = [];
  constructor(private modal: NgbModal, private mobileService: MobileService) { }

  ngOnInit() {
    this.getMasterData()
  }
  addCompany(model) {
    this.CompanyModel = [];
    this.modal.open(model, { size: 'md', backdrop: 'static' });
  }

  onclose() {
    this.modal.dismissAll();
  }

  AddCompany() {
    debugger
    this.CompanyModel['Input'] = 'InsertCompany';
    const addCompany = this.mobileService.AddTypeColourComapny(this.CompanyModel).subscribe((response) => {
      if (response) {
        this.getMasterData();
        this.onclose()
      }
    })
  }

  getMasterData() {
    debugger
    const getData = this.mobileService.GetMobileMasterData().subscribe((response) => {
      if (response) {
        this.Companylist = response[2];
      }
    })
  }
}
