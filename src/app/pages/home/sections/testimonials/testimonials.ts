import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsSection {
 

  stars = Array.from({ length: 5 });
  items = [
    { quote: 'Subtle. Lasting. Unmistakable.', by: '— M.A., Cairo' },
    { quote: 'Finally, a scent worth the wait.', by: '— K.H., Doha' },
    { quote: 'Elegant. Quiet. Permanent.', by: '— S.R., Alexandria' },
  ];
}
