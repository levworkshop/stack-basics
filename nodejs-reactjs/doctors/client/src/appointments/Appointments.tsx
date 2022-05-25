import React from "react";

interface Appointment {
    apId?: number;
    scheduleDate: string;
    description: string;
    patId?: number;
}
interface Props {}
interface State {
    appointments: Array<Appointment>;
}

class Appointments extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            appointments: []
        };
    }

    render() {
        return (
            <div>
                <h1>My Appointments</h1>
                {
                    this.state.appointments.length === 0 &&
                        <p>You don't have any appointments.</p>
                }
            </div>
        );
    }
}

export default Appointments;