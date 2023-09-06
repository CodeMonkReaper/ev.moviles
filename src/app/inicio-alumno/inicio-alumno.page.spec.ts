import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAlumnoPage } from './inicio-alumno.page';

describe('InicioAlumnoPage', () => {
  let component: InicioAlumnoPage;
  let fixture: ComponentFixture<InicioAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
