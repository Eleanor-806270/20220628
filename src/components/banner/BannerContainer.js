import React from 'react'
import style from '../../css/banner.module.scss'

const BannerContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.wallpaper} style={{ backgroundColor: '#CCF' }}>
        <div className={style.bookMark}>主題推薦</div>
        <h1 className={style.title}>test</h1>
        <ul className={style.keywordList}>
          <li className={style.keyword}>keyword1</li>
          <li className={style.keyword}>keyword1</li>
          <li className={style.keyword}>keyword1</li>
          <li className={style.keyword}>keyword1</li>
          <li className={style.keyword}>keyword1</li>
        </ul>
      </div>
      <div className={style.banner}>
        <img src="https://fakeimg.pl/720x1192/" alt="fake" />
      </div>
    </div>
  )
}

export default BannerContainer