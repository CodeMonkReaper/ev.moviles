import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {
  usuarioalum = JSON.parse(localStorage.getItem("usuarioalum")!);

  
  
  


  constructor() { }

  ngOnInit() {
  }
  saludar: string = "BIENVENIDO"+" "+this.usuarioalum.email;
  
  
}
