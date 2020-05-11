import React, { Component } from 'react'
import './css/main.css'
import ScrollspyNav from "react-scrollspy-nav";
import Fade from 'react-reveal/Fade';
import Headroom from 'react-headroom'

class MainSite extends Component {
    render() {
        return (
            <div>
                {/*Laning Page: Start*/}
                <section id="landingPage" className="landingPage">
                    <div className="d-flex align-items-center justify-content-center min-vh-100 ">
                        {/* <div className="col"> */}
                        {/* <FadeIn transitionDuration="2000"> */}
                        <Fade top>
                            <h1 className="text-white display-3">Welcome, you have reached Vignesh.!</h1>
                        </Fade>
                        {/* </FadeIn> */}
                        {/* </div> */}
                    </div>
                </section>
                {/*Landing Page: End*/}


                {/*Nav: Start*/}
                <Headroom>
                    <ScrollspyNav
                        scrollTargetIds={["landingPage", "About", "whatdoido"]}
                        offset={100}
                        activeNavClass="is-active"
                        scrollDuration="1200"
                        headerBackground="true"
                    >
                        <nav className="navbar navbar-expand-lg navbar-light navStyle fixed-top">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <p className="lead">Vignesh.in</p>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav">
                                        {/* <li className="nav-item active"> */}
                                        <a className="nav-item active nav-link" href="#landingPage">Home <span className="sr-only">(current)</span></a>
                                        {/* </li> */}
                                        {/* <li className=""> */}
                                        <a className="nav-item nav-link" href="#About">About</a>
                                        {/* </li> */}
                                        {/* <li className="nav-item"> */}
                                        <a className="nav-link nav-item" href="#whatdoido">What do I do</a>
                                        {/* </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </ScrollspyNav>
                </Headroom>
                {/*Nav: End*/}


                {/*About: Start*/}
                <section id="About" className="about pt-0 pt-md-5 p-3">
                    <div className="container min-vh-100 pt-md-5">
                        <Fade bottom>
                            <div className="row text-white pt-mb-5">
                                <div className="col-sm-4 p-md-5 p-sm-5">
                                    <p className="display-4 text-sm-left mt-3 text-center">About</p>
                                </div>
                                <div className="col-sm-8 p-md-5">
                                    <p>I am Vignesh software engineer based in India. Shortly after graduting in Software Engineering from VIT University in 2015, I joined Conizant, India a Software Developer.
                                Since then, I have been working on some interesting technologies and projects in my day to day life.</p>
                                    <p className="font-weight-light font-italic">I strongly believes a good product, indeed is the outcome of the quality of the code.</p>
                                </div>
                            </div>

                            <div className="row text-white">
                                <div className="col-sm-4 p-md-5">
                                    <p className="display-4 text-sm-left text-center">Experience</p>
                                    <div className="nav nav-tabs flex-column" id="jobs" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active border-0" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Cognizant</a>
                                        <a className="nav-link border-0" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Aurea</a>
                                    </div>
                                </div>

                                <div className="col-sm-8 text-left p-md-5 p-3">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">Developed and maintained ASP .NET and MS T-SQL database applications</li>
                                                <li className="list-inline-item">Have troubleshot client database and application issues and applied necessary fix</li>
                                                <li className="list-inline-item">Worked closely with management team to administer development tasks by implementing and maintaining the best practices in SDLC</li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">Actively involved in scoping the requirement and translated UX and UI mockups into a responsive and scalable user interface</li>
                                                <li className="list-inline-item">Have experiencing writing both stateful and stateless responsive React.js component with both custom CSS and frontend frameworks</li>
                                                <li className="list-inline-item">Used JIRA as the bug tracking system to track and maintain the history of bugs/issues</li>
                                                <li className="list-inline-item">Contributed to the knowledge base by creating and updating application development documentations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
                {/*About: End*/}

                {/*WhatDoIDo: Start*/}
                <section id="whatdoido" className="whatDoIDo pt-md-5 p-3">
                    <div className="container min-vh-100 pt-md-5">
                        <Fade bottom>
                            <div className="row text-white p-md-5 p-sm-5">
                                <div className="col-12 col-sm-6 pr-md-5 p-sm-5">
                                    <div>
                                        <p className="display-4 text-sm-left mt-3 text-center">What Do I Do..!</p>
                                    </div>
                                    <div>
                                        <p className="text-justify">I am a developer with significant experience in various areas of software development. I focus on the
                                        design and scalability of the application for a seamless user experience. With my experience, being more than just a coder,
                                I can suggest an optimal technical solution(s) that better suits the business/end-user needs.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 p-md-3 pl-md-5 p-3 text-sm-center">
                                    <h6>Below are few technologies I've been working recently</h6>
                                    <p className="p-2">React and JS</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '86%' }} aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <p className="p-2">HTML5 and CSS3</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '78%' }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <p className="p-2">SQL</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '82%' }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <p className="p-2">C#</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <p className="p-2">Python</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '74%' }} aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                </div>
                            </div>
                            <div className="row just-content-center text-white p-md-5 p-sm-5">
                                <div className="col-12 mt-md-0 text-center ">
                                    <p className="display-4">Get in Touch</p>
                                    <p>Currently, I am looking to join a tech firm/team as a front-end developer or a full-stack developer. Also, I am open for
                                    freelancing projects. Drop me a message, whether you have a question or just want to say hi, I'll get back to you as soon as possible.!</p>
                                    <a className="btn btn-primary" href="mailto:vigneshps025@gmail.com">Say Hello</a>
                                </div>
                            </div>
                            <div className="row text-white pb-md-4 pt-sm-5 pt-4 text-center">
                                <div className="col-12">
                                    <footer className="blockquote-footer">Designed & Built by<cite title="Source Title">Vignesh</cite></footer>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
                {/*WhatDoIDo: End*/}
            </div >
        )
    }
}

export default MainSite;