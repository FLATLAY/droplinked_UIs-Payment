import { useState } from "react";

import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { useToasty } from "../../../../context/toastify/ToastContext";
import { USER_TYPE } from "../../../../constant/user-types";
import { useApi } from "../../../../hooks/useApi/useApi";
import { postSHopifyDomain } from "../../../../apis/shopApiService";

import Product from "../../../../components/shared/Product/Product";

const ShopImsPage = ({ products, update, filter }) => {
  const [domain, setDomain] = useState("");
  const [loading, setLoadig] = useState(false);

  const { successToast } = useToasty();
  const { getAPi } = useApi();

  const importDomain = async () => {
    setLoadig(true);
    let result = await getAPi(postSHopifyDomain(domain));
    setLoadig(false);
    if (result) {
      successToast("Products added into the IMS");
      update();
    }
  };

  const changeDomain = (e) => setDomain(e.target.value);

  return (
    <Flex
      w="100%"
      justifyContent="center"
      flexDir="column"
      //  px={{ base: "0px", md: "80px" }}
      maxW="900px"
    >
      {products.length == 0 ? (
        <InputGroup
          mt="40px"
          mx="auto"
          size="md"
          maxW={{ base: "auto", md: "350px" }}
        >
          <Input
            pr="4.5rem"
            placeholder="Shopify domain"
            border="2px solid"
            _focus={{ borderColor: "primary" }}
            onChange={changeDomain}
            value={domain}
            color="#fff"
          />
          <InputRightElement width="5rem">
            <Button
              h="1.75rem"
              size="sm"
              bgColor="primary"
              color="#fff"
              onClick={importDomain}
            >
              {loading == false ? "Import" : <Spinner />}
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Flex w="100%" flexWrap="wrap">
          {products
            .filter((pr) => pr.shopifyData.title.toLowerCase().includes(filter))
            .map((product) => (
              <Box
                key={product._id}
                mt="40px"
                w={{ base: "100%", sm: "50%", md: "33%", lg: "25%" }}
              >
                <Product
                  title={product.shopifyData.title}
                  imageUrl={product.shopifyData.images[0].src}
                  id={product._id}
                  type={USER_TYPE.PRODUCER}
                />
              </Box>
            ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ShopImsPage;
