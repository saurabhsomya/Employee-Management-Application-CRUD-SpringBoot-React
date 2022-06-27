import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {EmployeesList} from './Components/EmployeesList'
import {EmployeesAdd} from './Components/EmployeesAdd'
import {Header} from './Components/Header';
import { Footer } from "./Components/Footer";

export const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<EmployeesList />}></Route>
					<Route path="/employees" element={<EmployeesList />}></Route>
					<Route path="/add-employees" element={<EmployeesAdd />}></Route>
					<Route path="/edit-employees/:id" element={<EmployeesAdd />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
};


