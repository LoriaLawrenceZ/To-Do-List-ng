import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { Card } from '../../models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  public cards: Card[] = []; // Vetor para armazenar cards

  // Passa o serviço de Cards no contrutor do componente
  constructor(private _cardService: CardService) {}

  // Lista os Cards quando inicializado
  ngOnInit(): void {
    this.listarCards();
  }

  // Funcção para listar vagas
  listarCards(){
    this._cardService.getCards().subscribe((retornaCard) => {
      this.cards = retornaCard.map((item) => {
        // Mapeia os dados retornados para o modelo Card
        return new Card(
          item.id,
          item.descricao,
          item.status
        );
      });
    });
  }
}
