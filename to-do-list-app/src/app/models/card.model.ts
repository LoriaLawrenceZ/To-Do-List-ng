export class Card{
  id: string = '';
  descricao: string = '';
  status: string = '';

  //-----===| CONSTRUTOR |===-----//
  constructor(id: string, descricao: string, status: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
  }
}
