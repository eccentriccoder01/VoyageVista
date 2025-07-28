import React from 'react'
import Layout from './Layout';
import Sagnik from './../image/team/Sagnik.jpg';
import Souhardya from './../image/team/Souhardya.jpg';
import SagnikBG from './../image/team/SagnikBG.jpg';
import SouhardyaBG from './../image/team/SouhardyaBG.jpg';
import BG from './../image/team/BG.png';
import './../CSS/team.css';
export default function Team() {
    return (
        <Layout>
    <section
  style={{
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',            // Ensure the section covers the full viewport height
  }}
>
    <h3 className="text-center font-weight-bold pt-4 text-white"><i className="fa fa-laptop text-center" aria-hidden="true"></i> Our Developers</h3>
    <div className="container">
    	<div className="row">
    		<div className="col-6">
            <div className="border shadow rounded my-3 p-2">
    		    <div className="card profile-card-2" style={{backgroundColor: "#000000"}}>
                    <div className="card-img-block">
                        <img className="img-fluid" src={SagnikBG} alt="" />
                    </div>
                    <div className="card-body pt-5">
                        <img src={Sagnik} alt="profile" className="profile" />
                        <h5 className="card-title font-weight-bold pt-2">Sagnik Chakraborty</h5>                     
                            <div className="p-2">
                        <h6 className="text-secondary border-bottom border-info font-weight-bold">Skills</h6>
                        <div class="skill-card" style = {{backgroundColor: '#191721', borderRadius: '5px', padding: '2px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px', marginBottom: '20px'}}>
                            <div className="skill-category" style={{marginBottom: '10px',color: '#333'}}>
                                <h6 style={{color: "white"}}><b>Software Developer</b></h6>
                                <div className="thumbnail-list" style={{display: 'flex',flexWrap: 'wrap',marginTop: '10px', fontSize: '10px'}}>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>C</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>C++</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>Python</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>R</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>MySQL</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>NoSQL</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>HTML5</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>CSS3</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>JavaScript</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>ReactJS</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>NodeJS</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>ExpressJS</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>MongoDB</div>
                                </div>
                            </div>
                            </div>
                            <div class="skill-card" style = {{backgroundColor: '#191721', borderRadius: '5px', padding: '2px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px', marginBottom: '20px'}}>
                            <div className="skill-category" style={{marginBottom: '10px',color: '#333'}}>
                                <h6 style={{color: "white"}}><b>Ethical Hacker</b></h6>
                                <div className="thumbnail-list" style={{display: 'flex',flexWrap: 'wrap',marginTop: '10px', fontSize: '10px'}}>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>Penetration Testing</div>
                                </div>
                            </div>
                            </div>
                            </div>                        
                            <p className="text-justify px-3 py-2" style={{fontSize:"13px", color: "whitesmoke"}}>A BTech in IT undergraduate, a dynamic and aspiring enthusiast eager to explore and excel in the fields of <b>Front-End Web Development</b>, <b>Ethical Hacking</b> and <b>Embedded Systems</b>. Actively seeks opportunities to expand his skill set and gain hands-on experience. Also holds a deep fascination for <b>Quantum Computing</b>, <b>Astronomy</b> and the mysteries of the multiverse.</p>
                        </div>
                        <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                        <a href="https://github.com/eccentriccoder01">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/sagnik-chakraborty-9aa473248"> <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
            <div className="border shadow rounded my-3 p-2">
    		    <div className="card profile-card-2" style={{backgroundColor: "#000000"}}>
                    <div className="card-img-block">
                        <img className="img-fluid" src={SouhardyaBG} alt="" />
                    </div>
                    <div className="card-body pt-5">
                        <img src={Souhardya} alt="profile" className="profile" />
                        <h5 className="card-title font-weight-bold pt-2">Souhardya Banerjee</h5>                     
                            <div className="p-2">
                        <h6 className="text-secondary border-bottom border-info font-weight-bold">Skills</h6>
                            <div class="skill-card" style = {{backgroundColor: '#191721', borderRadius: '5px', padding: '2px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px', marginBottom: '20px'}}>
                            <div className="skill-category" style={{marginBottom: '10px',color: '#333'}}>
                                <h6 style={{color: "white"}}><b>Software Developer</b></h6>
                                <div className="thumbnail-list" style={{display: 'flex',flexWrap: 'wrap',marginTop: '10px', fontSize: '10px'}}>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>C</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>C++</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>Python</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>MySQL</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>HTML5</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>CSS3</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>JavaScript</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>Power BI</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>Adobe Photoshop</div>
                                </div>
                            </div>
                            </div>
                            <div class="skill-card" style = {{backgroundColor: '#191721', borderRadius: '5px', padding: '2px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px', marginBottom: '20px'}}>
                            <div className="skill-category" style={{marginBottom: '10px',color: '#333'}}>
                                <h6 style={{color: "white"}}><b>Data Science Enthusiast</b></h6>
                                <div className="thumbnail-list" style={{display: 'flex',flexWrap: 'wrap',marginTop: '10px', fontSize: '10px'}}>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>AI</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>ML</div>
                                    <div className="thumbnail" style={{backgroundColor: '#000',color: '#fff',borderRadius: '5px', padding: '5px 10px', margin: '5px'}}>Deep Learning</div>
                                </div>
                            </div>
                            </div>                     
                            <p className="text-justify px-3 py-2" style={{fontSize:"13px", color: "whitesmoke"}}>A BTech in ECE undergraduate, loves to work with data. As a <b>Data Science</b> enthusiast, his goal is the efficient handling of data and their real world implementation. Also enthusiastic about <b>Software</b> and <b>Web Development</b>, <b>VLSI(Very Large Scale Integration)</b>, <b>Machine Learning</b> and <b>Competitive Programming</b>. A <b>Graphic Designer</b> and <b>Tutor</b> by hobby.</p>
                        <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                        <a href="https://github.com/SouhardyaBanerjee">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/souhardyabanerjee"> <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
                </div>
    		</div>
    	</div>
    </div>
    </div>
</section>
        </Layout>
        
    )
}
