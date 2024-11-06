const testFetching = async (ms: number) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), ms);
	});
};

export { testFetching };