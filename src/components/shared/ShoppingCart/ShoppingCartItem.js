import React from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

const ShoppingCartItem = ({ product }) => {
  
  return (
    <>
      {/* {console.log(product.item.product_image.thumbnail_url)} */}
      {product.item.product_image && (
        <CloudinaryContext cloudName="quickstlabs">
          <Image publicId={product.item.product_image.thumbnail_url}>
            <Transformation gravity="center" height="318" width="1062" crop="fill" />
          </Image>
        </CloudinaryContext>
      )}
      <p>{product.quantity} {product.item.name}</p>
    </>

  )
}

export default ShoppingCartItem;
