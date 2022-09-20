import React from 'react'
import { ProductsContainer, ProductsH1, ProductsWrapper, ProductsCard, ProductsIcon, ProductsH2, ProductsP } from './ProductsElements'
import Product1 from '../../static/product1.png'
import Product2 from '../../static/product2.png'
const Products = () => {
  return (
    <>
      <ProductsContainer id='products'>
        <ProductsH1>Our Products</ProductsH1>
        <ProductsWrapper>
          <ProductsCard>
            <ProductsIcon src={Product1} />
            <ProductsH2>Crystal Club</ProductsH2>
            <ProductsP>Ea cupidatat id cupidatat aliqua dolore est ullamco commodo.</ProductsP>
          </ProductsCard>
          <ProductsCard>
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