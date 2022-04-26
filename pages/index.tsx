import type { NextPage } from 'next';
import { useState, useMemo, useEffect } from 'react';
import { StateContext } from '../util/context';
import Head from 'next/head';

const Home: NextPage = () => {
	const [secretNumber, setSecretNumber] = useState<string>();

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

	const contextValues = useMemo(() => {
		return {
			secretNumber,
		};
	}, [secretNumber]);

	return (
		<>
			<Head>
				<title>Numberle</title>
			</Head>
			<StateContext.Provider value={contextValues}>
				<div className="bg-black flex flex-col justify-items-center items-center w-full h-screen">
					<h1 className="text-white text-5xl pt-5">Numberle {secretNumber}</h1>
				</div>
			</StateContext.Provider>
		</>
	);
};

export default Home;
