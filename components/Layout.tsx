import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Header />
    </div>
  )
}

export default Layout
