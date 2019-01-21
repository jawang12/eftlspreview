import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTaxComponent } from './payroll-tax.component';

describe('PayrollTaxComponent', () => {
  let component: PayrollTaxComponent;
  let fixture: ComponentFixture<PayrollTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
