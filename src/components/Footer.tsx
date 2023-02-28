import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>To do list @ {new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default Footer