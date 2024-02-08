import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./universal/header/header.component";
import { FooterComponent } from './universal/footer/footer.component';
import { CardsComponent } from './view/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      CardsComponent,
      HttpClientModule,
      MatDialogModule
    ]
})
export class AppComponent {
  title = 'to-do-list-app';
}
