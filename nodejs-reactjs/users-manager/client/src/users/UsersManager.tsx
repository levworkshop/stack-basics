import React from 'react';
import UserRow from "./UserRow";

export interface User {
    id: number;
    username: string;
    email: string;
}
interface DataFromServer {
    status: string;
    data: Array<User>;
}
interface State {
    users: Array<User>;
    username: string;
    email: string;
}

class UsersManager extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [],
            username: '',
            email: ''
        };
    }

    refreshList = () => {
        fetch('/users/list')
            .then(res => res.json())
            .then((jsonRes:DataFromServer) => {
                this.setState({
                    users: jsonRes.data
                });
            })
            .catch(error => console.log(error));
    };

    componentDidMount () {
        this.refreshList();
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        this.setState({
            ...this.state,
            [fieldName]: event.target.value
        })
    };

    addUser = () => {
        fetch('/users/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email
            })
        })
        .then(res => {
            if (res.ok) {
                this.refreshList();
            }
        })
        .catch(error => console.log(error));
    };

    deleteUser = (userId: number) => {
        fetch('/users/user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId
            })
        })
        .then(res => {
            if (res.ok) {
                this.refreshList();
            }
        })
        .catch(error => console.log(error));
    };

    updateUser = (user: User) => {
        fetch('/users/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.id,
                username: user.username,
                email: user.email,
            })
        })
        .then(res => {
            if (res.ok) {
                this.refreshList();
            }
        })
        .catch(error => console.log(error));
    };


    render() {
        return (
            <div className="m-4">
                <h1>Users Manager</h1>

                <div className="my-4">
                    <input value={this.state.username}
                           onChange={(e) => this.handleInputChange(e, 'username')}
                           placeholder="username"
                           className="mr-2" />

                    <input value={this.state.email}
                           onChange={(e) => this.handleInputChange(e, 'email')}
                           placeholder="your@email.com"
                           className="mr-2" />

                    <button onClick={this.addUser}>Add</button>
                </div>

                <table className="table">
                    <thead>
                    <tr>
                        <th style={{width:80}}>#</th>
                        <th>User Name</th>
                        <th style={{width:200}}>Email</th>
                        <th style={{width:150}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((user, index) =>
                            <UserRow key={user.id}
                                     rowNumber={index+1}
                                     user={user}
                                     deleteUser={this.deleteUser}
                                     updateUser={this.updateUser} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UsersManager;