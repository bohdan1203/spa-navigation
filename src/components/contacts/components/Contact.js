import {Switch, Route, Link} from "react-router-dom";

function Contact({gender, firstName, lastName, phone, id, link}) {


    return (
            <div>
                <Link exact to={`/contacts/${link}`} className="hover">
                    <div className="contact" id={'contact-' + id}>
                        <div className="contact-top">
                            <div className="contact-gender">{gender}</div>
                            <div className="contact-full-name">{firstName + " " + lastName}</div>
                        </div>
                        <div className="contact-phone">{phone}</div>            
                    </div>
                </Link>
            </div>
    );
}



export default Contact;