import "./styles.css"
import React, {useState, useEffect} from "react"
import useStickyState from "./sticky_state"

export default function App(props) {
	const [countries, setCountries, clearCountries] = useStickyState("Countries", [])

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/regionalbloc/nafta")
			.then(res => res.json())
			.then(json => setCountries(json))
		// Clean-up
		return () => setCountries([])
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
