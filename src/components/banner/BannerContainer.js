import React from 'react'
import { data } from '../../data'
import style from '../../css/banner.module.scss'

const {title, keywordList, backgroundColor } = data

const renderKeyword = () => (keywordList.map(({ id, text, link }) => (<li key={id} className={style.keyword}>
  <a href={link}>{text}</a>
</li>)))

const BannerContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.wallpaper} style={{ backgroundColor }}>
        <div className={style.bookMark}>主題推薦</div>
        <h1 className={style.title}>{ title }</h1>
        <ul className={style.keywordList}>
          {renderKeyword()}
        </ul>
      </div>
      <div className={style.banner}>
        <img src="https://fakeimg.pl/720x1192/" alt="fake" />
      </div>
    </div>
  )
}

export default BannerContainer