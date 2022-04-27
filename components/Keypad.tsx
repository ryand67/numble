import { useContext, useEffect } from 'react';
import { StateContext } from '../util/context';
import { useErrorMessage } from '../util/hooks/useErrorMessage';

function Keypad({ value }: { value: string | number }) {
	const {
		theme,
		currentUserGuess,
		setCurrentUserGuess,
		guessNum,
		setGuessNum,
		setGuessHistory,
		guessHistory,
	} = useContext(StateContext);

	const handleClick = () => {
		switch (typeof value) {
			case 'number':
				if (currentUserGuess.length < 5)
					setCurrentUserGuess((p) => (p += value));
				break;
			case 'string':
				switch (value) {
					case 'back':
						setCurrentUserGuess((p) => p.substring(0, p.length - 1));
						break;
					case 'enter':
						if (guessNum < 4 && currentUserGuess.length === 5) {
							setGuessHistory([...guessHistory, currentUserGuess]);
							setGuessNum((p) => (p += 1));
							setCurrentUserGuess('');
						} else {
						}
						break;
					default:
						break;
				}
			default:
				break;
		}
	};

	return (
		<div
			className={`flex justify-center items-center rounded ${theme.buttonColor} w-32 h-16 m-4 text-white min-w-[5] max-w-[5] cursor-pointer`}
			onClick={handleClick}
		>
			{value}
		</div>
	);
}

export default Keypad;
