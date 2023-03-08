import { useReducer, useState } from "react";

import { SHIPING_TYPES } from "../../../constant/shipping-types";
import { productIntroReducer } from "./reducer/product-intro-reducer";
import { productTechReducer } from "./reducer/technical-data-reducer";
import { PageWrapper } from "./BuildPage-style";

import ProductIntoComponent from "./components/product-intro-component/ProductIntoComponent";
import TechnicalComponent from "./components/technical-component/TechnicalComponent";
import PropertiesComponent from "./components/properties-component/PropertiesComponent";
import VariantsComponent from "./components/variants-component/VariantsComponent";
import ButtonComponent from "./components/buttons-component/ButtonComponent";

const initialProductIntor = {
  title: "",
  description: "",
  media: [],
};

const initialTechnicalInfo = {
  productCollectionID: "",
  shippingType: SHIPING_TYPES.EASY_POST,
  shippingPrice: 0,
};

function BuildPage() {
  const [productIntro, dispatchIntro] = useReducer(
    productIntroReducer,
    initialProductIntor
  );

  const [TechnicalData, dispatchTechnical] = useReducer(
    productTechReducer,
    initialTechnicalInfo
  );
  const [OptionList, setOptionList] = useState([]);
  const [skus, setSkus] = useState([]);

  return (
    <PageWrapper>
      <ProductIntoComponent
        productIntro={productIntro}
        dispatchIntro={dispatchIntro}
      />
      <TechnicalComponent
        TechnicalData={TechnicalData}
        dispatchTechnical={dispatchTechnical}
      />
      <PropertiesComponent
        OptionList={OptionList}
        setOptionList={setOptionList}
      />
      <VariantsComponent
        OptionList={OptionList}
        skus={skus}
        setSkus={setSkus}
      />
      <ButtonComponent productIntro={productIntro} TechnicalData={TechnicalData} skus={skus} />
    </PageWrapper>
  );
}

export default BuildPage;
