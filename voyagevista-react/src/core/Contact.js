import React from 'react'
import Layout from './Layout';
import deskimg from './../image/desk.png'
export default function Contact() {
    return (
        <Layout>
            <div className="container col-10">
                <div className="card my-4">
                    <div className="card-header text-center" style = {{backgroundColor : '#002244'}}>
                        <h3 className="text-center font-weight-bold text-white pb-3"><i className="fa fa-envelope text-center text-white" aria-hidden="true"></i> Contact Us : 24/7 Live Support</h3>
                        <div className="row">
                        <div className="col-8">
                            <p className="text-justify m-3 text-white"><span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span> doesn't just represent a travel website; it embodies the unison of globetrotters and seasoned travel maestros on a single digital stage. We've crafted a virtual haven where adventurers and travel connoisseurs converge. It's more than a travel marketplace; it's a journey reimagined.</p>
                        </div> 
                        <div className="col-4">  
                            <img src={deskimg} className="img-thumbnail" alt="" />
                            </div> 
                        </div>
                        <div className="row">
                        <div className="col-12">  
                        <p className="text-justify m-3 text-white"><span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span> is dedicated to ensuring your travel experience is as smooth as possible. That's why we offer around-the-clock, 24/7 customer support. Whenever you need assistance, whether it's day or night, our team is here to help. Your journey is important to us, and we're just a message or call away to address your inquiries, solve issues, and make your travels truly unforgettable.                </p>
                        </div>
                        </div>                  
                    </div>
                    <div className="card body my-4 px-3">
                        <h4 className="p-2 text-center my-2 text-dark">Kindly Fill In</h4>
                        <form method="POST" action="">
                            <div className="form-row">
                            <div className="form-group col-6">
                                <label for="name">Full Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Name" required="true" pattern=".{1,}" />
                                </div>
                                <div className="form-group col-6">
                                <label for="email">Email ID</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label for="contact">Contact Number</label>
                                    <input type="text" className="form-control" name="contact" placeholder="Contact" required="true" pattern=".{10}" />
                                </div>
                                <div className="form-group col-6">
                                    <label for="message">Message</label>
                                    <input type="text" className="form-control" name="message" placeholder="Tell Us Your Issue❕" />
                                </div>
                            </div>
                            <div>
                            <button className="btn text-white mt-2" type="submit" value="Submit" name="button" style={{ backgroundColor: '#13274F' }}>Submit</button>
                            </div>
                        </form>
                    </div>
        </div>
        </div>
    </Layout>
    )
}
