import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTypeComponent } from './mobile-type.component';

describe('MobileTypeComponent', () => {
  let component: MobileTypeComponent;
  let fixture: ComponentFixture<MobileTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
