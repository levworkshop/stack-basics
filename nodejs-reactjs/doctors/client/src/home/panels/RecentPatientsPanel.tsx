import React from "react";
import {Patient, DataFromServer} from "../../patients/Patients";
import PatientCard from "../../patients/PatientCard";

interface Props {
}

interface State {
    patients: Array<Patient>
}

class RecentPatientsPanel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            patients: []
        };
    }

    getRecentPatients = () => {
        fetch('/recent-patients')
            .then(res => res.json())
            .then((jsonRes:DataFromServer) => {
                this.setState({
                    patients: jsonRes.data
                })
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getRecentPatients();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Recent Patients</div>
                <div className="card-body">
                    {
                        this.state.patients.map(patient => {
                            return <PatientCard key={patient.patId} patient={patient} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RecentPatientsPanel;