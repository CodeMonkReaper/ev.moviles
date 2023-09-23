import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
@Component({
  selector: 'app-loginalum',
  templateUrl: './loginalum.page.html',
  styleUrls: ['./loginalum.page.scss'],
})
export class LoginalumPage implements OnInit {
  usuarioalum = JSON.parse(localStorage.getItem("usuarioalum")!);
  formulariologin:FormGroup
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


  constructor(public fb:FormBuilder,
    public alertController:AlertController, private router:Router) {
      
      this.formulariologin=this.fb.group({
        'email':new FormControl("",Validators.required),
        'password':new FormControl("",Validators.required)
      })
      
     }

  ngOnInit() {
  }async enviar(){
    var f= this.formulariologin.value;
    if(f.email==this.usuarioalum.email && f.password==this.usuarioalum.password){
      this.router.navigate(['inicio-alumno'])
    }else{
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Login',
        message: 'Login incorrecto',
        buttons: ['OK']
      });
  
      await alert.present();
      var usuarioalum={
        email:f.email,
        password:f.password
      }
      localStorage.setItem("usuarioalum",JSON.stringify(usuarioalum));
    }
    
    
  }
  ok(){
    this.router.navigate(['inicio-alumno'])
  }
  


}
