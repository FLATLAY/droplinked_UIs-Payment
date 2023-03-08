import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";


import { Text16px } from "../../Add-product-style";
import { useApi } from "../../../../../hooks/useApi/useApi";
//import { getCollections } from "../../../../../api-service/collections/collectionApiService";
import { getUsersCollections } from "../../../../../apis/collectionApiService";
import { CollectionContainer, CollectionItem } from "../../Add-product-style";


const CollectionComponent = ({ TechnicalData, dispatchTechnical }) => {
  const { getApi } = useApi();

  const [collectionList, setCollectionList] = useState([]);

  useEffect(async () => {
    let result = await getApi(getUsersCollections());
    if (result) setCollectionList(result);
  }, []);

  const selectCollection = (collectionId) =>
    dispatchTechnical({ type: "updateCollectionId", payload: collectionId });

  const isSelected = (collection) => {
    return TechnicalData.productCollectionID &&
      collection._id == TechnicalData.productCollectionID
      ? true
      : false;
  };

  return (
    <>
      <Text16px>Collection</Text16px>
      <Box mb="16px" />

      <CollectionContainer>
        <CollectionItem
          cursor="default"
          bg={TechnicalData.productCollectionID == "" ? "primary" : "mainLayer"}
          color={
            TechnicalData.productCollectionID == "" ? "primaryDark" : "darkGray"
          }
        >
          Select one
        </CollectionItem>
        {collectionList.map((collection) => {
          return (
            <CollectionItem
              onClick={() => {
                selectCollection(collection._id);
              }}
              key={collection._id}
              value={collection._id}
              bg={isSelected(collection) ? "primary" : "mainLayer"}
              color={isSelected(collection) ? "primaryDark" : "darkGray"}
            >
              {collection.title}
            </CollectionItem>
          );
        })}
      </CollectionContainer>
    </>
  );
};

export default CollectionComponent;
