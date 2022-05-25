import React from "react";
import {DataFromServer} from "../../patients/Patients";

interface Props {
}

interface State {
    todaysAppointments: number;
    todaysPatients: number;
    totalIncome: number;
    selectedCurrency: string;
    currencies?: Array<string>;
}

class DailyReportPanel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todaysAppointments: 0,
            todaysPatients: 0,
            totalIncome: 0,
            selectedCurrency: '$',
            currencies: ['$', 'ILS']
        }
    }

    getTodaysPatients = () => {
        fetch('/todays-patients')
            .then(res => res.json())
            .then((jsonRes:DataFromServer) => {
                this.setState({
                    ...this.state,
                    todaysPatients: +jsonRes.data
                })
            })
            .catch(error => console.log(error));
    };

    getTodaysAppointments = () => {
        fetch('/todays-appointments')
            .then(res => res.json())
            .then((jsonRes:DataFromServer) => {
                this.setState({
                    ...this.state,
                    todaysAppointments: +jsonRes.data
                })
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getTodaysPatients();
        this.getTodaysAppointments();
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">My Daily Report</div>
                <div className="card-body">
                    <ul>
                        <li>Appointments today: {this.state.todaysAppointments}</li>
                        <li>New patients today: {this.state.todaysPatients}</li>
                        <li>
                            Total daily income: {this.state.selectedCurrency}
                            {this.state.totalIncome}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DailyReportPanel;