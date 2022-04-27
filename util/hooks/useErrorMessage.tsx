import { useState, useEffect } from 'react';

export const useErrorMessage = (msg: string) => {
	const [errorMsg, setErrorMsg] = useState<string>(msg);

	useEffect(() => {
		setTimeout(() => {
			setErrorMsg('');
		}, 3000);
	}, [errorMsg]);

	return [errorMsg, setErrorMsg];
};
