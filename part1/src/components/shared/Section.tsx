import classNames from 'classnames/bind'
import styles from './Section.module.scss'
const cx = classNames.bind(styles)

function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string
}) {
  return (
    <div className={cx('container', className)}>
      {title && <h2 className={cx('txt-title')}>{title}</h2>}
      {children}
    </div>
  )
}

export default Section