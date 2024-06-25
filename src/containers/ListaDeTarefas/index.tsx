import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let TarefasFiltradas = itens
    if (termo !== undefined) {
      TarefasFiltradas = itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'tipodecontato') {
        TarefasFiltradas = TarefasFiltradas.filter(
          (item) => item.tipoDeContato === valor
        )
      }
      return TarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todo(s) ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${criterio}=${valor}"`} ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              contato={t.contato}
              nome={t.nome}
              tipoDeContato={t.tipoDeContato}
              email={t.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
