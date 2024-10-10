const testFetching = async (ms: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), ms);
    });
}

export { testFetching };