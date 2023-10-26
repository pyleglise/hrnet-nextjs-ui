// Importing styles for FontAwesome icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

// Disable automatic injection of CSS for FontAwesome icons
config.autoAddCss = false

/**
 * Checks if the environment is development.
 * @type {boolean}
 */
export const isDevelopment = process.env.NEXT_PUBLIC_MODE === 'development'

/**
 * Sets the base URL for metadata based on the environment.
 * @type {string}
 */
const metadataBase = isDevelopment
  ? 'http://localhost:3000/'
  : 'https://hrnet.axialdata.app/'

/**
 * Object containing metadata for the application.
 * @type {Object}
 */
export const metadata = {
  metadataBase: metadataBase,
  generator: 'Next.js',
  applicationName: 'HR-Net - App',
  referrer: 'origin-when-cross-origin',
  keywords: ['Human resources', 'Management', 'HR'],
  authors: [{ name: 'Pierre-Yves Léglise', url: 'contact@axialdata.net' }],
  creator: 'Pierre-Yves Léglise',
  publisher: 'Pierre-Yves Léglise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: 'HR-Net - App',
  description: 'HR-Net - Employee database manager - version app-router',
}
export const viewport = {
  themeColor: '#3a33a4',
  colorScheme: 'light',
}

// Importing DM Sans font from Next.js Google font package
import { DM_Sans } from 'next/font/google'

// Importing global styles
import '../styles/globals.scss'

// Importing components
import Footer from '../components/footer'
import Header from '../components/header'
import ReduxProvider from '../redux/ReduxProvider'

/**
 * Loads DM Sans font with various weights and styles.
 * @type {Object}
 */
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

/**
 * A layout component wrapping around the core application structure.
 * @namespace
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - Child components.
 * @returns {ReactElement} The rendered component.
 */
const RootLayout = ({ children }) => (
  <html lang="en" className={dm_sans.className}>
    <body>
      <ReduxProvider>
        <div className="layout">
          <Header />
          <main className="flex flex-col mx-4 bg-bg-color-xlight place-content-evenly h-[82vh] overflow-auto">
            {children}
          </main>
          <Footer />
        </div>
      </ReduxProvider>
    </body>
  </html>
)

export default RootLayout
