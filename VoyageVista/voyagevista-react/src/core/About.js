/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Layout from './Layout';
import aboutimg from './../image/about.png';
import { Link, } from "react-router-dom";

export default function about() {
    return (
    <Layout>
        <div className="container-fluid">
            <div className="row mt-4 mb-2">
                <div className="col-12">
                <div className="border rounded shadow">
  <div className="card m-2">
    <h5 className="m-0 text-dark font-weight-bold card-header bg-light"><i className="fa fa-train" aria-hidden="true"></i> We Are <span style={{ fontWeight: "bold", fontFamily: "Copperplate Gothic Light" }}>VoyageVista</span></h5>
    <img src={aboutimg} className="img-thumbnail" alt="" />
    <div className="row m-0 p-0">
      <div className="col-6 text-justify p-3" style={{ fontFamily: 'Bahnschrift Light' }}>
        <p>Introducing <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>, a globally recognised travel website meticulously developed by <a href="https://www.linkedin.com/in/sagnik-chakraborty-9aa473248" className="text-primary"><b>Eccentric Explorer</b></a>. With a commitment to shape the future of travel experiences, <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span> embarked on its journey as a small-scale initiative, driven by boundless aspirations.</p>
        <p><span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>'s vision extends far beyond the horizon. Our mission is to curate enriching travel packages, a commitment we will ardently fulfill in the years to come. We understand that the world speaks myriad languages, and <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span> is dedicated to offering multilingual support tailored to various regions and cultures, transcending borders and connecting travellers worldwide</p>
        <p>Unlike traditional travel platforms that often impose hefty international fees, <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>'s pledge is simple and noble. We vow to facilitate your journeys, enabling seamless bookings that are truly international, without the weight of extra charges. Our global presence will soon extend to multiple countries, fostering a worldwide network that revolves around you, our cherished traveller.</p>
      </div>
      <div className="col-6 text-justify p-3" style={{ fontFamily: 'Bahnschrift Light' }}>
        <p>When you entrust your travels to <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>, you're not just a guest; you're family. We are committed to sourcing the finest accommodations, from luxurious hotels to cozy motels, ensuring unparalleled quality and service that exceeds your expectations. Your interests shape our offerings, and our personalised approach ensures your unique travel needs are met with the utmost care and attention.</p>
        <p><span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>, where every journey is an odyssey, and every traveller is a cherished friend. Welcome to the future of global travel experiences❕</p>
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-dark font-weight-bold card-header bg-light"><i class="fa fa-history" aria-hidden="true"></i>  OUR JOURNEY</h5>
                            <div class="card-body m-0 p-0 mt-2">
                              <div className='p-3 font-weight-bold text-dark'><i class="fa fa-clock-o" aria-hidden="true"></i> October 2023</div>
                              <p className="text-justify p-3"><span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span> was developed by Sagnik Chakraborty(aka <Link to="./team" className="text-primary"><b>Eccentric Explorer</b></Link>). The motivation behind this endeavour is rooted in the fact that many travel websites levy international charges on certain bookings when travellers choose to go abroad. Our primary goal is to offer fee-free international bookings worldwide, ensuring our customers don't spend a single extra penny. We are committed to establishing branches in various countries and tailoring our services to meet the unique preferences and needs of our users. Our focus is on partnering with top-notch hotels, motels, and lodges to guarantee high-quality services for our valued customers.</p>                            </div>
                              <li className="list-group-item h6 font-weight-bold text-center"><Link to="./team" className="text-dark">
                                    <i class="fa fa-link" aria-hidden="true"></i> 
                                     &nbsp;&nbsp; Our Developers</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}
