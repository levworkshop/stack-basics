import React from "react";

interface Props {
}

interface State {
}

class NextAppointmentsPanel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Next Appointments</div>
                <div className="card-body">
                    list...
                </div>
            </div>
        );
    }
}

export default NextAppointmentsPanel;