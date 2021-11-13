import React from "react"; 
import { Link } from 'react-router-dom';

function Footer(props){
	return(
    <div className="footer mt-5 bg-primary">
        <div className="container">
            <div className="row justify-content-center text-white">             
                <div className="col-7 col-sm-5 mt-3">
                    <h5 className="font-weight-bold">Contact Us</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <Link to="mailto:confusion@food.net" className="text-white">
                         confusion@food.net</Link>
                    </address>
                </div>
                <div className="col-12 col-sm-6 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google bg-white  m-1" href="http://google.com/+"><i className="fa fa-google-plus fa-2x text-danger p-1"></i></a>
                        <a className="btn btn-social-icon btn-facebook bg-white  m-1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-2x text-primary p-1"></i></a>
                        <a className="btn btn-social-icon btn-linkedin bg-white  m-1" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-2x text-info p-1"></i></a>
                        <a className="btn btn-social-icon btn-twitter bg-white  m-1" href="http://twitter.com/"><i className="fa fa-twitter fa-2x text-primary p-1"></i></a>
                        <a className="btn btn-social-icon btn-google bg-white  m-1" href="http://youtube.com/"><i className="fa fa-youtube fa-2x text-danger p-1"></i></a>
                        <a className="btn btn-social-icon bg-white  m-1" href="mailto:"><i className="fa fa-envelope-o fa-2x text-danger p-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className="font-weight-bold">© Copyright 2021 Solutionists</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;