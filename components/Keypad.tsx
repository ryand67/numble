import { useContext } from 'react';
import { StateContext } from '../util/context';

function Keypad({ value }: { value: string | number }) {
	const { theme } = useContext(StateContext);

	return (
		<div
			className={`flex justify-center items-center rounded ${theme.buttonColor} w-32 h-16 m-4 text-white min-w-[5] max-w-[5]`}
		>
			{value}
		</div>
	);
}

export default Keypad;
