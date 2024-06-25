import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefas'
import { cadastrar } from '../../store/reducers/tarefas'

const Fomulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [contato, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [tipoDeContato, setPrioridade] = useState(enums.TipoDeContato.CELULAR)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        contato,
        email,
        tipoDeContato
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome do Contato"
        />
        <Campo
          value={contato}
          onChange={({ target }) => setNumero(target.value)}
          type="number"
          placeholder="Numero do contato"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="email do contato"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.TipoDeContato).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="importante"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.TipoDeContato)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.TipoDeContato.CELULAR}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Fomulario
