import { Routes } from '@angular/router';
import { CardsComponent } from './view/cards/cards.component';
import { ModalCriarComponent } from './view/modal-criar/modal-criar.component';

export const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'modal', component: ModalCriarComponent}
];
