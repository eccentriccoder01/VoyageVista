import React, { useState } from 'react'
import Layout from './Layout';
import deskimg from './../image/desk.png';
import { EMAIL_JS_PUBLIC_API_KEY, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_SERVICE_ID } from "../config.js";
import axios from 'axios';
export default function Contact() {


    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState("")
    const [message, setmessage] = useState("")

    const handelsubmit = async (e) => {
        e.preventDefault();
        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = EMAIL_JS_SERVICE_ID;
        const templateId = EMAIL_JS_TEMPLATE_ID;
        const publicKey = EMAIL_JS_PUBLIC_API_KEY;

        // Create an object with EmailJS service ID, template ID, Public Key, and Template params
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Voyagevista',
                message: message,
                from_contact_number: contact,
            }
        };

        // Send the email using EmailJS
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setname('');
            setemail('');
            setmessage('');
            setcontact('');
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <Layout>
            <div className="container col-10">
                <div className="card my-4">
                    <div className="card-header text-center" style={{ backgroundColor: '#002244' }}>
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
                        {/* method="POST" action="" */}
                        {/* pattern=".{10}"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"//console saying thats are invalid ragular expression
                        pattern=".{1,}" 
                        value="Submit"*/}
                        <form method="POST" action="" onSubmit={handelsubmit}>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label for="name">Full Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Name" value={name} required="true" onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div className="form-group col-6">
                                    <label for="email">Email ID</label>
                                    <input type="email" className="form-control" name="email" placeholder="Email" value={email} required="true" onChange={(e) => setemail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label for="contact">Contact Number</label>
                                    <input type="text" className="form-control" name="contact" value={contact} placeholder="Contact" required="true" onChange={(e) => setcontact(e.target.value)} />
                                </div>
                                <div className="form-group col-6">
                                    <label for="message">Message</label>
                                    <input type="text" className="form-control" name="message" value={message} placeholder="Tell Us Your Issue❕" onChange={(e) => setmessage(e.target.value)} />
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
