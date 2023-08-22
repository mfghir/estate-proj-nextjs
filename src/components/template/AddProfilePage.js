"use client"
import styles from './AddProfilePage.module.css'

const 
 = () => {
const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  return (
    <div className={styles.container}>

    </div>
  )
}

export default AddProfilePage