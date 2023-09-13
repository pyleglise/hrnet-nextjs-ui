import styles from './footer.module.scss'
import utilStyles from '../styles/utils.module.scss'
const { version } = require('../package.json')
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={utilStyles['clear-centered-text']}>
        HR-Net v{version} © Wealth-Health - 2023
      </p>
    </footer>
  )
}
