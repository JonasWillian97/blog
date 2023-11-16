import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent {
  title: string = "atualização do angular";
  photo: string = "https://www.alura.com.br/artigos/assets/como-comecar-com-angular/como-comecar-com-angular.png";
  description: string = "equipe do google anuncia atualização do angular, com novas funcionalidades e diversas melhorias";
}
