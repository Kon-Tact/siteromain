import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
selector: 'app-contact',
standalone: true,
imports: [CommonModule, ReactiveFormsModule],
template: `
<section class="section">
<h2>Get in touch</h2>
<form [formGroup]="form" (ngSubmit)="submit()" novalidate>
<label> Name <input type="text" formControlName="name" required> </label>
<label> Email <input type="email" formControlName="email" required> </label>
<label> Message <textarea rows="5" formControlName="message" required></textarea> </label>
<button class="button" type="submit" [disabled]="form.invalid">Send</button>
</form>
@if (sent) {
  <p>Merci ! Votre message a été préparé dans votre client mail.</p>
}
</section>
`
})
export class ContactComponent {
form = new FormGroup({
name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
});
sent = false;


submit() {
if (this.form.invalid) return;
const { name, email, message } = this.form.getRawValue();
const subject = encodeURIComponent(`Contact from ${name}`);
const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
this.sent = true;
this.form.reset();
}
}