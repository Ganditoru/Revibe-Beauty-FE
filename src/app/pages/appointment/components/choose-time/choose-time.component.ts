import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  LOCALE_ID,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {
  AppointmentTime,
  Employee,
  SubService,
} from '../../model/service.model';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-choose-time',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: LOCALE_ID, useValue: 'ro-RO' },
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatDatepickerModule,
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './choose-time.component.html',
  styleUrl: './choose-time.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class ChooseTimeComponent {
  @Output() public selectedAppointmentTime =
    new EventEmitter<AppointmentTime>();

  @Input() public set selectedEmployee(employee: Employee | undefined) {
    if (!employee) return;
    this.employee = employee;
    this.selectedSubService = this.employee.subServicesPerformed[0];
  }

  public employee?: Employee;

  public selectedSubService?: SubService;
  public selectedDate: Date | null = null;

  public minDate: Date = new Date();
  public excludedDates: Date[] = [new Date(2025, 4, 30), new Date(2025, 5, 1)];

  public availableTimes: string[] = [];

  public onSelectSubService(subService: any) {
    this.selectedSubService = subService;
    this.selectedDate = null;
  }

  public onDateChange(date: Date | null) {
    if (!date) {
      return;
    }
    this.selectedDate = date;
    this.availableTimes = this.getAvailableTimesForDate(date);
  }

  public onSelectTime(time: string) {
    const appointmentTime: AppointmentTime = {
      startTime: this.combineDateAndTime(this.selectedDate!, time),
      subService: this.selectedSubService!,
    };
    this.selectedAppointmentTime.emit(appointmentTime);
  }

  public dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    const day = date.getDay();
    if (day === 0 || day === 6) {
      return false;
    }

    return !this.excludedDates.some(
      (exDate) =>
        exDate.getFullYear() === date.getFullYear() &&
        exDate.getMonth() === date.getMonth() &&
        exDate.getDate() === date.getDate()
    );
  };

  private getAvailableTimesForDate(date: Date): string[] {
    const weekday = date.getDay();
    if (weekday === 0 || weekday === 6) {
      return ['10:00', '11:00', '12:00'];
    }
    return ['09:00', '10:00', '11:00', '14:00', '15:00'];
  }

  private combineDateAndTime(base: Date, time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(
      base.getFullYear(),
      base.getMonth(),
      base.getDate(),
      hours,
      minutes
    );
  }
}
