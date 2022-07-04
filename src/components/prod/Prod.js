import React from 'react'
import style from '../../css/prodItem.module.scss'

const Prod = () => {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <img src="https://fakeimg.pl/180/" alt="prod" />
      </div>
      <div className={style.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam sunt libero perspiciatis maxime soluta reiciendis quo ipsum laudantium esse asperiores ex minima dolorem fuga, quasi temporibus animi iusto incidunt.</div>
      <div className={style.price}>$123</div>
    </div>
  )
}

export default Prod