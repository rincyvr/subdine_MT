import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcPasswordComponent } from './rc-password.component';

describe('RcPasswordComponent', () => {
  let component: RcPasswordComponent;
  let fixture: ComponentFixture<RcPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
