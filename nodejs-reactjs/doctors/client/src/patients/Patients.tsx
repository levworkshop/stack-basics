import React from "react";
import PatientCard from "./PatientCard";
import NewPatient from "./NewPatient";

export interface Patient {
    patId?: number;
    first: string;
    last: string;
    phone: string;
    email: string;
    gender: string;
}
export interface DataFromServer {
    status: string;
    data: Array<Patient>;
}
interface Props {}
interface State {
    patients: Array<Patient>
}

class Patients extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            patients: []
        };
    }

    refreshPatients = () => {
        fetch('/patients')
            .then(res => res.json())
            .then((jsonRes:DataFromServer) => {
                this.setState({
                    patients: jsonRes.data
                })
            })
            .catch(error => console.log(error));
    };

    componentDidMount(): void {
        this.refreshPatients();
    }

    addPatient = (patient:Patient) => {
        fetch('/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
        .then(res => {
            if (res.ok) {
                this.refreshPatients();
            }
        })
        .catch(error => console.log(error));
    };

    render() {

        return (
            <div>
                <h1>My Patients</h1>
                <NewPatient addPatient={this.addPatient} />
                {
                    this.state.patients.map(patient => {
                        return <PatientCard key={patient.patId} patient={patient} />
                    })
                }
            </div>
        );
    }
}

export default Patients;