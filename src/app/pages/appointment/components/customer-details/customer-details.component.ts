import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss',
})
export class CustomerDetailsComponent {
  @Output() public onSetCustomerDetails = new EventEmitter<{
    name: string;
    phone: string;
  }>();

  public customerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9\s-]{7,15}$/)],
      ],
    });
  }

  public onSubmit(): void {
    this.onSetCustomerDetails.emit(this.customerForm.value);
  }
}
