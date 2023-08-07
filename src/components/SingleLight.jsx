import { useState } from 'react';
import LightTurnedOff from '../../public/images/light-turned-off.svg';
import LightBlue from '../../public/images/light-blue.svg';

export default function SingleLight() {
	const [isOn, setOn] = useState(true);

	const imageSrc = isOn ? LightBlue : LightTurnedOff;

	const handleOn = () => {
		setOn(!isOn);
	};

	return <img src={imageSrc} alt='Single light' onClick={handleOn} />;
}
