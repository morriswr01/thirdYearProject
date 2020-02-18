import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    Alert
} from "reactstrap";

// Local components
import InputGroup from "../utils/InputGroup";

import "../../assets/stylesheets/index.scss";

// Actions
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginModal: false,
            loginDetails: {
                email: "",
                password: "",
                generalError: ""
            }
        };
    }

    // When the state of connected store changes check if there are any errors and if the user is now authenticated
    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if (error !== prevProps.error) {
            // Check for login error and populate login modal with error message
            if (error.id === "LOGIN_FAIL") {
                console.log(this.props.error.msg.msg);
                this.setState({
                    loginDetails: {
                        ...this.state.loginDetails,
                        generalError: this.props.error.msg.msg
                    }
                });
            } else {
                this.setState({
                    loginDetails: {
                        ...this.state.loginDetails,
                        generalError: null
                    }
                });
            }
        }
    }

    handleLoginFormChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            ...this.state,
            loginDetails: {
                ...this.state.loginDetails,
                [name]: value
            }
        });
    };

    showLoginModal = () => {
        this.props.clearErrors();
        this.setState({
            showLoginModal: !this.state.showLoginModal,
            loginDetails: {
                email: "",
                password: "",
                generalError: ""
            }
        });
    };

    submitLogin = () => {
        // Check for errors
        const { email, password } = this.state.loginDetails;

        if (!email || !password) {
            console.log("Yo")
            this.setState({
                ...this.state,
                loginDetails: {
                    ...this.state.loginDetails,
                    generalError: "All inputs must be filled to login"
                }
            });
            return;
        }

        this.props.login(this.state.loginDetails);
    };

    render() {
        return (
            <Fragment>
                {/* Login modal */}
                <button
                    className='authBtn loginButton'
                    onClick={this.showLoginModal}
                >
                    Login
                </button>
                <Modal
                    isOpen={this.state.showLoginModal}
                    toggle={this.showLoginModal}
                >
                    <ModalHeader
                        toggle={this.showLoginModal}
                        className='modalHeader'
                    >
                        Login
                    </ModalHeader>
                    <ModalBody>
                        {this.state.loginDetails.generalError ? (
                            <Alert color='danger'>
                                {this.state.loginDetails.generalError}
                            </Alert>
                        ) : (
                            ""
                        )}
                        <Form>
                            <InputGroup
                                type='email'
                                labeltext='Email'
                                name='email'
                                id='emailLogin'
                                onChange={this.handleLoginFormChange}
                            />
                            <InputGroup
                                type='password'
                                labeltext='Password'
                                name='password'
                                id='passwordLogin'
                                autoComplete='off'
                                onChange={this.handleLoginFormChange}
                            />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.submitLogin} color='primary'>
                            Login
                        </Button>{" "}
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
