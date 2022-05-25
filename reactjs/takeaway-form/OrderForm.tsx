import React from 'react';
interface Props {}

interface ExtraItems {
    bread: boolean;
    soda: boolean;
    sauce: boolean;
}

interface State {
    name: string;
    phone: string;
    dish: string;
    extra: ExtraItems;
    comment: string;
    errorMsg: string;
}

class OrderForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            dish: '',
            extra: {
                bread: false,
                soda: false,
                sauce: false
            },
            comment: '',
            errorMsg: ''
        };
    }

    dishList: Array<string> = ['Tuna Salad', 'Pasta', 'Sandwich'];

    handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
        const field = e.target;
        const value = field.value;
        const name = field.name;
        let error = '';

        if ((name === 'name' || name === 'phone') && value === '') {
            error = 'Name and Phone are required';
        }
        // if ((name === 'phone') && value === '') {
        //     error = 'Phone is required';
        // }

        this.setState({
            ...this.state,
            errorMsg: error,
            [name]: value,
        });
    };

    handleExtraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target;
        const value = field.checked;
        const name = field.name;

        this.setState({
            ...this.state,
            extra: {
                ...this.state.extra,
                [name]: value,
            }
        });
    };

    handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        console.log('A new order has been submitted: ', this.state);
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name *:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleChange} />
                </div>

                <div>
                    <label>Phone *:</label>
                    <input type="text"
                           name="phone"
                           placeholder="050-0000000"
                           value={this.state.phone}
                           onChange={this.handleChange} />
                </div>

                <div>
                    <label>Select dish:</label>
                    <select name="dish"
                            value={this.state.dish}
                            onChange={this.handleChange}>
                        {
                            this.dishList.map((dish: string, index) => {
                                return <option value={dish} key={index}>{dish}</option>
                            })
                        }
                    </select>
                </div>

                <div>
                    <label>Extra:</label>
                    <span>
                        <input type="checkbox"
                               name="bread"
                               checked={this.state.extra.bread}
                               onChange={this.handleExtraChange} />
                        <label>Bread</label>
                    </span>

                    <span>
                        <input type="checkbox"
                               name="soda"
                               checked={this.state.extra.soda}
                               onChange={this.handleExtraChange} />
                        <label>Soda</label>
                    </span>

                    <span>
                        <input type="checkbox"
                               name="sauce"
                               checked={this.state.extra.sauce}
                               onChange={this.handleExtraChange} />
                        <label>Spicy Sauce</label>
                    </span>
                </div>

                <div>
                    <label>Comment:</label>
                    <textarea name="comment"
                              value={this.state.comment}
                              onChange={this.handleChange} />
                </div>

                {
                    this.state.errorMsg.length > 0 &&
                    <div className="text-danger">{this.state.errorMsg}</div>
                }


                <button type="submit">Order Now</button>

            </form>
        );
    }
}

export default OrderForm;
