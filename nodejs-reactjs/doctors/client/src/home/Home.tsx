import React from "react";
import NextAppointmentsPanel from "./panels/NextAppointmentsPanel";
import RecentPatientsPanel from "./panels/RecentPatientsPanel";
import DailyReportPanel from "./panels/DailyReportPanel";

interface Props {}
interface State {}

class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NextAppointmentsPanel />
                    </div>
                    <div className="col">
                        <RecentPatientsPanel />
                    </div>
                </div>

                <DailyReportPanel />
            </div>
        );
    }
}

export default Home;