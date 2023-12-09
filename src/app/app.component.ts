import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('BOYAMA  Yvanne | Etudiante inge4 ISI 2023-2024');

    this.metaService.addTags([
      { name: 'BARYCenter', content: 'cours CI/CD, Projet PIPELINE Vercel' },
      {
        name: 'description',
        content:
          'Pour ce TP de CI/CD, nous devions faire un pipeline avec versel et github. J espere avoir bien fait le travail',
      },
    ]);
  }
}
