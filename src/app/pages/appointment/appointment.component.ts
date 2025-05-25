import { Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ChoosePersonComponent } from './components/choose-person/choose-person.component';
import { ChooseTimeComponent } from './components/choose-time/choose-time.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { serviceTypes } from './mocks/choose.constant';
import {
  Appointment,
  AppointmentTime,
  Employee,
  Service,
} from './model/service.model';
import { ConfirmRezervationComponent } from './components/confirm-rezervation/confirm-rezervation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ChoosePersonComponent,
    ChooseTimeComponent,
    CustomerDetailsComponent,
    ConfirmRezervationComponent,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
})
export class AppointmentComponent {
  @ViewChild('stepper') private readonly stepper!: MatStepper;

  public serviceTypes: Service[] = serviceTypes;
  public selectedEmployee?: Employee;
  public appointment?: Appointment;

  public get timeStepLabel(): string {
    return this.selectedEmployee
      ? 'Programeazate la ' + this.selectedEmployee.name
      : 'Alege intervalul orar';
  }

  constructor(private readonly router: Router) {}

  public onSelectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    this.stepper.next();
  }

  public onChooseTime(appointMentTime: AppointmentTime) {
    this.appointment = {
      customerName: '',
      customerPhone: '',
      employee: this.selectedEmployee!,
      startTime: appointMentTime.startTime,
      subService: appointMentTime.subService,
    };
    this.stepper.next();
  }

  public onSetCustomerDetails(details: { name: string; phone: string }) {
    this.appointment!.customerName = details.name;
    this.appointment!.customerPhone = details.phone;
    this.stepper.next();
  }

  public onGoHome() {
    this.router.navigateByUrl('/');
  }
}
