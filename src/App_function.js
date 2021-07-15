import "./styles.css"
import React, {useState, useEffect} from "react"

export default function App(props) {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/regionalbloc/nafta")
			.then(res => res.json())
			.then(json => setCountries(json))
	}, [])

	return (
		<div className="App">
			<table>
				<thead>
					<tr>
						<th>Country</th>
						<th>Population</th>
					</tr>
				</thead>
				<tbody>
					{countries.map(({ name, population }, i) => (
						<tr key={i}>
							<td>{name}</td>
							<td>{population}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
