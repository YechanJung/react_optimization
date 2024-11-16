import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import FullScreenMessage from './components/shared/FullScreenMessage'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'
import ImageGallery from './components/sections/ImageGallery'
import { Wedding } from './models/wedding'
const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Failed to fetch wedding data')
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <FullScreenMessage type="loading" />
  if (error) return <FullScreenMessage type="error" />
  if (wedding == null) {
    return null
  }
  const { date, galleryImages } = wedding
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery galleryImages={galleryImages} />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
