import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginalumPage } from './loginalum.page';

describe('LoginalumPage', () => {
  let component: LoginalumPage;
  let fixture: ComponentFixture<LoginalumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginalumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
