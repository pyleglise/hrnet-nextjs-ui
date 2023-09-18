import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const name = 'Pierre-Yves Léglise'
export const siteTitle = 'HR-Net - Employee database manager'
function addHtmlHead() {
  return (
    <Head>
      <link
        rel='shortcut icon'
        href='/images/favicon.ico'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/images/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/images/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/images/favicon-16x16.png'
      />
      <meta
        name='description'
        content='Manage your employee database'
      />
      <meta
        name='creator'
        content={name}
      />
      <meta
        name='og:title'
        content={siteTitle}
      />
    </Head>
  )
}
export default function Layout({
  children,
  home,
  showEmployees,
  createEmployee,
}) {
  return (
    <div className='layout'>
      {addHtmlHead()}
      <Header
        home={home}
        showEmployees={showEmployees}
        createEmployee={createEmployee}
      />
      <main className='flex flex-col mx-4 bg-bg-color-xlight place-content-evenly h-[82vh] overflow-hidden'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

{
}
