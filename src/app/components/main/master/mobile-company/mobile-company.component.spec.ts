import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCompanyComponent } from './mobile-company.component';

describe('MobileCompanyComponent', () => {
  let component: MobileCompanyComponent;
  let fixture: ComponentFixture<MobileCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
