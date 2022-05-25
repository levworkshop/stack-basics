import React from "react";

interface Props {
    addPatient: Function;
}

interface State {
    first: string;
    last: string;
    phone: string;
    email: string;
    gender: string;
}

class NewPatient extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            phone: '',
            email: '',
            gender: '',
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target;
        this.setState({
            ...this.state,
            [field.name]: field.value
        });
    };
    //
    // addPatient = () => {
    //     fetch('/patients', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(this.state)
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 this.ref
    //             }
    //         })
    // }

    render() {
        return (
            <div className="mb-5">
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" name="first" value={this.state.first} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" name="last" value={this.state.last} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div onChange={this.handleChange}>
                    <label>Gender:</label>
                    <span>
                        <input type="radio" name="gender" value="F"/>
                        <label>Female</label>
                    </span>
                    <span>
                        <input type="radio" name="gender" value="M"/>
                        <label>Male</label>
                    </span>
                </div>
                <div>
                    <button onClick={() => this.props.addPatient(this.state)} className="btn btn-primary">Add Patient</button>
                </div>
            </div>
        );
    }
}

export default NewPatient;