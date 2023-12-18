import { useState } from "react";
import { CardTask } from "./components/CardTask";
// import { ModalCreateTask } from "./components/ModalCreateTask";

export function App() {
	const [isModalOpen, setModalOpen] = useState(false);

	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}
	return (
		<div className='container'>
			<h1 className='title mb-8'>ToDo List</h1>
			<button
				onClick={openModal}
				className='btn btn-sm btn-primary'
				type='button'
			>
				Criar Tarefa
			</button>
			<CardTask />
			{/* <ModalCreateTask isModalOpen={isModalOpen} closeModal={closeModal} /> */}

			<dialog
				id='modal-create-task'
				className='modal'
				open={isModalOpen}
				onClose={closeModal}
			>
				<div className='modal-box'>
					<form method='dialog'>
						<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
							✕
						</button>
					</form>
					<h3 className='font-bold text-lg'>Hello!</h3>
					<p className='py-4'>Press ESC key or click on ✕ button to close</p>
				</div>
			</dialog>
		</div>
	);
}
