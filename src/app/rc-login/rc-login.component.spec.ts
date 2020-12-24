import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcLoginComponent } from './rc-login.component';

describe('RcLoginComponent', () => {
  let component: RcLoginComponent;
  let fixture: ComponentFixture<RcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
