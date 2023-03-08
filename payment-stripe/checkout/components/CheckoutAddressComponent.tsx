//Global
import { useState , useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
//Internal
import { ProductsWrapper, ProductPrice, ProductTitle } from "../Checkout-style";
import { useApi } from "../../../../../hooks/useApi/useApi";
import { getAddressBookById } from "../../../../../apis/addressApi";
import Loading, {
  LOADING_SIZE,
} from "../../../../../components/loading/Loading";


const CheckoutAddressComponent = ({ addressID,shippingPrice }: { addressID: string;shippingPrice:number }) => {
  const [address, setAddress] = useState<any>(null);

 const { getApi }=  useApi()

  const getAddressBooks = async() => {
    const result = await getApi(getAddressBookById(addressID))
    setAddress(result)
  }

  useEffect(()=>{
    getAddressBooks()
  },[])




  if (!address)
    return (
      <Flex w="100%" alignItems="center" justifyContent="center">
        <Loading size={LOADING_SIZE.MEDIUM} />
      </Flex>
    );

  return (
    <ProductsWrapper>
      <Flex alignItems="center" mb="16px">
        <ProductTitle wordBreak="break-all">
          {address.country} - {address.city}, {address.firstName}{" "}
          {address.lastName}
        </ProductTitle>
      </Flex>
      <ProductPrice wordBreak="break-all">{address.address1}</ProductPrice>
      <Box mb="16px"></Box>
      <Flex
        alignItems={{ base: "start", lg: "center" }}
        justifyContent="space-between"
        mb="16px"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex mb={{ base: "16px", lg: "0px" }}>
          {" "}
          <ProductPrice> {address.city} </ProductPrice>{" "}
          <ProductPrice>{address.zip}</ProductPrice>
        </Flex>
        <Flex>
          <ProductTitle>Shipping Price: </ProductTitle>
          <ProductPrice>${shippingPrice}</ProductPrice>
        </Flex>
      </Flex>
      <Box w="100%" border="1px solid #E9E9E2" mb="16px"></Box>

      {/* <Flex w="100%" justifyContent="center">
        <ProductTitle>Waiting for payment</ProductTitle>
      </Flex> */}
    </ProductsWrapper>
  );
};

export default CheckoutAddressComponent;
