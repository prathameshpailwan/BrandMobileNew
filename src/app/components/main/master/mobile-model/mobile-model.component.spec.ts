import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileModelComponent } from './mobile-model.component';

describe('MobileModelComponent', () => {
  let component: MobileModelComponent;
  let fixture: ComponentFixture<MobileModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
