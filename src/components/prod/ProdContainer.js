import React from 'react'
import Prod from './Prod'
import style from '../../css/prodContainer.module.scss'

const RIGHT_ARROW = '&#9654;'
const LEFT_ARROW = '&#9664;'

const ProdContainer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
      </div>
      <div className={style.pagination}>
        <div className={style.arrowBox}>
          <div className={`${style.arrow} ${style.left}`} dangerouslySetInnerHTML={{ __html: LEFT_ARROW }}/>
        </div>
        <div className={style.arrowBox}>
          <div className={`${style.arrow} ${style.right}`} dangerouslySetInnerHTML={{ __html: RIGHT_ARROW }}/>
        </div>
      </div>
    </div>
  )
}

export default ProdContainer