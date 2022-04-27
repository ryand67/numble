import type { NextPage } from 'next';
import { useState, useMemo, useEffect } from 'react';
import { StateContext } from '../util/context';
import Head from 'next/head';
import Row from '../components/Row';
import Keyboard from '../components/Keyboard';
import { ThemeObj } from '../util/types/globalTypes';

const Home: NextPage = () => {
	const [secretNumber, setSecretNumber] = useState<string>();
	const [theme, setTheme] = useState<ThemeObj>({
		fontColor: 'text-white',
		bgColor: 'bg-zinc-900',
		borderColor: 'border-white',
		buttonColor: 'bg-zinc-600',
	});
	const [guessNum, setGuessNum] = useState<number>(0);
	const [currentUserGuess, setCurrentUserGuess] = useState<string[]>();

	const processNum = (n: number): string => {
		let res: string = `${n.toString()}`;
		for (let i = 0; i < 5 - n.toString().length; i++) {
			res = `0${res}`;
		}
		return res;
	};

	useEffect(() => {
		const result = processNum(Math.floor(Math.random() * 100_000) + 1);
		setSecretNumber(result);
	}, []);

	const contextValues = useMemo((): object => {
		return {
			secretNumber,
			theme,
			guessNum,
			currentUserGuess,
		};
	}, [secretNumber, theme, guessNum, currentUserGuess]);

	return (
		<>
			<Head>
				<title>Numberle</title>
			</Head>
			<StateContext.Provider value={contextValues}>
				<div
					className={`${theme.bgColor} flex flex-col justify-items-center items-center w-full h-screen`}
				>
					<h1 className={`${theme.fontColor} text-5xl pt-5`}>
						Numble {secretNumber}
					</h1>
					<div className={`flex flex-col my-8`}>
						{Array.from(Array(5).keys()).map((n: number): JSX.Element => {
							return <Row key={`row-${n}`} num={n} />;
						})}
					</div>
					<Keyboard />
				</div>
			</StateContext.Provider>
		</>
	);
};

export default Home;
