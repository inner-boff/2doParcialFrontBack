import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {

  recuperarUsuario: FormGroup;
  constructor(private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toast: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorService){
      this.recuperarUsuario = this.fb.group({
        email: ['', Validators.required]
      });

  }
  recuperar(){
const email = this.recuperarUsuario.value.email;
this.afAuth.sendPasswordResetEmail(email).then(() =>{
this.toast.info('Se envio un email para restablecer la contraseña', 'Recuperar Contraseña')
this.router.navigate(['/login']);
}).catch((error) =>{
  this.toast.error(this.firebaseError.codigoError(error.code),'Error');
})
  }
}
