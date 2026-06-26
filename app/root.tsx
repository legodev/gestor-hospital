import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'
import { NavLink } from 'react-router'
import Home from './components/Home'
import Citas from './components/Appointments'
import Medicos from './components/Doctors'
import Docs from './components/Docs'
import Ambulancias from './components/Ambulances'
import Pacientes from './components/Patients'
import Hospital from './components/Hospital'
import './app.css'
import type { ComponentType } from 'react'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export type NavItem = {
  title: string
  url: string
  icon: ComponentType
}

export const navigation: NavItem[] = [
  {
    title: 'Inicio',
    url: './',
    icon: Home,
  },
  {
    title: 'Citas',
    url: './citas',
    icon: Citas,
  },
  {
    title: 'Pacientes',
    url: './pacientes',
    icon: Pacientes,
  },
  {
    title: 'Médicos',
    url: './medicos',
    icon: Medicos,
  },
  {
    title: 'Docs',
    url: './docs',
    icon: Docs,
  },
  {
    title: 'Ambulancias',
    url: './ambulancias',
    icon: Ambulancias,
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <Hospital />
          <p>Hospital de Clínicas</p>
        </div>
        <nav className="desktop__navbar">
          <ul className="desktop__links">
            {navigation.map((item) => {
              return (
                <li key={item.url}>
                  <NavLink className="desktop__navlink" to={item.url}>
                    <div className="desktop__link">
                      <item.icon />
                      {item.title}
                    </div>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        <nav className="footer__navbar">
          <ul className="footer__links">
            {navigation.map((item) => {
              return (
                <li key={item.url}>
                  <NavLink to={item.url}>
                    <div className="footer__link">
                      <item.icon />
                      {item.title}
                    </div>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
