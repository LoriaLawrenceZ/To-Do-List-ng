import { Component, NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CardService } from '../../service/card.service';
import { Card } from '../../models/card.model';



@Component({
  selector: 'app-modal-criar',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDialogClose,
    FormsModule,
  ],
  templateUrl: './modal-criar.component.html',
  styleUrl: './modal-criar.component.css',
})
export class ModalCriarComponent {
  //---=| ATRIBUTOS |=---//
  nomeTarefa: string = '';
  statusTarefa: string = '';
  descricao: string = '';
  idTarefa: string = '';
  idsExistentes: number[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalCriarComponent>,
    private _cardsService: CardService
  ) {}

  ngOnInit() {
    this._cardsService.getCards().subscribe((cards) => {
      this.idsExistentes = cards.map((card) => parseInt(card.id));
    });
  }

  criarTarefa(): void {
    if (
      !this.nomeTarefa ||
      !this.statusTarefa ||
      !this.descricao ||
      !this.idTarefa
    ) {
      alert('Por favor, preencha todos os campos antes de criar a tarefa.');
      return; // Retorna sem criar a tarefa
    } else {
      // Here you can access the values entered in the form fields
      console.log('Nome Tarefa:', this.nomeTarefa);
      console.log('Status tarefa:', this.statusTarefa);
      console.log('Descrição:', this.descricao);

      const novoCard: Card = {
        id: this.idTarefa,
        status: this.statusTarefa,
        descricao: this.descricao,
      };

      //console.log(this.idsExistentes);
      if (this.idsExistentes.includes(parseInt(novoCard.id))) {
        alert('Já existe uma tarefa com este id!');
      } else {
        // Close the dialog
        this.dialogRef.close(novoCard);
      }
    }
  }
}
