import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMasterComponent } from './mobile-master.component';

describe('MobileMasterComponent', () => {
  let component: MobileMasterComponent;
  let fixture: ComponentFixture<MobileMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
