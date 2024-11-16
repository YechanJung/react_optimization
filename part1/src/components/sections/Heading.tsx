import { parseISO, format, getDay } from 'date-fns'
import Section from '../shared/Section'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'
const cx = classNames.bind(styles)
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'dd.MM.yy')}</div>
      <div className={cx('txt-day')}>{days[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
