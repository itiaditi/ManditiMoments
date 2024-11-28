// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  selectedCountry = 'IN'; // Default to India

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  onRequestOTP() {
    if (this.loginForm.valid) {
      console.log('Requesting OTP for:', this.loginForm.value.phoneNumber);
      // Implement your OTP request logic here
    }
  }

  loginWithEmail() {
    console.log('Switching to email login');
    // Implement email login logic
  }

  loginWithWhatsApp() {
    console.log('Switching to WhatsApp login');
    // Implement WhatsApp login logic
  }
}