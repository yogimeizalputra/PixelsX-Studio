import React, { useRef } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contact">
            <div className="contact-bg"></div>
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h1 className="contact-title">Let's discuss your project</h1>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <img className="contact-icon" src={Phone} alt="" />
                                +1 1234 556 78
                            </div>
                            <div className="contact-info-item">
                                <img className="contact-icon" src={Email} alt="" />
                                contact@pixelsx.dev
                                </div>
                            <div className="contact-info-item">
                                <img className="contact-icon" src={Address} alt="" />
                                245 King Street, Touterie Victoria 8520 Australia
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <p className="contact-desc">
                            <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea rows="5" placeholder="Message" name="message" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact
