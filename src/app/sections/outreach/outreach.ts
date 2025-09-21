import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-outreach',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="section">
<h2>Outreach</h2>
<h3>BCCCD23 Symposium</h3>
<p>Learning how to explore: The developmental mechanisms of information seeking.</p>
<p>
<a class="button" href="https://www.youtube.com" target="_blank" rel="noopener">Watch on YouTube</a>
</p>
<h3>In the news</h3>
<ul>
<li><a href="#" target="_blank" rel="noopener">Forbes 2025</a></li>
<li><a href="#" target="_blank" rel="noopener">Der Spiegel 2020</a></li>
</ul>
</section>
`
})
export class OutreachComponent { }