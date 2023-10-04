export default function Projects() {
  return (
    <div className="Projects">
        <h2>
           Portfolio 
        </h2>
        <p id='info'>
            Below are some projects I built while on this new journey of becoming a Software Engineer! I started coding May of 2023 with SheCodes, and I'm happy with what I've accomplished so far. This is only the beginning and I'm excited for what's next. Check out some of my projects by clicking on the images below. I'd love to hear your feedback/thoughts!
            <br />
            <br />
            <em style={{fontSize: '18px', color: 'violet', fontFamily: 'Georgia'}}>(Stay tuned for more projects coming soon...)</em>
        </p>
        <ul id="tech-list">
            <p>Technologies I've worked with:</p>
            <li>
                <img id='html' className="tech-logos" src='/images/html.png'/>
            </li>
            <li>
                <img id='css' className="tech-logos" src='/images/css.png'/>
            </li>
            <li>
                <img className="tech-logos" src='/images/js.png'/>
            </li>
            <li>
                <img className="tech-logos" src='/images/react.jpg'/>
            </li>
            <li>
                <img id='node' className="tech-logos" src='/images/node.png'/>
            </li>
             <li>
                <img id='express' className="tech-logos" src='/images/express.png'/>
            </li>
            <li>
                <img id='mongodb' className="tech-logos" src='/images/mongodb.png'/>
            </li>
        </ul>
        <div className='marker'>*</div>
        <div id="projects">
            <div className="project-unit">
                <a href="https://concert-search.netlify.app/" target="_blank">
                    <img className='project-img' src = '/images/concert-search.png'/>
                </a>
                <div className="text-box">
                    <p>
                        ❓ Find events based on artist keyword using Ticketmaster API
                    </p>
                    <p>
                        🔨 Built with: React + Vite, JS, HTML, CSS
                    </p>
                    <p>
                        🔍 Find more details about the project on Github 
                        <a href="https://github.com/wghile/concert-search" target="_blank">
                            <img className='repo-link' src='/images/github-icon2.png'/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="project-unit">
                <a href="https://pokemon-list.onrender.com/" target="_blank">
                    <img className='project-img' src = '/images/pokemon-app.png'/>
                </a>
                <div className="text-box">
                    <p>
                        ❓ Add/delete/edit Pokémon from database using Restful Routes
                    </p>
                    <p>
                        🔨 Built with: Nodejs, Express, Mongoose, MongoDB
                    </p>
                    <p>
                        🔍 Find more details about the project on Github 
                        <a href="https://github.com/wghile/pokemon-express-ejs" target="_blank">
                            <img className='repo-link' src='/images/github-icon2.png'/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="project-unit">
                <a href="https://wghile.github.io/spacebattlegame/" target="_blank">
                    <img className='project-img' src = '/images/spacebattle.png'/>
                </a>
                <div className="text-box">
                    <p>
                        ❓ Survive an alien invasion!
                    </p>
                    <p>
                        🔨 Built with: HTML, CSS, JS
                    </p>
                    <p>
                        🔍 Find more details about the project on Github 
                        <a href="https://github.com/wghile/spacebattlegame" target="_blank">
                            <img className='repo-link' src='/images/github-icon2.png'/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="project-unit">
                <a href="https://wghile.github.io/darts/" target="_blank">
                    <img className='project-img' src = '/images/darts.png'/>
                </a>
                <div className="text-box">
                    <p>
                        ❓ Play against a computer in classic game of darts
                    </p>
                    <p>
                        🔨 Built with: HTML, CSS, JS (OOP)
                    </p>
                    <p>
                        🔍 Find more details about the project on Github 
                        <a href="https://github.com/wghile/darts" target="_blank">
                            <img className='repo-link' src='/images/github-icon2.png'/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="project-unit">
                <a href="https://starwars-ships-api.netlify.app/" target="_blank">
                    <img className='project-img' src = '/images/starwars.png'/>
                </a>
                <div className="text-box">
                    <p>
                        ❓ Browse through starships using Star Wars API
                    </p>
                    <p>
                        🔨 Built with: React + Vite, HTML, CSS, JS
                    </p>
                    <p>
                        🔍 Find more details about the project on Github 
                        <a href="https://github.com/wghile/star-wars-ships" target="_blank">
                            <img className='repo-link' src='/images/github-icon2.png'/>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <p id='end-note'>
            <span className='marker'>*</span> Projects deployed on Render (for free) are spun down on idle. Render spins the service back up when it receives a request to process, e.g. opening the application, which may take a few minutes.
        </p>
    </div>
  )
}
