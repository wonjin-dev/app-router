const host = 'http://localhost:3000';
const initialFetch = async () => {
	const res = await fetch(`${host}/api`);
	return res.json();
};

const Container = async () => {
	const { data } = await initialFetch();

	return (
		<main>
			<h1>Hello, {data.name}</h1>
		</main>
	);
};

export default Container;
