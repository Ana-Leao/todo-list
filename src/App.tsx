import { CardTask } from "./components/CardTask";

export function App() {
	return (
		<div className='container'>
			<h1 className='title mb-8'>ToDo List</h1>
			<CardTask />
		</div>
	);
}
