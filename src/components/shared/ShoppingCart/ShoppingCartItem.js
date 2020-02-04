import React from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

const ShoppingCartItem = ({ product }) => {
  
  return (
    <>
      {/* {console.log(product.item.product_image.thumbnail_url)} */}
      {product.item.product_image && (
        <CloudinaryContext cloudName="quickstlabs">
          <Image publicId={product.item.product_image.public_id}>
            <Transformation gravity="center" height="122" width="146" crop="fill" />
          </Image>
        </CloudinaryContext>
      )}
      <p>{product.quantity} </p>
      <p>{product.item.name} per {product.item.unit}</p>
    </>

  )
}

export default ShoppingCartItem;
