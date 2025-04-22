import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileColourComponent } from './mobile-colour.component';

describe('MobileColourComponent', () => {
  let component: MobileColourComponent;
  let fixture: ComponentFixture<MobileColourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileColourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
