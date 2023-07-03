import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  registrarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toast: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorService) 
    {
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],

    })

  }
  regristrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password !== repetirPassword) {
      this.toast.error('Las contraseñas ingresadas deben ser las mismas', 'Error');
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
this.toast.success('El usuario fue registrado con exito', 'Usuario registrado');      
      this.router.navigate(['/login']);
      
    }).catch((error) => {
      console.log(error);
      this.toast.error(this.firebaseError.codigoError(error.code),'Error');
    })
  }
  
}
