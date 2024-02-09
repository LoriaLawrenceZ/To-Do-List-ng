import { Component, NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-modal-criar',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
  ],
  templateUrl: './modal-criar.component.html',
  styleUrl: './modal-criar.component.css',
})
export class ModalCriarComponent {
}
