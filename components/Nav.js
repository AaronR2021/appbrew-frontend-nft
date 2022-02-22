import Link from 'next/link'
import React from 'react'
import styles from '../styles/componentstyles/Nav.module.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Nav({setTag,tag}) {
  console.log(tag)

  return (
    <nav>
        <h2 className={styles.header}>Live Space</h2>
        <p className={styles.sub_heading}><CheckCircleIcon size='small'/><span>All NFTs on Cyber either belong to or were minted by their space creator.</span></p>
        <div className={styles.nav_tags}>
            <ul>
                <li onClick={()=>{setTag(1)}} className={tag==1?styles.active:''}><Link href='/'><a className={styles.tags} ><>&#x1F4DB;</>24h Trending</a></Link></li>
                <li onClick={()=>{setTag(2)}} className={tag==2?styles.active:''}><Link href='/' ><a className={styles.tags}>Latest shows</a></Link></li>
                <li onClick={()=>{setTag(3)}} className={tag==3?styles.active:''}><Link href='/'><a className={styles.tags} >Most Popular</a></Link></li>
                <li onClick={()=>{setTag(4)}} className={tag==4?styles.active:''}><Link href='/'><a className={styles.tags} >In Genesis</a></Link></li>
                <li onClick={()=>{setTag(5)}} className={tag==5?styles.active:''}><Link href='/'><a className={styles.tags} >In Void</a></Link></li>
                <li onClick={()=>{setTag(6)}} className={tag==6?styles.active:''}><Link href='/'><a className={styles.tags} ><>&#x1F98D;</>#BAYS</a></Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav