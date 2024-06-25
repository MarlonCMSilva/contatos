import * as enums from '../utils/enums/Tarefas'

class Tarefa {
  nome: string
  tipoDeContato: enums.TipoDeContato
  contato: string
  email: string
  id: number

  constructor(
    nome: string,
    tipoDeContato: enums.TipoDeContato,
    contato: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.tipoDeContato = tipoDeContato
    this.contato = contato
    this.email = email
    this.id = id
  }
}

export default Tarefa
