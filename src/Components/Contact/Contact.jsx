import './Contact.css'
import { AiOutlineMail,AiOutlinePhone } from 'react-icons/ai';
const Contact = () => {
    return (  
        <div className='container-contact'>
            <div className='container d-flex justify-content-center m-4 p-4 align-items-center flex-column' >
            <div className='contact-title'>Contact</div>
            <div className='wrapper-contact'>
                <div className='contact'>
                    <div className='contact-inform'>
                        <div><AiOutlinePhone className='icon'/></div>
                        <div>0813110376</div>
                        </div>
                </div>
                <div className='contact'>
                    <div className='contact-inform'>
                        <div><AiOutlineMail className='icon'/></div>
                        <div>Voanhkhoi2134@gmail.com</div>
                    </div>
                </div>
                
            </div>
           </div>
        </div>
    );
}

export default Contact;