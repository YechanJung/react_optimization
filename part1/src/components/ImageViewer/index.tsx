import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
// import 'swiper/css'
import './swiper.css'
const cx = classNames.bind(styles)

function ImageViewer({
  galleryImages,
  open = false,
  selectedImage,
  onClose,
}: {
  galleryImages: string[]
  open: boolean
  selectedImage: number
  onClose: () => void
}) {
  console.log('selectedImage2', selectedImage)
  if (!open) return null
  return (
    <div className={cx('dimmed', { open })}>
      <Swiper spaceBetween={20} slidesPerView={1} loop initialSlide={-4}>
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="이미지 뷰어" onClick={onClose} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageViewer
