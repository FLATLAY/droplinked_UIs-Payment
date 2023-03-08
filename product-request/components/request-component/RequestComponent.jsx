import { Box, Flex, Image, Text } from "@chakra-ui/react";

import {
  TextComponent,
  RequestButton,
  ShopImage,
  RequestComponentWrapper,
  ProductImage,
  LineComponent,
} from "./request-style";

const RequestComponent = ({ request }) => {
  return (
    <RequestComponentWrapper>
      <Flex>
        <Box w="200px" pr="36px" borderRight="1px solid" borderColor="line">
          <ShopImage src={request.shopData.imageUrl} />
          <Box mb="8px"></Box>
          <Text fontSize="14px" fontWeight="700" color="primary">
            {request.shopData.shopName}
          </Text>
        </Box>
        <Flex w="100%" pl="36px" justifyContent="space-between">
          <Flex>
            <ProductImage src={request.product.imageUrl} />
            <Flex flexDir="column" h="100%" justifyContent="space-between">
              <TextComponent>{request.product.title}</TextComponent>

              <Flex>
                <TextComponent>
                  {request.product.options[0].variantName}:{" "}
                  {request.product.options[0].value}
                </TextComponent>
                <LineComponent />
                <TextComponent>
                  Quantity: {request.product.quantity}
                </TextComponent>
                <LineComponent />
                <TextComponent>
                  Commision: {request.product.Commision}%
                </TextComponent>
              </Flex>

              <TextComponent>Price: {request.product.price}ETH</TextComponent>
              <TextComponent>Your earning: 12 ETH /each</TextComponent>
            </Flex>
          </Flex>

          <Flex
            w="auto"
            flexDir="column"
            justifyContent="space-between"
            h="100%"
          >
            <RequestButton bg="primaryDark" color="primary">
              Accept
            </RequestButton>

            <RequestButton bg="mainLayer" color="lightGray">
              Reject
            </RequestButton>
          </Flex>
        </Flex>
      </Flex>
    </RequestComponentWrapper>
  );
};

export default RequestComponent;
