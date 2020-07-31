import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { buildChartData } from '../../util';
import numeral from 'numeral';

const options = {
	legend: {
		display: false
	},
	elements: {
		point: {
			radius: 0
		}
	},
	mantainAspectRatio: false,
	tooltips: {
		mode: 'index',
		intersect: false,
		callbacks: {
			label: function(tooltipItem, data) {
				return numeral(tooltipItem.value).format('+0,0');
			}
		}
	},
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					format: 'MM/DD/YY',
					tooltipFormat: 'll'
				}
			}
		],
		yAxes: [
			{
				gridLines: {
					display: false
				},
				ticks: {
					callback: function(value, index, values) {
						return numeral(value).format('0a');
					}
				}
			}
		]
	}
};
const LineGraph = ({ casesType }) => {
	// https://disease.sh/v3/covid-19/historical/all?lastdays=120

	const [ data, setData ] = useState({});

	useEffect(() => {
		(async () => {
			const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120');
			const json = await response.json();

			const chartData = buildChartData(json, casesType);
			setData(chartData);
		})();
	}, [casesType]);

	return (
        <div className="linegraph">
        {data?.length > 0 && 
            <Line
				data={{
					datasets: [
						{
							data: data,
							backgroundColor: 'rgba(204, 16, 52, 0.5',
							borderColor: '#CC1034'
						}
					]
				}}
				options={options}
			/>
        }
		</div>	
	);
};

export default LineGraph;
