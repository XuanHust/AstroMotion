import './contact.scss'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import map from "../images/map.JPG"

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleInputName = (event) => {
        setName(event.target.value)
    }

    const handleInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleInputMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleButon = () => {
        name.length && email.length ?
            toast.success('You successed!')
            :
            toast.error('Form is empty!')
        name.length && email.length &&
            setEmail("")
        setName("")
        setMessage("")
    }

    return (
        <div className='conatact-contanier'>
            <div className='contact-content'>
                <h2 className='contact-title'>Contact US</h2>
                <div className='contact-left'>
                    <form>
                        <input className='contact-name'
                            type="text"
                            name='name'
                            value={name}
                            placeholder="Name"
                            onChange={(event) => handleInputName(event)}
                            required
                        ></input>
                        <input className='contact-email'
                            type="text"
                            name='email'
                            value={email}
                            placeholder="Email"
                            onChange={(event) => handleInputEmail(event)}
                            required
                        ></input>
                        <textarea value={message}
                            placeholder="Message"
                            onChange={(event) => handleInputMessage(event)}
                        ></textarea>
                        <button className='contact-button'
                            type='button'
                            onClick={() => handleButon()}
                        >Send</button>
                    </form>
                </div>
                <div className='contact-right'>
                    <h2>Conact Us</h2>
                    <p>Integer erat turpis, vestibulum pellentesque aliquam ultricies, finibus nec dui. Donec bibendum enim mi, at tristique leo feugiat at.</p>
                    <p>Email: info@company.com</p>
                    <p>Tel: 010-020-0340</p>
                    <div className='contact-map'>
                        <img src={map}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;