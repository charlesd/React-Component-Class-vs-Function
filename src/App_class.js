import "./styles.css"
import React from "react"
//import Button from "@material-ui/core/Button"
//import TextField from "@material-ui/core/TextField"

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { countries: [] }
	}

	componentDidMount() {
		fetch("https://restcountries.eu/rest/v2/regionalbloc/nafta")
			.then(res => res.json())
			.then(json => this.setState({ countries: json }))
	}
	componentWillUnmount() {
		this.setState({ countries: [] })
	}

	render() {
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
						{this.state.countries.map(({ name, population }, i) => (
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
}