import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';
import './App.css';

import InfoBox from './components/InfoBox/InfoBox.jsx';
import Map from './components/Map/Map.jsx';
import Table from './components/Table/Table.jsx';
import { sortData, prettyPrintStat } from './util';
import LineGraph from './components/LineGraph/LineGraph';
import 'leaflet/dist/leaflet.css';

function App() {
	const [ countries, setCountries ] = useState([]);
	const [ country, setCountry ] = useState('worlwide');
	const [ countryInfo, setCountryInfo ] = useState('');
	const [ tableData, setTableData ] = useState([]);
	const [ mapCenter, setMapCenter ] = useState({ lat: 34.80746, lng: -40.4796 });
	const [ mapZoom, setMapZoom ] = useState(2);
	const [ mapCountries, setMapCountries ] = useState([]);
	const [ casesType, setCasesType ] = useState('cases');

	useEffect(() => {
		(async () => {
			const response = await fetch('https://disease.sh/v3/covid-19/all');
			const json = await response.json();
			setCountryInfo(json);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
			const json = await response.json();

			const countries = json.map((country) => ({
				name: country.country,
				value: country.countryInfo.iso2
			}));

			const sortedData = sortData(json);

			setTableData(sortedData);
			setCountries(countries);
			setMapCountries(json);
		})();
	}, []);

	const handleCountryChange = async (e) => {
		const countryCode = e.target.value;

		const url =
			countryCode === 'worldwide'
				? `https://disease.sh/v3/covid-19/all`
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`;

		const response = await fetch(url);
		const json = await response.json();

		setCountry(countryCode);
		setCountryInfo(json);

		setMapCenter([ json.countryInfo.lat, json.countryInfo.long ]);
		setMapZoom(6);
	};

	return (
		<div className="app">
			<div className="app__left">
				<div className="app__header">
					<h1>COVID-19 TRACKER</h1>
					<FormControl className="app__dropdown">
						<Select variant="outlined" value={country} onChange={handleCountryChange}>
							<MenuItem key="default" value="worlwide">
								Worldwide
							</MenuItem>
							{countries.map((country, index) => (
								<MenuItem key={index} value={country.value}>
									{country.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div className="app__stats">
					<InfoBox
						isRed
						active={casesType === 'cases'}
						onClick={() => setCasesType('cases')}
						title={'Corona Virus Cases'}
						cases={prettyPrintStat(countryInfo.todayCases)}
						total={prettyPrintStat(countryInfo.cases)}
					/>
					<InfoBox
						active={casesType === 'recovered'}
						onClick={() => setCasesType('recovered')}
						title={'Recovered'}
						cases={prettyPrintStat(countryInfo.todayRecovered)}
						total={prettyPrintStat(countryInfo.recovered)}
					/>
					<InfoBox
						isRed
						active={casesType === 'deaths'}
						onClick={() => setCasesType('deaths')}
						title={'Deaths'}
						cases={prettyPrintStat(countryInfo.todayDeaths)}
						total={prettyPrintStat(countryInfo.deaths)}
					/>
				</div>

				<Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
			</div>

			<Card className="app__right">
				<CardContent>
					<h3>Live Cases by Country</h3>
					<Table countries={tableData} />
					<h3>Worldwide new {casesType}</h3>
					<LineGraph casesType={casesType} />
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
