import React from 'react'
import style from '../../css/prodItem.module.scss'

const Prod = ({prod}) => {
  const { title, imageSrc, imageAlt, price, link } = prod

  return (
    <a href={link}>
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.price}>${price}</div>
    </div>
    </a>
  )
}

export default Prod