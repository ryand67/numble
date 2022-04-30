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
		gameState,
		setGameState,
	} = useContext(StateContext);

	const evaluateGuess = (guess: string, answer: string): void => {
		let ansObj = {};

		let ansArr = answer.split('');

		answer.split('').forEach((n: string) => {
			if (ansObj[n]) {
				ansObj[n] = ansObj[n] + 1;
			} else {
				ansObj[n] = 1;
			}
		});

		const resultObj = {
			green: 0,
			yellow: 0,
			black: 0,
		};

		const result = guess.split('').map((n, i) => {
			if (n === ansArr[i]) {
				ansObj[n] = ansObj[n] - 1;
				resultObj.green++;
				return 'bg-green-600';
			} else if (n !== ansArr[i] && ansObj[n]) {
				ansObj[n] = ansObj[n] - 1;
				resultObj.yellow++;
				return 'bg-yellow-300';
			} else {
				resultObj.black++;
				return theme.bgColor;
			}
		});

		setGameState(resultObj.green !== 5);

		setResultHistory([...resultHistory, result]);
	};

	const handleClick = () => {
		switch (typeof value) {
			case 'number':
				if (currentUserGuess.length < 5 && gameState)
					setCurrentUserGuess((p) => (p += value));
				break;
			case 'string':
				switch (value) {
					case 'back':
						setCurrentUserGuess((p) => p.substring(0, p.length - 1));
						break;
					case 'enter':
						if (guessNum < 4 && currentUserGuess.length === 5 && gameState) {
							evaluateGuess(currentUserGuess, secretNumber);
							setGuessHistory([...guessHistory, currentUserGuess]);
							setGuessNum((p) => (p += 1));
							setCurrentUserGuess('');
						} else if (!gameState) {
							alert("game's over");
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
			className={`flex justify-center items-center rounded ${
				theme.buttonColor
			} w-32 h-16 m-4 text-white min-w-[5] max-w-[5] ${
				gameState ? 'cursor-pointer' : ''
			}`}
			onClick={handleClick}
		>
			{value}
		</div>
	);
}

export default Keypad;
