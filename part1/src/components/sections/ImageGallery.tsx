import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '../shared/Section'
const cx = classNames.bind(styles)

function ImageGallery({ galleryImages }: { galleryImages: string[] }) {
  return (
    <Section title="사진첩" className={cx('container')}>
      <ul className={cx('wrap-images')}>
        {galleryImages.map((image, index) => (
          <li key={index} className={cx('wrap-image')}>
            <img src={image} alt={`gallery-${index}`} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default ImageGallery
