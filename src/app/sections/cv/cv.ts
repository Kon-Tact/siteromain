import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="section">
<h2>Curriculum Vitae</h2>
<p>
Short bio / current position. Download the full CV as PDF.
</p>
<a class="button" href="assets/cv.pdf" download>Download</a>
</section>
`
})
export class CvComponent { }