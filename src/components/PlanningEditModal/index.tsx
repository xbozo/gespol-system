// import { useState } from 'react'
// import { PlanningType } from '../../@types/PlanningType'

// import { PlanningActions } from '../../reducers/PlanningsReducer'

// import { toast } from 'react-toastify'

// import { api } from '../../libs/axios'
// import * as C from './styles'

// type Props = {
// 	id: string
// 	dispatch: React.Dispatch<PlanningActions>
// 	isEditModalOpen: boolean
// 	closeEditModal: () => void
// }

// export function PlanningEditModal({ id, dispatch, isEditModalOpen, closeEditModal }: Props) {
// 	const [editedTitle, setEditedTitle] = useState('')
// 	const [editedLocation, setEditedLocation] = useState('')
// 	const [editedResponsible, setEditedResponsible] = useState('')
// 	const [editedDate, setEditedDate] = useState('')

// 	function handleSaveEditChanges() {
// 		if (
// 			editedTitle.trim() === '' ||
// 			editedLocation.trim() === '' ||
// 			editedResponsible.trim() === '' ||
// 			editedDate.trim() === ''
// 		) {
// 			toast.error('Preencha corretamente todos os campos.', {
// 				position: 'top-right',
// 				autoClose: 3000,
// 				hideProgressBar: false,
// 				closeOnClick: true,
// 				pauseOnHover: true,
// 				draggable: true,
// 				progress: undefined,
// 				theme: 'light',
// 			})
// 		} else {
// 			const editedPlanning: PlanningType = {
// 				title: editedTitle,
// 				description: editedDescription,
// 				location: editedLocation,
// 				date: editedDate,
// 				responsible: editedResponsible,
// 				id,
// 			}

// 			api.put(`/plannings/${id}`, editedPlanning).then(() => {
// 				dispatch({
// 					type: 'editPlanning',
// 					payload: {
// 						newTitle: editedTitle,
// 						newLocation: editedLocation,
// 						newDescription: editedDescription,
// 						newDate: editedDate,
// 						newResponsible: editedResponsible,
// 						id,
// 					},
// 				})
// 			})

// 			closeEditModal()
// 			setEditedTitle('')
// 			setEditedLocation('')
// 			setEditedResponsible('')
// 			setEditedDate('')
// 		}
// 	}

// 	return (
// 		<>
// 			{isEditModalOpen && (
// 				<C.EditModalOverlay>
// 					<C.EditModalContainer>
// 						<h1>Modificar Operação</h1>
// 						<C.EditModalInputContainer>
// 							<input
// 								value={editedTitle}
// 								onChange={(e) => setEditedTitle(e.target.value)}
// 								type="text"
// 								placeholder="Título da Operação"
// 							/>
// 							<input
// 								value={editedLocation}
// 								onChange={(e) => setEditedLocation(e.target.value)}
// 								type="text"
// 								placeholder="Local da Operação"
// 							/>
// 							<input
// 								value={editedResponsible}
// 								onChange={(e) => setEditedResponsible(e.target.value)}
// 								type="text"
// 								placeholder="Responsável"
// 							/>
// 							<input
// 								value={editedDate}
// 								onChange={(e) => setEditedDate(e.target.value)}
// 								type="date"
// 								placeholder="Data da Operação"
// 							/>
// 						</C.EditModalInputContainer>

// 						<C.EditModalButtonContainer>
// 							<button
// 								onClick={closeEditModal}
// 								id="closeButton"
// 							>
// 								Fechar
// 							</button>
// 							<button
// 								onClick={handleSaveEditChanges}
// 								id="saveButton"
// 							>
// 								Salvar Alterações
// 							</button>
// 						</C.EditModalButtonContainer>
// 					</C.EditModalContainer>
// 				</C.EditModalOverlay>
// 			)}
// 		</>
// 	)
// }
