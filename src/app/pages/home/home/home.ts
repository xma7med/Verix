import { Component } from '@angular/core';

// import { NavbarComponent  } from '../../../layout/navbar/navbar';
// import { NavbarComponent } from '../../layout/navbar/navbar/navbar';
import { NavbarComponent } from '../../../layout/navbar/navbar/navbar';
import { YearEndOfferSection } from '../sections/year-end-offer/year-end-offer';
import { ProductsSection } from '../sections/products/products';
import { ArchitectureSection } from '../sections/architecture/architecture';
import { VesselSection } from '../sections/vessel/vessel';
import { LongevitySection } from '../sections/longevity/longevity';
import { DeliverySection } from '../sections/delivery/delivery';
import { TestimonialsSection } from '../sections/testimonials/testimonials'; 
import { ReserveSection } from '../sections/reserve/reserve';
import { FooterComponent } from '../../../layout/footer/footer';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent 
    , YearEndOfferSection , ProductsSection , ArchitectureSection
    ,VesselSection, LongevitySection, DeliverySection , TestimonialsSection , ReserveSection, 
    FooterComponent

  ], 
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
