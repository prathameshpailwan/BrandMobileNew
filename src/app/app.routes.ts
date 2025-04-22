import { Routes } from '@angular/router';
import { PurchaseComponent } from './components/main/purchase/purchase.component';
import { SaleComponent } from './components/main/sale/sale.component';
import { ReportsComponent } from './components/main/reports/reports.component';
import { MasterComponent } from './components/main/master/master.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { AccessoryComponent } from './components/main/accessory/accessory.component';
import { MobileTypeComponent } from './components/main/master/mobile-type/mobile-type.component';
import { MobileColourComponent } from './components/main/master/mobile-colour/mobile-colour.component';
import { MobileCompanyComponent } from './components/main/master/mobile-company/mobile-company.component';
import { RamRomComponent } from './components/main/master/ram-rom/ram-rom.component';
import { MobileMasterComponent } from './components/main/Mobile-Master/mobile-master/mobile-master.component';
import { MobileModelComponent } from './components/main/master/mobile-model/mobile-model.component';

export const routes: Routes = [
    { path: 'purchase', component: PurchaseComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'master', component: MasterComponent },
    { path: 'report', component: ReportsComponent },
    { path: 'accessory', component: AccessoryComponent },
    { path: 'mobileType', component: MobileTypeComponent },
    { path: 'mobileColour', component: MobileColourComponent },
    { path: 'mobileRamRom', component: RamRomComponent },
    { path: 'mobileCompany', component: MobileCompanyComponent },
    { path: 'mobileMaster', component: MobileMasterComponent },
    { path: 'mobileModel', component: MobileModelComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 
];
