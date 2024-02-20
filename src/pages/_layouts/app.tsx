import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <h1>Dashboard</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
