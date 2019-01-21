import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReturnsComponent } from './tax-returns.component';

describe('TaxReturnsComponent', () => {
  let component: TaxReturnsComponent;
  let fixture: ComponentFixture<TaxReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
