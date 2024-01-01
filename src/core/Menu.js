import React, { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, withRouter } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { signin, signout, authenticate, isAuthenticated, signup } from "../auth";
import { Redirect } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import avatar from './../image/login/avatar.png';
import './../CSS/signin.css';
import './../CSS/signup.css';
import towerimage from "./../image/signup/bg2.jpeg";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "white" };
    }
};

const Menu = ({ history }) => {
    const [signInValues, setSignInValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const { email, password, loading, error, redirectToReferrer } = signInValues;
    const { user } = isAuthenticated();

    const handleChangeSignIn = name => event => {
        setSignInValues({ ...signInValues, error: "", [name]: event.target.value });
    };

    const clickSubmitSignIn = event => {
        event.preventDefault();
        setSignInValues({ ...signInValues, error: "", loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setSignInValues({ ...signInValues, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setSignInValues({
                        ...signInValues,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const openSignInModal = () => {
        setShowSignInModal(true);
    };

    const closeSignInModal = () => {
        setShowSignInModal(false);
    };

    const showErrorSignIn = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoadingSignIn = () => (
        loading && (
            <LoadingOverlay
                active={loading}
                spinner
                text='Loading......'
                className="loader"
            />
        )
    );

    const redirectUserSignIn = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    const signUpValues = {
        name: '',
        email: '',
        password: '',
        success: false,
        signUpError: '',
    };

    const [values, setValues] = useState(signUpValues);

    const { name, email: signUpEmail, password: signUpPassword, success, signUpError } = values;

    const handleChangeSignUp = name => event => {
        setValues({ ...values, signUpError: false, [name]: event.target.value });
    };

    const clickSubmitSignUp = event => {
        event.preventDefault();
        setValues({ ...values, signUpError: false });
        signup({ name, email: signUpEmail, password: signUpPassword }).then(data => {
            if (data.error) {
                setValues({ ...values, signUpError: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    signUpError: '',
                    success: true
                });
            }
        });
    };

    const openSignUpModal = () => {
        setShowSignUpModal(true);
    };

    const closeSignUpModal = () => {
        setShowSignUpModal(false);
    };

    const showErrorSignUp = () => (
        <div className="alert alert-danger mt-3" style={{ display: signUpError ? '' : 'none' }}>
            {signUpError}
        </div>
    );

    const showSuccessSignUp = () => (
        <div className="alert alert-info mt-3" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <nav className="navbar-expand-md" id="my-nav" style={{ backgroundColor: "#1E3959" }}>
            <Link className="navbar-brand" to="/"><span style={{ color: 'white', fontSize: '30px', fontWeight: 'bold', height: '55px', lineHeight: '55px', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{
                marginTop: '15px',
                padding: '9px 10px',
                backgroundColor: '#3498db',
            }}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#home-popularplace"
                                    title="Book Destinations"
                                >
                                    <i className="fa fa-cart-plus"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Dropdown className="m-0 p-0">
                                    <Dropdown.Toggle  id="dropdown-basic" title="Sign In/Sign Up"><i className="fa fa-sign-in"></i></Dropdown.Toggle>
                                    <Dropdown.Menu style={{background:'#bcb6b6',border:'none',fontSize: '13px'}}>
                                        <Dropdown.Item as ="button" onClick = {openSignInModal}>
                                            <i className="fa fa-sign-in"></i> Log In {redirectUserSignIn()}
                                        </Dropdown.Item>
                                        <Dropdown.Item as ="button" onClick = {openSignUpModal}>
                                            <i className="fa fa-sign-in"></i> Sign Up
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/shop")}
                                to="/Shop"
                                title="Book Destinations"
                            ><i className="fa fa-cart-plus"></i>
                            </Link>
                        </li>
                    )}
                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                                title="My Profile(User)"
                            >
                                <i className="fa fa-user-circle-o"></i>
                            </Link>
                        </li>
                    )}
                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                                title="My Profile(Admin)"
                            >
                                <i className="fa fa-user-circle-o"></i>
                            </Link>
                        </li>
                    )}
                    {isAuthenticated() && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/cart")}
                                to="/cart"
                                title="My Trips"
                            >
                                <i className="fa fa-shopping-cart"></i>{" "}
                                <sup>
                                    <small className="cart-badge">0</small>
                                </sup>
                            </Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <Dropdown className="m-0 p-0">
                            <Dropdown.Toggle id="dropdown-basic" title="More"><i className="fa fa-list"></i></Dropdown.Toggle>
                            <Dropdown.Menu style={{ background: '#bcb6b6', border: 'none', fontSize: '13px' }}>
                                <Dropdown.Item as="button"><Link
                                    className="nav-link text-dark dropdownid"
                                    style={isActive(history, "/about")}
                                    to="/about"
                                >
                                    About Us
                                </Link></Dropdown.Item>
                                <Dropdown.Item as="button"><Link
                                    className="nav-link text-dark dropdownid"
                                    style={isActive(history, "/team")}
                                    to="/team"
                                >
                                    Our Developers
                                </Link></Dropdown.Item>
                                <Dropdown.Item as="button"><Link
                                    className="nav-link text-dark dropdownid"
                                    style={isActive(history, "/contact")}
                                    to="/contact"
                                >   Contact Us
                                </Link></Dropdown.Item>
                                {isAuthenticated() && (
                                    <Dropdown.Item as="button">
                                        <span
                                            className="nav-link text-dark dropdownid"
                                            onClick={() =>
                                                signout(() => {
                                                    history.push("/");
                                                })
                                            }
                                        >
                                            <i className="fa fa-sign-out"></i> Log Out
                                        </span>
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>

            <Modal show={showSignInModal} onHide={closeSignInModal}>
                <Modal.Header closeButton>
                <h5 className="pt-1">Welcome Back❕</h5>
                </Modal.Header>
                <Modal.Body style={{backgroundImage: `url("./image/login/background.jpg")`}}>
                <div className="col-12 px-3 rounded" id="login-intro-form">
                <div className="text-white">
                    <div className="row">
                    <div className="col-6">
                    <form>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChangeSignIn("email")}
                                type="email"
                                className="form-control"
                                value={email}
                                placeholder="E-Mail"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChangeSignIn("password")}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                            />
                        </div>
                    </form>
                    </div>
                    <div className="col-6 text-center">
                    <img className="rounded-circle mx-auto mt-1" src={avatar} alt="" style={{width: "50px"}} />
                    <span className="text-center d-block">New User ?</span>
                    <button onClick={openSignUpModal} className="text-light bg-dark">Sign Up</button>
                    </div>
                    <div className="text-center">
                    </div>
                    </div>
                    </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={clickSubmitSignIn} className="btn btn-light btn-block rounded font-weight-bold text-center">
                        Continue
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSignUpModal} onHide={closeSignUpModal} style={{maxHeight: '400px', backgroundImage: `url('./image/login/background.jpg')`}}>
                <Modal.Header closeButton>
                <h5 className="login-login-title text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light', textAlign: "center" }}>VoyageVista</span></h5>
                </Modal.Header>
                <Modal.Body style={{backgroundImage: `url("./image/login/background.jpg")`}}>
                <div className="row display-flex">
                <div className="col-xs-12 col-sm-6 col-md-5 offset-md-1 rounded-left  my-3" id="signup-form-intro">
                <div id="signup-form-intro2" className="p-3 my-2 rounded">
                <div className="text-white">
                    <div className="row">
                    <div className="col-6">
                    <form>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChangeSignUp("name")}
                                type="text"
                                className="form-control"
                                value={name}
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChangeSignUp("email")}
                                type="email"
                                className="form-control"
                                value={signUpEmail}
                                placeholder="E-Mail"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChangeSignUp("password")}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={signUpPassword}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control"
                                placeholder="Password Again" 
                            />
                        </div>
                    </form>
                    </div>
                    <div className="col-6 text-center">
                    <img className="rounded-circle mx-auto d-block pt-2" src={avatar} alt="" style={{width: "50px"}} />
                    <span className="text-center d-block py-1">Already have an Account ❔</span>
                    <button onClick = {openSignInModal} className="text-light bg-dark">Log In {redirectUserSignIn()}</button>
                    </div>
                    <div className="text-center">
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-5 rounded-right my-3 shadow-lg" id="signup-intro">
                <h2 className="text-white text-center my-3 p-2 h2">Welcome to VoyageVista</h2>
                <p className="text-center text-warning py-2">We Are Happy to see you here. We are working to provide the best services to you.</p>
                <img className="img-fluid rounded" src={towerimage} alt="signup" />
                <div>
                    <p className="text-center text-light py-1">By Signin, you Agree to our terms and Services. </p>
                </div>
                <p className="h5 text-center text-white py-1 my-1 font-weight-bold">Let's Explore the World !!!!</p>

            </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={clickSubmitSignUp} className="btn btn-light btn-block rounded font-weight-bold text-center">
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>

            {showLoadingSignIn()}
            {showErrorSignIn()}
            {showErrorSignUp()}
            {showSuccessSignUp()}
            {redirectUserSignIn()}
        </nav>
    );
};

export default withRouter(Menu);