import React from "react";
import styled from "styled-components";

function App() {
	return (
		<Container>
			<h1>App</h1>
		</Container>
	);
}

export default App;

const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;
