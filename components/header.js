import Image from 'next/image'
import styles from './header.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const logo100 = '/images/main-logo-100.webp'
export default function Header({ home }) {
  return (
    <header>
      <nav className='main-nav'>
        {home ? (
          <div className='main-nav column'>
            <p className={utilStyles['p-title-header']}>
              HR-Net • Employee database management tool
            </p>
          </div>
        ) : (
          <>
            <Link className={styles.logo} href='/'>
              <picture>
                <img src={logo100} alt='Logo' width='100' height='100' />
              </picture>
            </Link>

            <div className='nav-container column'>
              <div className={styles['right-space']} home={home}>
                Main Menu
              </div>
              {/* <MainMenu className={styles['right-space']} isHome={home} /> */}
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
