import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import { FaHtml5 , FaRegSadTear} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none', textAlign:'center', marginTop: '20%' }}>
        <FaRegSadTear style={{fontSize:'80px'}} /> <br/>
        <p style={{marginTop:'20px', fontSize:'20px',fontFamily:'cursive'}}>
          Sorry, <br/> No products matched your filter!
        </p>

        <Link to='/products' className='btn' style={{marginTop:'25px',background:'#17594A',color:'white'}}>
          Back to all products
        </Link>
      </h5>
    )
  }
  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products}></GridView>
}

export default ProductList
