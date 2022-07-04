import github from './../../imgs/github.png'
import endereço from './../../imgs/endereco.png'
import instagram from './../../imgs/Instagram.png'
import telegram from './../../imgs/telegram.png'

import './contact.css'

const ContactArea = () => {
    return (
        <footer>
            <div id="contact" className='contact'>
                <h1>Contact</h1>
                <div className="i-contato">
                    <ul>
                        <li> 
                            <img src={endereço} alt="endereço" />
                            Brasil, São Paulo, Botucatu
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={github} alt="github" />
                            <a href="https://github.com/HigorDevJ" target="_blank">Higor Dev</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={instagram} alt="Instagram" />
                            <a href="https://www.instagram.com/higorxl.sx/?hl=pt-br" target="_blank">Higor</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={telegram} alt="telegram" />
                            <a href="https://t.me/higorkk" target='_blank'>higorkk</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default ContactArea;