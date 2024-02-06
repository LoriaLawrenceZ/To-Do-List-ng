export class Card{
  id: number = 0;
  descricao: string = '';
  status: string = '';

  //-----===| CONSTRUTOR |===-----//
  constructor(id: number, descricao: string, status: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
  }
}
