import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-prof',
  templateUrl: './inicio-prof.page.html',
  styleUrls: ['./inicio-prof.page.scss'],
})
export class InicioProfPage implements OnInit {
  usuario = JSON.parse(localStorage.getItem("usuario")!);


  constructor() { }

  ngOnInit() {
  }
  saludar: string = "BIENVENIDO"+" "+this.usuario.nombre;
}
