import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamRomComponent } from './ram-rom.component';

describe('RamRomComponent', () => {
  let component: RamRomComponent;
  let fixture: ComponentFixture<RamRomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamRomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
