import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbackServicesComponent } from './lookback-services.component';

describe('LookbackServicesComponent', () => {
  let component: LookbackServicesComponent;
  let fixture: ComponentFixture<LookbackServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookbackServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookbackServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
