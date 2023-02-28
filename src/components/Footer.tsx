import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>To do list</span> @ {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer