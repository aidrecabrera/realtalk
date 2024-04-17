import { Outlet } from "@tanstack/react-router"

function StyledOutlet() {
  return (
    // TODO: make tailwind class style
    <div className="parent">
        <Outlet />
    </div>
  )
}

export default StyledOutlet