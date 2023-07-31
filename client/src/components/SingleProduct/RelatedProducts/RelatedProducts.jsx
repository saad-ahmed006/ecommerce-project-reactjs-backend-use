import React, { useEffect,useState } from 'react'
import Products from '../../Products/Products'
import { fetchDataFromApi } from '../../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedProductSuccess } from '../../../store/HomeSlice'

export default function RelatedProducts({ productId, categoryId }) {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)

  const { relatedproduct } = useSelector((state) => state.home.relatedproduct)

  const fetchSingleProdData = async () => {
    try {
      const res = await fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
      dispatch(getRelatedProductSuccess({ relatedproduct: res.data }))
      setloading(false)
      
    } catch (error) {
      console.log(error);
      setloading(false)
    }
  
  }
  useEffect(() => {
    fetchSingleProdData()
  }, [categoryId,productId])

  return (
    <div><Products innerHeading={true} headindText={'Related Products'} products={relatedproduct} loading={loading}/></div>
  )
}
