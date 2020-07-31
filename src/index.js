import React, { useEffect } from 'react'
import styles from './styles.css'

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? ' active' : ''}`}>
    {message}
    <div onClick={onDismissed} className="growl-close"/>
  </div>
)

export function useGrowl (growlTimer = 3000) {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false)
  // const [growlTimer, setGrowlTimer] = React.useState(3000)

  useEffect(() => {

    if (growlActive) {
      //Hide Growl Automatically after timeout
      const timer = setTimeout(() => {
        setGrowlActive(false)
      }, growlTimer)

      return () => clearTimeout(timer)
    }

  }, [growlActive])

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
    }
  ]
}
