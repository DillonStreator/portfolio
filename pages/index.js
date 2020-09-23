import Head from 'next/head';
import ProgressiveImage from 'react-progressive-image';
import Typewriter from 'typewriter-effect';
import ReactGA from 'react-ga';

import styles from '../public/scss/index.module.scss';

const socials = [
  {
    href: "https://www.linkedin.com/in/dillon-streator-75b01b83/",
    src: "/linkedin.svg",
    alt: "linkedin logo",
  },
  {
    href: "https://www.npmjs.com/~dillonstreator",
    src: "/npm.svg",
    alt: "npm logo",
  },
  {
    href: "https://www.github.com/DillonStreator",
    src: "/github.svg",
    alt: "github logo",
  },
  {
    href: "https://stackoverflow.com/users/8765619/cranky-coder",
    src: "/stack-overflow.svg",
    alt: "stackoverflow logo",
  },
];

const Home = () => {

  return (
    <>
      <Head>
        <title>Dillon Streator</title>
      </Head>
      <main>
        <section>
          <div className="container">
            <div className={styles.profileImg}>
              <ProgressiveImage
                delay={500}
                src="dillon_headshot_250x250.webp"
                placeholder="/dillon_headshot_25x25.webp"
              >
                {src => (
                  <picture>
                    <source type="image/webp" srcSet={src} />
                    <source type="image/jpeg" srcSet={src.replace(".webp", ".jpg")} />
                    <img src={src} alt="profile picture" />
                  </picture>
                )}
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
        <section className={styles.cv}>
          <div className="container">
            <a onClick={() => ReactGA.event({ category: "resume view" })} href="/resume.pdf" target="blank" rel="noopener noreferrer">CV</a>
          </div>
        </section>
      </main>
      <footer>
        <div className={styles.social}>
          {socials.map(({ href, src, alt }) => <a onClick={() => ReactGA.event({ category: "social view", action: href })} key={href} href={href} target="blank" rel="noopener noreferrer"><img src={src} alt={alt} /></a>)}
        </div>
      </footer>
    </>
  )
}

export default Home;
