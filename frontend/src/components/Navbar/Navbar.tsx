import type { ReactNode } from "react"

type NavbarProps = {
  children: ReactNode
}

function Navbar({ children }: NavbarProps) {
  return (
    <nav>
      {children}
    </nav>
  )
}

export default Navbar