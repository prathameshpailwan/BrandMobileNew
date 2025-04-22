
interface MenuData {
  title: string;
  icon: string;
  type: string;
  level: string;
  active: boolean;
  UserType?: string;
  children?: { path: string; title: string; type: string }[]; // Optional children property
  path?: string;  // 'path' property is optional on the parent menu itself
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../../Services/common.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  margin = 0;
  leftArrowNone = false;
  constructor(private router: Router) { }
  menuData: MenuData[] = [

    {
      "title": "Dashboard",
      "icon": "dashboard",
      "path":"dashboard",
      "type": "sub",
      "level": "L2,L3,L1",
      "active": false
    },
    {
      "title": "Mobile",
      "icon": "home",
      "type": "sub",
      "level": "L2,L3,L1",
      "active": false,
      "children": [
        {
          "path": "mobileType",
          "title": "MobileType",
          "type": "link"
        },
      ]
    },
    {
      "title": "Master",
      "icon": "home",
      "type": "sub",
      "level": "L2,L3,L1",
      "UserType": "Employee,Admin,Society,PMC",
      "active": false,
      "children": [

        {
          "path": "mobileType",
          "title": "Mobile Type",
          "type": "link"
        },
        {
          "path": "mobileColour",
          "title": "Mobile Colour",
          "type": "link"
        },
        {
          "path": "mobileRamRom",
          "title": "Ram and Rom",
          "type": "link"
        },
        {
          "path": "mobileCompany",
          "title": "Mobile Company",
          "type": "link"
        },
        {
          "path": "mobileModel",
          "title": "Mobile Model",
          "type": "link"
        },
        {
          "path": "mobileMaster",
          "title": "Mobile Master",
          "type": "link"
        }
      ]
    }
  ];

  navigateTo(path) {
    debugger
    this.router.navigate([path]);
  }
}