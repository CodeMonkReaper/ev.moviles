import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginprofPage } from './loginprof.page';

describe('LoginprofPage', () => {
  let component: LoginprofPage;
  let fixture: ComponentFixture<LoginprofPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
