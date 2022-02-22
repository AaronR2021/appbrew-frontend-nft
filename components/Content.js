import React from 'react';
import styles from '../styles/componentstyles/Content.module.scss'


function Content({props}) {
    const {postUrl,title,name,address,colabAddress,colabName}=props
  return (
    <div className={styles.card}>
        <img src={postUrl} className={styles.image} alt={title}/>
        <div className={styles.userInfo}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.colabs}>
                <div className={styles.col}>
                <span>@{name.charAt(0)=='@'?name.substring(1):name}</span>
                <span>{address.substring(0,7)}...</span>
                </div>
                {
                   colabName?<div className={styles.col}><span>@tutufuw</span>
                   <span>0x120ddwd3...</span></div> :''
                }
            </div>
        </div>
    </div>
  )
}

export default Content