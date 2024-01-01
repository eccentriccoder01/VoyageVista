import React, { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, withRouter } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { signin, signout, authenticate, isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import avatar from './../image/login/avatar.png';
import './../CSS/signin.css';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "white" };
    }
};

const Menu = ({ history }) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const [showModal, setShowModal] = useState(false);

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: "", [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const openSignInModal = () => {
        setShowModal(true);
    };

    const closeSignInModal = () => {
        setShowModal(false);
    };

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () => (
        loading && (
            <LoadingOverlay
                active={loading}
                spinner
                text='Loading......'
                className="loader"
            />
        )
    );

    const redirectUser = () => {
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
                                    <i className="fa fa-sign-in"></i> Log In {redirectUser()}
                                    </Dropdown.Item>
                                    <Dropdown.Item as ="button"><Link
                                            className="nav-link"
                                            style={isActive(history, "/signup")}
                                            to="/signup"
                                        >   
                                        </Link>
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

            <Modal show={showModal} onHide={closeSignInModal} style={{maxHeight: '400px', backgroundImage: `url('./image/login/background.jpg')`}}>
                <Modal.Header closeButton>
                <h5 className="login-login-title text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light', textAlign: "center" }}>VoyageVista</span></h5>
                </Modal.Header>
                <Modal.Body style={{backgroundImage: `url("./image/login/background.jpg")`}}>
                <div className="col-12 px-3 rounded-left" id="login-intro-form">
                <div className="text-white">
                    <div className="row">
                    <div className="col-6">
                    <form>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChange("email")}
                                type="email"
                                className="form-control"
                                value={email}
                                placeholder="E-Mail"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                onChange={handleChange("password")}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                            />
                        </div>
                    </form>
                    </div>
                    <div className="col-6 text-center">
                    <img className="rounded-circle mx-auto d-block pt-2" src={avatar} alt="" style={{width: "50px"}} />
                    <span className="text-center d-block">New User ?</span>
                    <Link to="/signup" className="text-white"><u>Sign Up Here</u></Link>
                    </div>
                    <div className="text-center">
                    </div>
                    </div>
                    </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={clickSubmit} className="btn btn-light btn-block rounded font-weight-bold text-center">
                        Continue
                    </button>
                </Modal.Footer>
            </Modal>
            {showLoading()}
            {showError()}
            {redirectUser()}
        </nav>
    );
};

export default withRouter(Menu);