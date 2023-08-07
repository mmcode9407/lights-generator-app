import Text from './Text';
import IconMinus from './icons/IconMinus';
import IconPlus from './icons/IconPlus';

import styles from './Counter.module.css';
import { useState } from 'react';

export default function Counter(props) {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};
	const decrementCount = () => {
		if (count <= 0) {
			return;
		}
		setCount(count - 1);
	};

	return (
		<div className={styles.wrapper}>
			<Text>
				{count} {props.text}
			</Text>
			<nav>
				<IconMinus onClick={decrementCount} />
				<IconPlus onClick={incrementCount} />
			</nav>
		</div>
	);
}
