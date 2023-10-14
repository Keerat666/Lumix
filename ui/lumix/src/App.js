import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
	//this function is passed as a prop to the Button component
	const handleOnClick = () => {
		alert("Handle onClick is called");
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" rel="noopener noreferrer">
					Let's Build Lumix
				</a>
				<Button
					name={"Click me"} //can change the button name
					handleOnClick={handleOnClick}
				/>
			</header>
		</div>
	);
}

export default App;
