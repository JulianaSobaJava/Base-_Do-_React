import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <>
<section className="footers bg-light pt-5 pb-3">
   <div className="container pt-5">
       <div className="row">
           <div className="col-xs-12 col-sm-6 col-md-4 footers-one">
    		    <div className="footers-logo">
    		        <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style="width:120px;"/>
    		    </div>
    		    <div className="footers-info mt-3">
    		        <p>Cras sociis natoque penatibus et magnis Lorem Ipsum tells about the compmany right now the best.</p>
    		    </div>
    		    <div className="social-icons"> 
                <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-2x social"></i></a>
                <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-2x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-2x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-2x social"></i></a>
	        </div>
    		</div>
    	   <div className="col-xs-12 col-sm-6 col-md-2 footers-two">
    		    <h5>Essentials </h5>
    		    <ul className="list-unstyled">
    			 <li><a href="maintenance.html">Search</a></li>
    			 <li><a href="contact.html">Sell your Car</a></li>
    			 <li><a href="about.html">Advertise with us</a></li>
    			 <li><a href="about.html">Dealers Portal</a></li>
    			 <li><a href="about.html">Post Requirements</a></li>
    			</ul>
    		</div>
    	   <div className="col-xs-12 col-sm-6 col-md-2 footers-three">
    		    <h5>Information </h5>
    		    <ul className="list-unstyled">
    			 <li><a href="maintenance.html">Register Now</a></li>
    			 <li><a href="contact.html">Advice</a></li>
    			 <li><a href="about.html">Videos</a></li>
    			 <li><a href="about.html">Blog</a></li>
    			 <li><a href="about.html">Services</a></li>
    			</ul>
    		</div>
    	   <div className="col-xs-12 col-sm-6 col-md-2 footers-four">
    		    <h5>Explore </h5>
    		    <ul className="list-unstyled">
    			 <li><a href="maintenance.html">News</a></li>
    			 <li><a href="contact.html">Sitemap</a></li>
    			 <li><a href="about.html">Testimonials</a></li>
    			 <li><a href="about.html">Feedbacks</a></li>
    			 <li><a href="about.html">User Agreement</a></li>
    			</ul>
    		</div>
    	   <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
    		    <h5>Company </h5>
    		    <ul className="list-unstyled">
    			 <li><a href="maintenance.html">Career</a></li>
    			 <li><a href="about.html">For Parters</a></li>
    			 <li><a href="about.html">Terms</a></li>
    			 <li><a href="about.html">Policy</a></li>
    			 <li><a href="contact.html">Contact Us</a></li>
    			</ul>
    		</div>
    		
       </div>
   </div>
</section>
<section className="copyright border">
    <div className="container">
        <div className="row text-center">
            <div className="col-md-12 pt-3">
                <p className="text-muted">© 2018 xyz Software Pvt. Ltd.</p>
            </div>
        </div>
    </div>
</section>
</>
    );
}
