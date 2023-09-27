export default function Projects() {
  return (
    <div className="Projects">
        <h2>
           Portfolio 
        </h2>
        <p>
            Below are some projects I built as I venture down this new path of becoming a Software Engineer! Having just started coding May of 2023 I'm very proud of what I've accomplished so far and know that this is only the beginning. Take a look at some of my projects by clicking on the images below. I'd love to hear your feedback/thoughts!
            <br />
            <br />
            <em style={{fontSize: '18px', color: 'violet'}}>(Stay tuned for more projects coming soon...)</em>
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
        <div>
            <img className='projects' src = '/images/concert-search.png'/>
            <img className='projects' src = '/images/pokemon-app.png'/>
            <img className='projects' src = '/images/spacebattle.png'/>
            <img className='projects' src = '/images/darts.png'/>
            <img className='projects' src = '/images/employee-directory.png'/>
        </div>
    </div>
  )
}
