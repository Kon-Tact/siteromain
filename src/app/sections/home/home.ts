import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="section hero reveal">
  <img src="assets/profile.jpg" alt="Profile" />
  <header>
    <span class="tag">Cognitive Neuroscientist</span>
    <h1>Ton Nom</h1>
    <p class="lead">Postdoc interested in learning, curiosity, and generative models.</p>
    <a class="button" routerLink="/cv">Curriculum&nbsp;Vitae</a>
    <a class="button ghost" routerLink="/projects" style="margin-left:.5rem">Projects</a>
  </header>
</section>

`
})
export class HomeComponent { }