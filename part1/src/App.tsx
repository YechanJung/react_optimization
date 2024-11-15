import { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  useEffect(() => {
    fetch('http://localhost:8888/posts')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return <div className={cx('container')}></div>
}

export default App
