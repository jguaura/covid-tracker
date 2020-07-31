import React from 'react';
import './Table.css';
import numeral from 'numeral';

const Table = ({ countries }) => {
	return (
		<div className="table">
			{countries.map(({ country, cases, index }) => (
				<tr key={`${country}${cases}`}>
					<td key={`${country}`}>{country}</td>
					<td key={`${cases}`}>
						<strong>{numeral(cases).format('0.0a')}</strong>
					</td>
				</tr>
			))}
		</div>
	);
};

export default Table;
