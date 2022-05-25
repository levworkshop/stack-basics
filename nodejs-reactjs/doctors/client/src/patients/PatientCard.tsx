import React from "react";
import {Patient} from "./Patients";

interface Props {
    patient: Patient;
}

interface State {
}

class PatientCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const patient = this.props.patient;

        return (
            <div className="card card-body mb-3">
                <h5 className="card-title">
                    {patient.first} {patient.last}
                </h5>
                <p>recent visit: ...</p>
                <p>{patient.phone}</p>
            </div>
        );
    }
}

export default PatientCard;