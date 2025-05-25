import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { carouselList } from './model/carousel-images.constant';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { pageDetails } from './model/page-description.constant';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    HammerModule,
    NgbCarouselModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public carouselList = carouselList;
  public pageDetails = pageDetails;

  constructor(private readonly router: Router) {}

  goToAppointment(): void {
    this.router.navigate(['/appointment']);
  }
}
