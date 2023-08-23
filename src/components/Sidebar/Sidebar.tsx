import { Avatar } from '../Avatar/Avatar'
import { PencilSimpleLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" 
        className={styles.cover}
      />

      <main className={styles.profile}>
          <Avatar 
            src="https://github.com/ngustavo80.png"
          />
          
          <strong>Gustavo do Nascimento</strong>
          <p>Web Developer</p>
      </main>

      <footer>
        <a href="">
          <PencilSimpleLine size={20}/>
          Edite seu perfil
        </a>
      </footer>
    </aside>
  )
}