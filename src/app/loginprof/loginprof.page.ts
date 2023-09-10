import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
@Component({
  selector: 'app-loginprof',
  templateUrl: './loginprof.page.html',
  styleUrls: ['./loginprof.page.scss'],
})
export class LoginprofPage implements OnInit {
  usuario = JSON.parse(localStorage.getItem("usuario")!);
  formulariologin:FormGroup
  constructor(public fb:FormBuilder,
    public alertController:AlertController,private router:Router) {
    this.formulariologin=this.fb.group({
      'email':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })
  }
  public alertButton = [{
    text: 'Ok',
    handler: () => {this.ok()},
  },
    {
    cancelar: 'Cancelar',
    }]
  public alertInputs = [
    {
      placeholder: 'correo',
    },
    {
      type: 'Contraseña nueva',
      placeholder: 'Nueva password (min. 8 caracteres)',
    },
  ];

  ngOnInit() {
  }
  async enviar(){
    var f= this.formulariologin.value;
    if(f.email==this.usuario.email && f.password==this.usuario.password){
      this.router.navigate(['inicio-prof'])
    }else{
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Login',
        message: 'Login incorrecto',
        buttons: ['OK']
      });
  
      await alert.present();
      var usuario={
        email:f.email,
        password:f.password
      }
      localStorage.setItem("usuario",JSON.stringify(usuario));
    }
  }
  ok(){
    this.router.navigate(['inicio-prof'])
  }
  

}
