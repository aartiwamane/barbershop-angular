import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  appointmentForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  get f() { return this.appointmentForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    // In a real application, you would send this data to your backend
    console.log(this.appointmentForm.value);
    
    // Simulate successful submission
    this.success = true;
    this.appointmentForm.reset();
  }
}
