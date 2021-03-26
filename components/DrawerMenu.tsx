import Link from 'next/link'
import React from 'react'

type Props = {
  isHidden: boolean
  onClick: () => void
}

const DrawerMenu: React.FC<Props> = ({ children, isHidden, onClick }) => {
  return (
    <aside className={'drawer ' + (isHidden && 'is-hidden')}>
      <div>
        <button onClick={onClick}>閉じる</button>
        <Link href={'/'}>
          <button onClick={onClick}>Home</button>
        </Link>
        <Link href={'/tasks'}>
          <button onClick={onClick}>Task</button>
        </Link>
        <Link href={'/'}>
          <button onClick={onClick}>Note</button>
        </Link>
      </div>
      <div>
        <button>ログイン</button>
        <button>ログアウト</button>
      </div>
    </aside>
  )
}

export default DrawerMenu
