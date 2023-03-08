//Global
import { Box, Flex, Image } from "@chakra-ui/react";
//Internal
import {
  ProductsWrapper,
  FlexRow,
  ProductTitle,
  ProductPrice,
} from "../Checkout-style";
import { getProductTitle } from "../../../../../utils/product-utils";

const CheckoutItemsComponent = ({ items }: { items: any }) => {
  return (
    <ProductsWrapper>
      {items.map((item: any, i: number) => {
        return (
          <>
            <FlexRow>
              <Flex gap="10px" alignItems="center">
                <Image
                  src={item.product.media[0].url}
                  w="64px"
                  h="64px"
                  borderRadius="8px"
                />
                <ProductTitle>{getProductTitle(item.product)}</ProductTitle>
              </Flex>
              <ProductPrice>*{item.quantity}</ProductPrice>
              <ProductPrice>${item.skuID.price}</ProductPrice>
            </FlexRow>
            {i != items.length - 1 && (
              <Box border="1px solid" borderColor="#E9E9E2" my="16px"></Box>
            )}
          </>
        );
      })}
    </ProductsWrapper>
  );
};

export default CheckoutItemsComponent;
