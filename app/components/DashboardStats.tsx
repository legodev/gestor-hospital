import type { ReactNode } from 'react'

type DashboardStatsProps = {
  icon: ReactNode
  number: number
  title: string
}

export default function DashboardStats({
  icon,
  number,
  title,
}: DashboardStatsProps) {
  return (
    <li className="dashboard__card">
      <p className="dashboard__icon">{icon}</p>
      <p className="dashboard__number">{number}</p>
      <p className="dashboard__desc">{title}</p>
    </li>
  )
}
