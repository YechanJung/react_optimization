import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '../shared/Section'
import ImageViewer from '../ImageViewer'
const cx = classNames.bind(styles)

function ImageGallery({ galleryImages }: { galleryImages: string[] }) {
  const [selectedImage, setSelectedImage] = useState(-1)
  const open = selectedImage > -1
  const handleSelectedImage = (index: number) => {
    setSelectedImage(index)
    console.log('selectedImage', index)
  }
  const handleCloseImageViewer = () => {
    setSelectedImage(-1)
  }
  return (
    <>
      <Section title="사진첩" className={cx('container')}>
        <ul className={cx('wrap-images')}>
          {galleryImages.map((image, index) => (
            <li
              key={index}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(index)}
            >
              <img src={image} alt={`gallery-${index}`} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        galleryImages={galleryImages}
        open={open}
        selectedImage={selectedImage}
        onClose={handleCloseImageViewer}
      />
    </>
  )
}

export default ImageGallery
