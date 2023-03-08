

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCurrentShop } from "../../../store/shop/shop.selector";
import { SHOP_TYPES } from "../../../constant/shop-types";
import { useApi } from "../../../hooks/useApi/useApi"
import { getProduct } from "../../../apis/productsApiService";
import {
  ImsPageWrapper,
  HeaderTitle,
  MerchCounter,
} from "./Inventory-page-style";

import Loading from "../../../components/shared/loading/Loading";
import DroplinkedImsPage from "./droplinked ims page/droplink-ims-page";
import ShopImsPage from "./shopify-ims-page/shopify-ims-page";
import SeachBox from "./search-box/Search-box-component";

function InventoryPage() {
  //states
  const shop = useSelector(selectCurrentShop);
  const [products, setProdcuts] = useState(null);
  const [filter, setFilter] = useState("");
  //hooks
  const { getApi } =useApi()

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let productResult = await getApi(getProduct())
    if(productResult)setProdcuts(productResult);
  };

  const changeFilter = (e) => setFilter(e.target.value.toLowerCase());

  return (
    <ImsPageWrapper>
      <HeaderTitle>Merchandise</HeaderTitle>
      <MerchCounter>
        {products != undefined ? products.length : "0"} Listed
      </MerchCounter>
      <SeachBox change={changeFilter} />
      {products ? (
        <>
          {shop != null && (
            <>
              {shop.imsType == SHOP_TYPES.DROPLINKED ? (
                <DroplinkedImsPage products={products} filter={filter} />
              ) : (
                <ShopImsPage
                  products={products}
                  update={getData}
                  filter={filter}
                />
              )}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </ImsPageWrapper>
  );
}

export default InventoryPage;
