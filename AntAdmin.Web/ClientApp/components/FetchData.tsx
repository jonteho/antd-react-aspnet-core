import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Table } from 'antd';

interface FetchDataExampleState {
    forecasts: WeatherForecast[];
    loading: boolean;
    selectedRowKeys: any[]
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor(props: any) {
        super(props);
        this.state = { forecasts: [], loading: true, selectedRowKeys: [] };

        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderForecastsTable(this.state, this.state.forecasts);

        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            { contents }
        </div>;
    }

    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    onSelection = () => {
        console.log('onSelection: ');
    }

    private renderForecastsTable(state: FetchDataExampleState, forecasts: WeatherForecast[]) {
        const columns = [{
            title: 'Date',
            dataIndex: 'dateFormatted',
          }, {
            title: 'Temp. (C)',
            dataIndex: 'temperatureC',
          }, {
            title: 'Temp. (F)',
            dataIndex: 'temperatureF',
          }, {
            title: 'Summary',
            dataIndex: 'summary',
        }];
        const { selectedRowKeys } = state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            onSelection: this.onSelection
        };
        return <Table rowSelection={rowSelection} loading={state.loading} columns={columns} dataSource={forecasts} />; 
            
        // <table className='table'>
        //     <thead>
        //         <tr>
        //             <th>Date</th>
        //             <th>Temp. (C)</th>
        //             <th>Temp. (F)</th>
        //             <th>Summary</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //     {forecasts.map(forecast =>
        //         <tr key={ forecast.dateFormatted }>
        //             <td>{ forecast.dateFormatted }</td>
        //             <td>{ forecast.temperatureC }</td>
        //             <td>{ forecast.temperatureF }</td>
        //             <td>{ forecast.summary }</td>
        //         </tr>
        //     )}
        //     </tbody>
        // </table>;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}










// import * as React from 'react';
// import { RouteComponentProps } from 'react-router';
// import 'isomorphic-fetch';


// interface FetchDataExampleState {
//     forecasts: WeatherForecast[];
//     loading: boolean;
// }

// export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
//     constructor(props: any) {
//         super(props);
//         this.state = { forecasts: [], loading: true };

//         fetch('api/SampleData/WeatherForecasts')
//             .then(response => response.json() as Promise<WeatherForecast[]>)
//             .then(data => {
//                 this.setState({ forecasts: data, loading: false });
//             });
//     }

//     public render() {
//         let contents = this.state.loading
//             ? <p><em>Loading...</em></p>
//             : FetchData.renderForecastsTable(this.state.forecasts);

//         return <div>
//             <h1>Weather forecast</h1>
//             <p>This component demonstrates fetching data from the server.</p>
//             { contents }
//         </div>;
//     }

//     private static renderForecastsTable(forecasts: WeatherForecast[]) {
//         return <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Temp. (C)</th>
//                     <th>Temp. (F)</th>
//                     <th>Summary</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {forecasts.map(forecast =>
//                 <tr key={ forecast.dateFormatted }>
//                     <td>{ forecast.dateFormatted }</td>
//                     <td>{ forecast.temperatureC }</td>
//                     <td>{ forecast.temperatureF }</td>
//                     <td>{ forecast.summary }</td>
//                 </tr>
//             )}
//             </tbody>
//         </table>;
//     }
// }

// interface WeatherForecast {
//     dateFormatted: string;
//     temperatureC: number;
//     temperatureF: number;
//     summary: string;
// }
