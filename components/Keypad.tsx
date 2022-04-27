import { useContext, useEffect } from 'react';
import { StateContext } from '../util/context';
import { useErrorMessage } from '../util/hooks/useErrorMessage';

function Keypad({ value }: { value: string | number }) {
	const {
		theme,
		secretNumber,
		currentUserGuess,
		setCurrentUserGuess,
		guessNum,
		setGuessNum,
		setGuessHistory,
		guessHistory,
		resultHistory,
		setResultHistory,
	} = useContext(StateContext);

	const evaluateGuess = (guess: string, answer: string): void => {
		let ans = answer.split('');
		const result = guess.split('').map((n, i) => {
			if (n === ans[i]) {
				return 'bg-green-600';
			} else if (n !== ans[i] && ans.includes(n)) {
				return 'bg-yellow-600';
			} else {
				return theme.bgColor;
			}
		});

		setResultHistory([...resultHistory, result]);
	};

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
							evaluateGuess(currentUserGuess, secretNumber);
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
