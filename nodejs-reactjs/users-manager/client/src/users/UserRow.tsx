import React from "react";
import {User} from "./UsersManager";

interface Props {
    rowNumber: number;
    user: User;
    deleteUser: Function;
    updateUser: Function;
}

interface State {
    editMode: boolean;
    editedUser: User;
}

class UserRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            editMode: false,
            editedUser: this.props.user
        };
    }

    editMode = (): string => {
        return this.state.editMode ? '' : 'd-none';
    };

    readMode = (): string => {
        return this.state.editMode ? 'd-none' : '';
    };

    openEdit = () => {
        this.setState({
            editMode: true
        });
    };

    openRead = () => {
        this.setState({
            editMode: false
        });
    };

    updateEditedUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target;
        const name = field.name;
        const value = field.value;

        this.setState({
            ...this.state,
            editedUser: {
                ...this.state.editedUser,
                [name]: value
            }
        });
    };

    closeEditAndUpdate = () => {
        this.openRead();
        this.props.updateUser(this.state.editedUser);
    };

    render() {
        const { user, rowNumber, deleteUser } = this.props;

        return (
            <tr>
                <td>{rowNumber}</td>
                <td>
                    <span className={this.readMode()}>{this.state.editedUser.username}</span>
                    <input name="username"
                           value={this.state.editedUser.username}
                           onChange={this.updateEditedUser}
                           className={this.editMode()} />
                </td>
                <td>
                    <span className={this.readMode()}>{this.state.editedUser.email}</span>
                    <input name="email"
                           value={this.state.editedUser.email}
                           onChange={this.updateEditedUser}
                           className={this.editMode()} />
                </td>
                <td>
                    {/*--- pencil button*/}
                    <button onClick={this.openEdit}
                            className={`btn btn-sm btn-secondary mr-2 ${this.readMode()}`}>
                        <i className="fas fa-pencil-alt"/>
                    </button>

                    {/*--- check button*/}
                    <button onClick={this.closeEditAndUpdate}
                            className={`btn btn-sm btn-success mr-2 ${this.editMode()}`}>
                        <i className="fas fa-check" />
                    </button>
                    <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger">
                        <i className="fas fa-trash"/>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserRow;