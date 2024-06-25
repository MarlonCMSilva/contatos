import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCArd from '../../components/FiltroCArd'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCArd
                valor={enums.TipoDeContato.CELULAR}
                criterio="tipodecontato"
                legenda="celular"
              />
              <FiltroCArd
                valor={enums.TipoDeContato.COMERCIAL}
                criterio="tipodecontato"
                legenda="comercial"
              />
              <FiltroCArd
                valor={enums.TipoDeContato.RESIDENCIA}
                criterio="tipodecontato"
                legenda="residencia"
              />
              <FiltroCArd criterio="todas" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar as lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
