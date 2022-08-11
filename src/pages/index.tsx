import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from "../assets/images/check-mark.png"
import google from "../assets/icons/google.png"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.loginForm}>
          <div className={styles.formHeader}>
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="logo"
            />
            <p>
              Welcome to the <span className={styles.bold}>InviteMe</span> app.
            </p>
          </div>
          <div className={styles.formBody}>
            <div className={styles.formGroup}>
              <button className={styles.social}>
                <div className={styles.icon}>
                  <Image 
                    src={google}
                    alt="google"
                    width={25}
                    height={25}
                  />
                </div>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
