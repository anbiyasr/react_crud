import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisterPage extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            age: ''
            },
            submitted: false
        };

    
    handleChange = event => {
        const { name, value } = event.target;
        // this.setState({
        //     user: {
        //         ...user,
        //         [name]: value
        //     }
        // });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.email && user.age) {
            this.props.register(user);
        }
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (this.submitted && !this.user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={this.user.firstName} onChange={this.handleChange} />
                        {this.submitted && !this.user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.submitted && !this.user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={this.user.lastName} onChange={this.handleChange} />
                        {this.submitted && !this.user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.submitted && !this.user.email ? ' has-error' : '')}>
                        <label htmlFor="username">Email</label>
                        <input type="text" className="form-control" name="email" value={this.user.email} onChange={this.handleChange} />
                        {this.submitted && !this.user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.submitted && !this.user.age ? ' has-error' : '')}>
                        <label htmlFor="password">Age</label>
                        <input type="text" className="form-control" name="age" value={this.user.age} onChange={this.handleChange} />
                        {this.submitted && !this.user.age &&
                            <div className="help-block">Age is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default  RegisterPage;