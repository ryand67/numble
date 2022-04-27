import React from 'react';
import Keypad from './Keypad';

function Keyboard() {
	return (
		<div
			className={`flex flex-col justify-center items-center h-1/3 w-3/4 sm:w-1/2 lg:w-1/3`}
		>
			<div className={`flex flex-row items-stretch justify-around w-full`}>
				<Keypad value={1} />
				<Keypad value={2} />
				<Keypad value={3} />
			</div>
			<div className={`flex flex-row items-stretch justify-around w-full`}>
				<Keypad value={4} />
				<Keypad value={5} />
				<Keypad value={6} />
			</div>
			<div className={`flex flex-row items-stretch justify-around w-full`}>
				<Keypad value={7} />
				<Keypad value={8} />
				<Keypad value={9} />
			</div>
			<div className={`flex flex-row items-stretch justify-around w-full`}>
				<Keypad value={'back'} />
				<Keypad value={0} />
				<Keypad value={'enter'} />
			</div>
		</div>
	);
}

export default Keyboard;
