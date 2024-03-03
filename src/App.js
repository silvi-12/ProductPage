import Header from "./components/Header";
import { Cards } from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemInfo from "./components/itemInfo";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header /> <Cards />
							</>
						}
					/>
					<Route exact path="/cart" element={<ItemInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
