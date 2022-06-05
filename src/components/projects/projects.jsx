import './projects.css'
import './media.css'

import imc from './../../imgs/imccalculator.png'
import pc from './../../imgs/profliecard.png'
import lp from './../../imgs/landingpage.png'
import gcpf from './../../imgs/gerador.png' 
const ProjectsArea = () => {
    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <div className="grid-projects">
                <div>
                    <img src={lp} alt="LandingPage" />
                    <p>
                        Simple landing page using html and css
                    </p>
                    <a href="https://landingpage-two-rosy.vercel.app/" target="_blank">
                        
                    <button>
                            Acess
                    </button>
                        </a>
                </div>
                <div>
                <img src={pc}alt="Profilecard" />
                    <p>
                    Front End Mentor Profile Challenge
                    </p>
                        <a href="https://profile-card-component-main-lcstpv7bs-higordevj.vercel.app/" target="_blank">
                    <button>
                            Acess
                    </button>
                        </a>
                </div>
                <div>
                <img src={imc} alt="ImcCalculator" />
                    <p>
                        Imc calculator based on sbn.org.br table
                    </p>
                        <a href="https://calculadoraimc-seven.vercel.app/" target="_blank">
                    <button>
                            Acess
                    </button>
                        </a>
                </div>
                <div>
                <img src={gcpf}alt="" />
                    <p>
                    Valid cpf generator for devs
                    </p>
                        <a href="https://higordevj.github.io/Gerador-de-CPF/public/" target="_blank">
                    <button>
                            Acess
                    </button>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsArea;