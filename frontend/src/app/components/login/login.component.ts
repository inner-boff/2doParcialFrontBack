import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginUsuario : FormGroup;

constructor(private fb: FormBuilder, 
  private afAuth: AngularFireAuth, 
  private toast: ToastrService,
  private router: Router,
  private firebaseError: FirebaseErrorService){
this.loginUsuario = this.fb.group({
  email: ['', Validators.required],
  password: ['', Validators.required],
});
}
login(){
const email = this.loginUsuario.value.email;
const password = this.loginUsuario.value.password;
this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{
  console.log(user);
  if(user.user?.emailVerified){
    this.router.navigate(['lista-destino']);
  }else{
    this.router.navigate(['/verificar-correo']);
  }
}).catch((error) =>{
  console.log(error);
  this.toast.error(this.firebaseError.codigoError(error.code),'Error');
})
}
}
