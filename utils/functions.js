export const formatPrice = price => {
  return (
    '$ ' +
    price
      .toString()
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ',')
  )
}

export const getElement = (list, id) => {
  return new Promise((resolve, reject) => {
    if (list.find(item => item.id === id)) {
      resolve(
        list.find(item => {
          return item.id === id
        })
      )
    } else {
      const error = new Error('No existe este elemento')
      reject(error)
    }
  })
}
