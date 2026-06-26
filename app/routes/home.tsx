import './home.css'
import { NavLink } from 'react-router'
import type { ComponentType } from 'react'
import type { Route } from './+types/home'
import type { appointmentsDashboardProps } from '~/components/AppointmentsDashboard'
import DashboardStats from '~/components/DashboardStats'
import Citas from '~/components/Appointments'
import Pacientes from '~/components/Patients'
import Ambulancias from '~/components/Ambulances'
import Docs from '~/components/Docs'
import AppointmentsDashboard from '~/components/AppointmentsDashboard'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Software de Gestión Hospitalaria' },
    {
      name: 'description',
      content:
        'Software especializado en la gestión de citas medicas y pacientes del Hospital de Clínicas',
    },
  ]
}

const appointments: appointmentsDashboardProps[] = [
  {
    date: '08:00',
    url: '../public/patient.png',
    alt: 'Foto del paciente',
    patient: 'Jorge Pedraza',
    state: 'Confirmada',
    specialist: 'Dr. Miguel Gúzman',
    place: 'Cirugía Ortopédica · Cons. 7',
  },
  {
    date: '09:30',
    url: '../public/patient.png',
    alt: 'Foto del paciente',
    patient: 'Carlos Mendoza',
    state: 'Pendiente',
    specialist: 'Dra. Carmen Morales',
    place: 'Medicina Interna · Cons. 1',
  },
  {
    date: '10:00',
    url: '../public/patient.png',
    alt: 'Foto del paciente',
    patient: 'Pedro Pascal',
    state: 'Confirmada',
    specialist: 'Dr. Horacio Rodriguez',
    place: 'Odontología · Cons. 1',
  },
]

type DashboardType = {
  number: number
  title: string
  icon: ComponentType
}

const dashboardArray: DashboardType[] = [
  {
    number: 2,
    title: 'Citas',
    icon: Citas,
  },
  {
    number: 7,
    title: 'Pacientes',
    icon: Pacientes,
  },
  {
    number: 1,
    title: 'Ambulancias',
    icon: Ambulancias,
  },
  {
    number: 6,
    title: 'Documentos',
    icon: Docs,
  },
]

export default function Home() {
  return (
    <main className="home">
      <section className="home__section">
        <div className="dashboard">
          <h4 className="dashboard__title">Dashboard</h4>
          <p className="dashboard__date">Jueves, 25 de junio de 2026</p>
        </div>
        <ul className="dashboard__cards">
          {dashboardArray.map((item) => {
            return (
              <DashboardStats
                key={item.title}
                icon={<item.icon />}
                number={item.number}
                title={item.title}
              />
            )
          })}
        </ul>
        <section className="appointments">
          <div className="appointments__desc">
            <h4 className="appointments__title">Citas de Hoy</h4>
            <NavLink className="appointments__btn" to={'./'}>
              Ver todas →
            </NavLink>
          </div>
          <ul className="appointments__cards">
            {appointments.map((item, index) => {
              return (
                <AppointmentsDashboard
                  date={item.date}
                  url={item.url}
                  alt={item.alt}
                  patient={item.patient}
                  state={item.state}
                  specialist={item.specialist}
                  place={item.place}
                  key={index}
                />
              )
            })}
          </ul>
        </section>
      </section>
    </main>
  )
}
