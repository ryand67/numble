import { useContext, useEffect } from 'react';
import { StateContext } from '../util/context';

function Row({ num: rowNum, results }): JSX.Element {
	const { theme, currentUserGuess, guessNum, guessHistory } =
		useContext(StateContext);

	useEffect(() => {
		console.log('here', results);
	}, [results]);

	return (
		<>
			<div
				className={`w-1/3 h-1/3 flex flex-row items-center justify-items-center`}
			>
				{Array.from(Array(5).keys()).map((n: number) => {
					return (
						<div
							key={`${n}-row-${rowNum}`}
							className={`flex justify-items-center items-center w-1/5 h-8 p-8 m-2 border ${
								theme.fontColor
							} ${theme.borderColor} ${results ? results[n] : ''}`}
						>
							<h1 className="text-xl w-0 h-0">
								{guessNum === rowNum ? currentUserGuess[n] : ''}
								{guessHistory[rowNum] ? guessHistory[rowNum][n] : ''}
							</h1>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Row;
