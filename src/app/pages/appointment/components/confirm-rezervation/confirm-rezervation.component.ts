import {
  Component,
  EventEmitter,
  Input,
  LOCALE_ID,
  Output,
} from '@angular/core';
import { Appointment } from '../../model/service.model';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-rezervation',
  standalone: true,
  providers: [{ provide: LOCALE_ID, useValue: 'ro-RO' }],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  templateUrl: './confirm-rezervation.component.html',
  styleUrl: './confirm-rezervation.component.scss',
})
export class ConfirmRezervationComponent {
  @Output() public goHome = new EventEmitter<void>();

  @Input() public appointment?: Appointment;

  public onGoHome() {
    this.goHome.emit();
  }
}
