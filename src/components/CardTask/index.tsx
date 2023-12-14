const tasks = [
	{
		id: 1,
		description: "Essa é minha primeira tarefa",
		isCompleted: false,
		CreatedAt: new Date(),
	},
	{
		id: 2,
		description: "Essa é minha segunda tarefa",
		isCompleted: true,
		CreatedAt: new Date(),
	},
	{
		id: 3,
		description: "Essa é minha terceira tarefa",
		isCompleted: true,
		CreatedAt: new Date(),
	},
];

export function CardTask() {
	return (
		<>
			{tasks?.map((task) => (
				<div key={task.id} className='card w-full bg-neutral shadow-md my-3'>
					<div className='flex justify-between items-center py-4 px-6'>
						<div className='flex items-center gap-4'>
							<input type='checkbox' className='checkbox checkbox-primary' />
							<p>{task.description}</p>
						</div>

						<div className='flex items-center gap-4 uppercase'>
							<span
								className={`badge ${
									task.isCompleted ? "badge-success" : "badge-primary"
								}`}
							>
								{task.isCompleted ? "complete" : "todo"}
							</span>

							<button
								title='Deletar tarefa'
								className='btn btn-sm btn-circle btn-outline btn-error'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
