import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="section reveal">
  <h2>Projects</h2>
  <div class="cards">
    <article class="card">
      <h3>DEVSTART</h3>
      <p class="meta">Guidebook for teaching research methods in developmental cognitive science.</p>
      <a class="button" href="https://tommasoghilardi.github.io" target="_blank" rel="noopener">Learn more</a>
    </article>
    <!-- Ajoute d'autres cards ici -->
  </div>
</section>

`
})
export class ProjectsComponent { }