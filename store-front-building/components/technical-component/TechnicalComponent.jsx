import { Box } from "@chakra-ui/react";

import { ComponentWrapper, ComponentTitle } from "../../Add-product-style";

import CollectionComponent from "./CollectionComponent";
import ShippingComponent from "./ShippingComponent";

const TechnicalComponent = ({ TechnicalData, dispatchTechnical }) => {
  return (
    <ComponentWrapper>
      <ComponentTitle>Technical information</ComponentTitle>
      <Box mb="36px" />
      <CollectionComponent
        TechnicalData={TechnicalData}
        dispatchTechnical={dispatchTechnical}
      />
      <Box mb="24px" />
      <ShippingComponent  TechnicalData={TechnicalData} dispatchTechnical={dispatchTechnical} />
    </ComponentWrapper>
  );
};

export default TechnicalComponent;
