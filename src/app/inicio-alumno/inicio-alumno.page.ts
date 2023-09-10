import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {
  usuario = JSON.parse(localStorage.getItem("usuario")!);

  
  
  


  constructor() { }

  ngOnInit() {
  }
  saludar: string = "BIENVENIDO"+" "+this.usuario.email;
  
  
}
