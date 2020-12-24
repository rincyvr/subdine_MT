import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcEmailComponent } from './rc-email.component';

describe('RcEmailComponent', () => {
  let component: RcEmailComponent;
  let fixture: ComponentFixture<RcEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
