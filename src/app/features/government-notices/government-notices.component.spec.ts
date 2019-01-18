import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentNoticesComponent } from './government-notices.component';

describe('GovernmentNoticesComponent', () => {
  let component: GovernmentNoticesComponent;
  let fixture: ComponentFixture<GovernmentNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
