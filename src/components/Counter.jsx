import Text from './Text';
import IconMinus from './icons/IconMinus';
import IconPlus from './icons/IconPlus';

import styles from './Counter.module.css';

export default function Counter(props) {
	return (
		<div className={styles.wrapper}>
			<Text>
				{props.count} {props.text}
			</Text>
			<nav>
				<IconMinus onClick={props.onDecrement} />
				<IconPlus onClick={props.onIncrement} />
			</nav>
		</div>
	);
}
