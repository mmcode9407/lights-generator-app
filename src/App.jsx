import './App.css';
import Counter from './components/Counter';
import Grid from './components/Grid';
import SingleLight from './components/SingleLight';
import Text from './components/Text';
import { useState } from 'react';

function App() {
	const [rows, setRows] = useState(0);
	const [columns, setColumns] = useState(0);

	const increment = (setElement, el) => {
		switch (el) {
			case 'columns':
				setElement((prev) => (prev >= 9 ? prev : prev + 1));
				break;
			default:
				setElement((prev) => prev + 1);
		}
	};

	const decrement = (setElement) => {
		setElement((prev) => (prev <= 0 ? prev : prev - 1));
	};

	const totalLights = rows * columns;

	const lights = Array.from({ length: totalLights });

	return (
		<div>
			<nav className='nav'>
				<Text className='counter'>{totalLights} bulbs</Text>
				<Counter
					text='rows'
					count={rows}
					onIncrement={() => increment(setRows)}
					onDecrement={() => decrement(setRows)}
				/>
				<Counter
					text='columns'
					count={columns}
					onIncrement={() => increment(setColumns, 'columns')}
					onDecrement={() => decrement(setColumns)}
				/>
			</nav>
			<Grid columns={columns}>
				{lights.map((light, index) => {
					return <SingleLight key={index} />;
				})}
			</Grid>
		</div>
	);
}

export default App;
