import styles from '../styles/pagecomponents/Home.module.scss'
import Nav from '../components/Nav';
import Content from '../components/Content'
import { useEffect,useState } from 'react'
export default function Home() {
  const [data,setData]=useState(null)
  const [tag,setTag]=useState(3)
  const [filterData,setFilterData]=useState(null)
  useEffect(()=>{
    fetch('https://brewapps.herokuapp.com/nft/list').then(val=>val.json()).then(val=>{setData(val.posts);setFilterData(val.posts);console.log(val.posts)}).catch(err=>console.error(err))
  },[])
  if(!data){
     return(<div className={styles.loading}>
     Loading...
     </div>)
  }
  else{
    switch(tag){
      case 1:return <div className={styles.body}>
      <Nav setTag={setTag} tag={tag}/>

      </div>
      case 2:return <div className={styles.body}>
      <Nav setTag={setTag} tag={tag}/>
      </div>
      case 3:  return (
        <>
        <div className={styles.body}>
        <Nav setTag={setTag} tag={tag}/>
        <div className={styles.content}>
        {
          console.log(filterData),
          filterData&&filterData.map((val,index)=><Content key={index} props={val}/>)
        }
        </div>
        </div>
        
        </> 
       )
      case 4:return <div className={styles.body}>
      <Nav setTag={setTag} tag={tag}/>
      </div>
      case 5:return <div className={styles.body}>
      <Nav setTag={setTag} tag={tag}/>
      </div>
      case 6: return <div className={styles.body}>
      <Nav setTag={setTag} tag={tag}/>
      </div>
      
    }
   
  }
 
}
