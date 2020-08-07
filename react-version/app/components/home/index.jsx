import React, { Component } from 'react';

import './index.scss';

class Index extends Component {

  render() {
    return (
      <div>
        <section className="call_to_action_container background">
          <div className="content_limitter">
            <div className="introduction">
              <h3 className="heading">Hello World. I'm Tung Nguyen!</h3>
              <p className="content">Senior Software Engineering</p>
            </div>
          </div>
        </section>
        <section className="services_container section_container" id="services">
          <div className="content_limitter container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="icon"><i className="far fa-window"></i></div>
                <h3 className="heading">Backend Development</h3>
                <p className="content">
                  Manipulate data in database. Provide data to web or mobile via APIs. Process data based on business requirement.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="icon"><i className="far fa-cogs"></i></div>
                <h3 className="heading">DevOps</h3>
                <p className="content">
                  Leverage the the availability of scripting, operating system, tools to automate the tasks that we
                  usually. Self-administrive own website.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="icon"><i className="far fa-code"></i></div>
                <h3 className="heading">Web Development</h3>
                <p className="content">
                  Create a diversity type of website, apply responsive and understand browser capabilities to make website works property from handheld device to desktop computer.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="icon"><i className="far fa-chart-network"></i></div>
                <h3 className="heading">Deep Learning</h3>
                <p className="content">
                  On my way to getting knowledge about big data processing. Learn the basics of ML framework and build example to understand how it works.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about_container section_container" id="about">
          <div className="content_limitter container">
            <h2 className="heading">About me</h2>
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <h3 className="skill">.NET</h3>
                <div className="rating rating-350">
                  <div className="rating-4"></div>
                </div>
                <h3 className="skill">SQL Server</h3>
                <div className="rating rating-350">
                  <div className="rating-3"></div>
                </div>
                <h3 className="skill">Angular</h3>
                <div className="rating rating-350">
                  <div className="rating-2"></div>
                </div>
                <h3 className="skill">React</h3>
                <div className="rating rating-350">
                  <div className="rating-3"></div>
                </div>
                <br/>
              </div>
              <div className="col-xs-12 col-md-8">
                <p className="content">
                  Enthusiast software engineering with over 5 years of experience working with .NET and related technologies including: SQL Server, Angular, ReactJsâ€¦ Excellent problem-solving skills and ability to perform well in a team. Seeking for help company to create quality products, as well as develop my skills as full stack developer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="experience_container section_container" id="experiences">
          <div className="content_limitter">
            <h2 className="heading">Experiences</h2>
            <div className="timeline">
              <div className="timeline-entry">
                <div className="timeline-title">
                  <h3>Nash Tech Limited</h3>
                  <p>2018 - 2020</p>
                </div>
                <div className="timeline-body">
                  <p>Senior Software Developer</p>
                  <ul>
                    <li>Maintain, develop new features using Angular, ReactJs.</li>
                    <li>Work with technical architects in team to help design database, define solutions.</li>
                    <li>Developed and delivered a feature related to mobile with limited device support.</li>
                    <li>Mentored a group of 3 freshers.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-entry">
                <div className="timeline-title">
                  <h3>FPT Software</h3>
                  <p>2014 - 2017</p>
                </div>
                <div className="timeline-body">
                  <p>Software Developer</p>
                  <ul>
                    <li>Maintain old system using ASP.NET and Web API.</li>
                    <li>Helped team to deliver a demo using Xamarin Forms in time.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact_section section_container" id="contacts">
          <div className="content_limitter container">
            <h2 className="heading">Contacts</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-4 contact_info">
                <h3 className="sub_heading">Contact information</h3>
                <form>
                  <div>
                    <label htmlFor="footer-info-phone_number">Call me:</label>&nbsp;
                    <a href="tel:+84939718415">+84 939 718 415</a>
                  </div>
                  <div className="form-group">
                    <label htmlFor="footer-info-email">Email me:</label>&nbsp;
                    <a href="mailto:tung.nhatnguyen17@gmail.com">tung.nhatnguyen17@gmail.com</a>
                  </div>
                  <div className="form-group social-network">
                    <a href="https://facebook.com/mendozalz" target="_blank"><i className="fab fa-facebook-square"></i></a>&nbsp;
                    <a href="https://www.linkedin.com/in/tung-nguyen-nhat" target="_blank"><i className="fab fa-linkedin"></i></a>&nbsp;
                    <a href="https://join.skype.com/invite/UxBxdhmhaZQd" target="_blank"><i className="fab fa-skype"></i></a>
                  </div>
                </form>
              </div>
              <div className="col-xs-12 col-sm-8 contact_form">
                <h3 className="sub_heading">Leave me a message</h3>
                <form>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-5">
                      <div className="form-group">
                        <label htmlFor="footer-contact-name">Name: </label>
                        <input className="form-control" id="footer-contact-name" placeholder="Name" type="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="footer-contact-name">Email: </label>
                        <input className="form-control" id="footer-contact-name" placeholder="Email" type="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="footer-contact-name">Subject: </label>
                        <input className="form-control" id="footer-contact-name" placeholder="Subject" type="email" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-7">
                      <div className="form-group">
                        <label htmlFor="footer-contact-name">Subject:</label>
                        <textarea className="form-control" id="footer-contact-name" placeholder="Subject" rows="3" type="email"></textarea>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary form-control" type="button">Send message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Index;
