import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioProfPage } from './inicio-prof.page';

describe('InicioProfPage', () => {
  let component: InicioProfPage;
  let fixture: ComponentFixture<InicioProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
