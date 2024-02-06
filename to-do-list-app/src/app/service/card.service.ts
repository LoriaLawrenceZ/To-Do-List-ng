import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'http://localhost:3000/cards'; // Caminho para o arquivo JSON
  constructor(private http: HttpClient) {}
  // Obtém a lista de Cards a partir do arquivo JSON
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }
  // Cadastra uma nova Card no servidor
  cadastrarCard(card: Card): Observable<Card[]> {
    return this.http.post<Card[]>(this.apiUrl, card);
  }
  // Atualiza uma Card existente no servidor
  atualizarCard(id: any, card: Card): Observable<Card[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Card[]>(urlAtualizar, card);
  }
  // Remove uma Card do servidor
  removerCard(id: any): Observable<Card[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Card[]>(urlDeletar);
  }
}
