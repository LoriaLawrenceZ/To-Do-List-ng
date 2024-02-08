import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardService } from '../../service/card.service';
import { Card } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalCriarComponent } from '../modal-criar/modal-criar.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  public cards: Card[] = []; // Vetor para armazenar cards
  currentCard: any; //Variavel p/ drag and drop

  // Passa o serviço de Cards no contrutor do componente
  constructor(private _cardService: CardService, public dialog: MatDialog) {}

  // Ao abrir dialoo
  openDialog(tipo: string) {
    console.log(tipo);

    const dialogReference = this.dialog.open(ModalCriarComponent, {
      width: '100%',
    });

    dialogReference.afterOpened().subscribe(() => {});

    dialogReference.afterClosed().subscribe(() => {});
  }

  // Lista os Cards quando inicializado
  ngOnInit(): void {
    this.listarCards();
  }

  // Funcção para listar vagas
  listarCards() {
    this._cardService.getCards().subscribe((retornaCard) => {
      this.cards = retornaCard.map((item) => {
        // Mapeia os dados retornados para o modelo Card
        return new Card(item.id, item.descricao, item.status);
      });
    });
  }

  // Filtrar Card
  filterCards(status: string) {
    return this.cards.filter((m) => m.status == status);
  }

  // Lógica para drag and drop
  onDragStart(card: any) {
    console.log('onDragStart');
    this.currentCard = card; //declaração do current card para realizar a lógica do drag and drop
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any, status: string) {
    console.log('OnDrop');
    event.preventDefault();
    const cardDaVez = this.cards.find((m) => m.id == this.currentCard.id);

    if (cardDaVez != undefined) {
      cardDaVez.status = status;
      this._cardService.atualizarCard(cardDaVez.id, cardDaVez).subscribe(
        () => {
          // Atualizar lista de cards
          this.listarCards();
        },
        (err) => {
          console.log('Erro ao atualizar', err);
        }
      );
    }

    this.currentCard = null; // "deletando" o current card pra "zerar" o drag and drop (finalizando a ação e suas variaveis)
  }
}
