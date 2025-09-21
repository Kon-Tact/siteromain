import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Pub { title: string; venue?: string; year?: number; link?: string }


@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="section reveal">
  <h2>Publications</h2>
  <ul class="list-clean pubs">
    @for (p of pubs; track p.title) {
      <li>
        <strong>{{ p.title }}</strong>
        @if (p.venue) { <span class="meta">— {{ p.venue }}</span> }
        @if (p.year)  { <span class="meta">({{ p.year }})</span> }
        @if (p.link)  { <a class="button ghost" style="margin-left:.5rem" [href]="p.link" target="_blank" rel="noopener">PDF</a> }
      </li>
    } @empty {
      <li>Aucune publication pour le moment.</li>
    }
  </ul>
</section>
`
})
export class PublicationsComponent {
  pubs: Pub[] = [
    { title: 'Example article about curiosity', venue: 'Journal XYZ', year: 2024, link: '#' },
    { title: 'Another paper title', venue: 'Conference ABC', year: 2023 }
  ];
}