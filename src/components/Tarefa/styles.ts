import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefas'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.TipoDeContato
  parametro: 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.TipoDeContato.CELULAR) return variaveis.verde
    if (props.prioridade === enums.TipoDeContato.COMERCIAL)
      return variaveis.azulEscuro
    if (props.prioridade === enums.TipoDeContato.RESIDENCIA)
      return variaveis.azulClaro
  }
  return '#ccc'
}

export const Card = styled.div`
  position: relative;
  backgroun-color: #fcfcfc;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: block;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.h3`
  font-size: 32px;
  font-weigth: bold;
  margin-left: 8px;
`

export const containerContato = styled.ul`
  font-size: 22px;
  margin-left: 8px;

  li {
    padding: 8px;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 22px;
  font-weigth: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-left: 12px;
`
export const CampoItems = styled.ul`
  display: flex;

  p {
    font-weight: bold;
    font-size: 22px;
  }
`
export const CampoItem = styled.li`
  display: block;
  margin-bottom: 2px;
  aling-items: center;
  padding-right: 8px;
`
export const Descricao = styled.input`
  color: #8b8b8b;
  font-size: 22px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #0000001a;
  padding-top: 16px;
`

export const ContainerBotao = styled.div`
  margin-bottom: 20px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  border-radius: 8px;
`
