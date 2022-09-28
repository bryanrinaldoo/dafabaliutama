import React from 'react'
import { ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsH2, ProductsP } from './ProductsElements'
import { productCC, productS5 } from './DataProduct'
import Product1 from '../../static/product1.png'
import Product2 from '../../static/product2.png'
const Products = ({openModal}) => {
  return (
    <>
      <ProductsContainer id='products'>
        <ProductsH1>Our Products</ProductsH1>
        <ProductsWrapper>
          <ProductsCard onClick={() => openModal(productCC)}>
            <ProductsIcon src={Product1} />
            <ProductsH2>Crystal Club</ProductsH2>
            <ProductsP>Ea cupidatat id cupidatat aliqua dolore est ullamco commodo.</ProductsP>
          </ProductsCard>
          <ProductsCard onClick={() => openModal(productS5)}> 
            <ProductsIcon src={Product2} />
            <ProductsH2>Stag 5</ProductsH2>
            <ProductsP>Ea cupidatat id cupidatat aliqua dolore est ullamco commodo.</ProductsP>
          </ProductsCard>
        </ProductsWrapper>
       
      </ProductsContainer>
    </>
  )
}

export default Products