import ProgressiveImage from 'react-progressive-image';
import Typewriter from 'typewriter-effect';

import styles from '../public/scss/index.module.scss';

const Home = () => {

  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className={styles.profileImg}>
              <ProgressiveImage
                src="dillon_headshot_250x250.jpg"
                placeholder="/dillon_headshot_25x25.jpg"
              >
                {src => <img src={src} alt="profile picture" />}
              </ProgressiveImage>
              <div className={styles.overlay} />
            </div>
            <h2 className={styles.name}>Dillon Streator</h2>
            <h3 className={styles.title}>Full Stack Developer</h3>
            <div className={styles.terminal}>
              <Typewriter options={{
                strings: ["Simplicity > Complexity", "Secure Succinct Software", "Test Driven Development"],
                autoStart: true,
                loop: true,
                cursorClassName: styles.cursor,
                wrapperClassName: styles.wrapper,
              }}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <a href="/resume.pdf" target="blank" rel="noopener noreferrer">CV</a>
          </div>
        </section>
      </main>
      <footer>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/dillon-streator-75b01b83/" target="blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="linkedin logo" /></a>
          <a href="https://www.github.com/DillonStreator" target="blank" rel="noopener noreferrer"><img src="/github.svg" alt="github logo" /></a>
          <a href="https://stackoverflow.com/users/8765619/cranky-coder" target="blank" rel="noopener noreferrer"><img src="/stack-overflow.svg" alt="stackoverflow logo" /></a>
          <a href="https://www.npmjs.com/~dillonstreator" target="blank" rel="noopener noreferrer"><img src="/npm.svg" alt="npm logo" /></a>
        </div>
      </footer>
    </>
  )
}

export default Home;
