import styles from './DashboardCard.module.css'
import Card from './Card'

const DashboardCard = ({data}) => {
  return (
    <div><Card data={data} /> </div>
  )
}

export default DashboardCard