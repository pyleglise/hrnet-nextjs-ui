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
        rel='icon'
        href='/favicon.ico'
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
  listEmployees,
  createEmployee,
}) {
  return (
    <div className='layout'>
      {addHtmlHead(home, listEmployees, createEmployee)}
      <Header
        home={home}
        listEmployees={listEmployees}
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
