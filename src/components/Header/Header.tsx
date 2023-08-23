import styles from './Header.module.css'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Ignite logo" />
      <strong>Ignite Feed</strong>
    </header>
  )
}