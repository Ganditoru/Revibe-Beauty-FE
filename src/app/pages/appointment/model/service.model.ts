export interface Service {
  name: string;
  employees: Employee[];
}

export interface Employee {
  id?: string;
  name: string;
  picture?: string;
  title: string;
  subServicesPerformed: SubService[];
}

export interface SubService {
  name: string;
  duration: number;
}

export interface AppointmentTime {
    startTime: Date;
    subService: SubService;
}

export interface Appointment {
  employee: Employee;
  customerName: string;
  customerPhone: string;
  subService: SubService;
  startTime: Date;
}
