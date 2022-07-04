const generateRandomProd = (prodCount) => {
  const prod = []
  for (let id = 0; id < prodCount; id++){
    prod.push({
      id,
      title: `商品${id}`,
      imageSrc: "https://fakeimg.pl/180/",
      imageAlt: `prod${id}`,
      price: Math.floor(Math.random()*1000),
      link:"https://fakeimg.pl/180/"
    })
  }

  return prod
}

const generateKeyword = (keywordCount) => {
    const keyword = []
  for (let id = 0; id < keywordCount; id++){
    keyword.push({
      id,
      text: `關鍵字${id}`,
      link:"https://fakeimg.pl/180/"
    })
  }

  return keyword
}

export const data = {
  title: "test",
  keywordList: generateKeyword(7),
  backgroundColor: "#CCF",
  prodList:generateRandomProd(12)
}