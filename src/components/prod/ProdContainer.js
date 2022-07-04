import React, {useState} from 'react'
import Prod from './Prod'
import {data} from '../../data'
import style from '../../css/prodContainer.module.scss'

const RIGHT_ARROW = '&#9654;'
const LEFT_ARROW = '&#9664;'
const PROD_PER_PAGE = 6

const { prodList } = data
const renderProd = (prods) => (prods.map((prod) => <Prod key={prod.id} prod={prod} />))

const ProdContainer = () => {
  const slicedProds = prodList.slice(0, PROD_PER_PAGE)
  const [ prodsOnDisplay, setProdOnDisplay ] = useState(slicedProds)

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {renderProd(prodsOnDisplay)}
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