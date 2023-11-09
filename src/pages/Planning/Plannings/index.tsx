import { useEffect, useReducer } from 'react'

import { api } from '../../../libs/axios'
import { PlanningsReducer } from '../../../reducers/PlanningsReducer'

import { PlanningType } from '../../../@types/PlanningType'

import { Header } from '../../../components/Header'
import { PlanningItem } from '../../../components/PlanningItem'
import { Title } from '../../../components/Title'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import * as C from './styles'

export function Plannings() {
	const [plannings, dispatch] = useReducer(PlanningsReducer, [])

	useEffect(() => {
		api.get<PlanningType[]>('/plannings').then((response) => {
			dispatch({
				type: 'setPlannings',
				payload: response.data,
			})
		})
	}, [plannings])

	// Para que os itens exibidos sejam por ordem de adição, já que a API não lida com isso atualmente
	const reversedPlannings = [...plannings].reverse()

	return (
		<C.Container>
			<Header activeItem={'plannings'} />

			<C.Content>
				<Title title={'Planejamento'} />
				<div className="new-operation-btn">
					<Link
						to="/plannings/newoperation"
						className="new-operation-btn"
					>
						<button>Registrar Nova Operação</button>
					</Link>
				</div>

				<C.PlanningsTable
					striped
					bordered
					hover
				>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nome da Operação</th>
							<th scope="col">Local do Planejamento</th>
							<th scope="col">Data</th>
							<th scope="col">Responsável</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{reversedPlannings.map((item, index) => (
							<PlanningItem
								key={item.id}
								title={item.title}
								description={item.description}
								location={item.location}
								responsible={item.responsible}
								date={item.date}
								id={item.id}
								totalLength={index + 1}
							/>
						))}
					</tbody>
				</C.PlanningsTable>
			</C.Content>
		</C.Container>
	)
}
