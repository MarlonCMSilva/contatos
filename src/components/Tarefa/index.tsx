import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Tarefas'

type Props = TarefaClass

const Tarefa = ({
  contato: ContatoOriginal,
  tipoDeContato,
  id,
  nome: nomeOriginal,
  email: emailOriginal
}: Props) => {
  const dispatch = useDispatch()

  //set do botao de edição
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setNumero] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  //utilização do UseEffect para habilidar a escroita da Descrição da atividade.
  useEffect(() => {
    if (ContatoOriginal.length > 0) {
      setNumero(ContatoOriginal)
    }

    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }

    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [ContatoOriginal, nomeOriginal, emailOriginal])

  //criação de uma função para realizar as chamadas
  function cancelarEdicao() {
    setEstaEditando(false)
    setNumero(contato)
  }

  return (
    <>
      <S.Card>
        <label htmlFor={nome}>
          <S.Titulo>
            {estaEditando && <em>Editando: </em>}
            {nome}
          </S.Titulo>
        </label>
        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <S.CampoItems>
                <S.CampoItem>
                  <p>nome</p>
                  <S.Descricao
                    disabled={!estaEditando}
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                  />
                </S.CampoItem>
                <S.CampoItem>
                  <p>numero</p>
                  <S.Descricao
                    disabled={!estaEditando}
                    value={contato}
                    onChange={(evento) => setNumero(evento.target.value)}
                  />
                </S.CampoItem>
                <S.CampoItem>
                  <p>Email</p>
                  <S.Descricao
                    disabled={!estaEditando}
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                  />
                </S.CampoItem>
              </S.CampoItems>
              <S.ContainerBotao>
                <BotaoSalvar
                  onClick={() => {
                    dispatch(
                      editar({
                        contato,
                        tipoDeContato,
                        nome,
                        id,
                        email
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </BotaoSalvar>
                <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                  Cancelar
                </S.BotaoCancelarRemover>
              </S.ContainerBotao>
            </>
          ) : (
            <>
              <S.ContainerBotao>
                <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                  Remover
                </S.BotaoCancelarRemover>
              </S.ContainerBotao>
            </>
          )}
        </S.BarraAcoes>

        <S.Tag parametro="prioridade" prioridade={tipoDeContato}>
          {tipoDeContato}
        </S.Tag>
        <S.containerContato>
          <li>
            <b>Nome:</b> {nome}
          </li>
          <li>
            <b>Numero:</b> {contato}
          </li>
          <li>
            <b>Email:</b> {email}
          </li>
        </S.containerContato>
      </S.Card>
    </>
  )
}

export default Tarefa
