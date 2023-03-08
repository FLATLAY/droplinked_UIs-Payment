import { Box, Flex } from "@chakra-ui/react";

import { SHIPING_TYPES } from "../../../../../constant/shipping-types";
import {
  Text16px,
  SelectComponent,
  OptionComponent,
  InputComponent,
} from "../../Add-product-style";

const ShippingComponent = ({ TechnicalData, dispatchTechnical }) => {
  const changeShippingDropdown = (e) =>
    dispatchTechnical({ type: "updateShippingType", payload: e.target.value });

  const changeShippingPrice = (e) =>
    dispatchTechnical({
      type: "updateShippingPrice",
      payload: parseFloat(e.target.value),
    });

  return (
    <>
      <Text16px>Shipping</Text16px>
      <Box mb="16px" />
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        gap="14px"
      >
        <SelectComponent
          value={TechnicalData.shippingType}
          onChange={changeShippingDropdown}
        >
          <OptionComponent value={SHIPING_TYPES.EASY_POST}>
            {SHIPING_TYPES.EASY_POST}
          </OptionComponent>
          <OptionComponent value={SHIPING_TYPES.CUSTOM}>
            {SHIPING_TYPES.CUSTOM}
          </OptionComponent>
        </SelectComponent>

        {TechnicalData.shippingType == SHIPING_TYPES.CUSTOM && (
          <InputComponent
            type="number"
            value={TechnicalData.shippingPrice}
            placeholder="Shipping price"
            onChange={changeShippingPrice}
          />
        )}
      </Flex>
    </>
  );
};

export default ShippingComponent;
