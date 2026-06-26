import './appointments.css'

export type appointmentsDashboardProps = {
  date: string
  url: string
  patient: string
  alt: string
  state: string
  specialist: string
  place: string
}

export default function AppointmentsDashboard({
  date,
  url,
  alt,
  patient,
  state,
  specialist,
  place,
}: appointmentsDashboardProps) {
  return (
    <li className="appointments__card">
      <p className="appointments__date">{date}</p>
      <img className="appointments__icon" src={url} alt={alt} />
      <div className="appointments__texts">
        <p className="appointments__patient">{patient}</p>
        <p className="appointments__state">{state}</p>
        <p className="appointments__specialist">{specialist}</p>
        <p className="appointments__place">{place}</p>
      </div>
    </li>
  )
}
