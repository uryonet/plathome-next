import Link from 'next/link'
import React from 'react'

type Props = {
  isHidden: boolean
  onClick: () => void
}

const DrawerMenu: React.FC<Props> = ({ children, isHidden, onClick }) => {
  return (
    <aside className={'drawer ' + (isHidden && 'is-hidden')}>
      <div className="p-3 mt-5">
        <button className="button is-ghost drawer-close" onClick={onClick}>
          <span className="icon">
            <i className="fa fa-times"></i>
          </span>
        </button>
        <Link href={'/'}>
          <button className="button is-fullwidth mt-3" onClick={onClick}>
            Home
          </button>
        </Link>
        <Link href={'/tasks'}>
          <button className="button is-fullwidth mt-3" onClick={onClick}>
            Task
          </button>
        </Link>
        <Link href={'/'}>
          <button className="button is-fullwidth mt-3" onClick={onClick}>
            Note
          </button>
        </Link>
      </div>
      <div className="login-logout p-3">
        <button className="button is-fullwidth is-light is-info">ログイン</button>
        <button className="button is-fullwidth is-light is-danger">ログアウト</button>
      </div>
    </aside>
  )
}

export default DrawerMenu
