import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaultProfilePicture, serviceTypes } from '../../mocks/choose.constant';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { CommonModule } from '@angular/common';
import { Employee, Service } from '../../model/service.model';

@Component({
  selector: 'app-choose-person',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './choose-person.component.html',
  styleUrl: './choose-person.component.scss'
})
export class ChoosePersonComponent {
  public defaultProfilePicture = defaultProfilePicture;

  @Output() public selectEmployee = new EventEmitter<Employee>();

  @Input() public serviceTypes: Service[] = serviceTypes;

  public onSelectEmployee(employee: Employee): void {
    this.selectEmployee.emit(employee);
  }
}
