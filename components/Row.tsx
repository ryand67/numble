import { useContext } from 'react';
import { StateContext } from '../util/context';

function Row({ num }): JSX.Element {
	const { theme } = useContext(StateContext);

	return (
		<>
			<div
				className={`w-1/3 h-1/3 flex flex-row items-center justify-items-center`}
			>
				{Array.from(Array(5).keys()).map((n: number) => {
					return (
						<div
							key={`${n}-row-${num}`}
							className={`w-1/5 p-8 m-2 border ${theme.borderColor}`}
						>
							<h1></h1>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Row;
