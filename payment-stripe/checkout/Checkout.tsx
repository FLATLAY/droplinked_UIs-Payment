//Global
import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Internal
import {
  PageTitle,
  ContinueShippngText,
  ProductPrice,
  DiscardButton,
} from "./Checkout-style";
import { useCart } from "../../../../hooks/useCart/useCart";
import { useApi } from "../../../../hooks/useApi/useApi";
import { postCreateCheckout } from "../../../../apis/checkoutsApi";
//component
import BasicButton, {
  BUTTON_TYPE,
} from "../../components/basic-button/BasicButton";

import CheckoutAddressComponent from "./components/CheckoutAddressComponent";
import CheckoutItemsComponent from "./components/CheckoutItemsComponent";
import StripeComponent from "./components/StripeComponent";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const MerchandiseCheckoutPage = () => {
  //state
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const { postApi } = useApi();
  const { cartItems, cart } = useCart();


  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret: clientSecret,
  };

  const getTotalPrice = () => {
    return (cart.totalPriceCart + cart.selectedEasyPostShipmentRate).toFixed(2);
  };


  const clickOnCreditCard = async () => {
    setLoading(true)
    const result = await postApi(postCreateCheckout());
    setLoading(false)
    setClientSecret(result.client_secret);
  };


  return (
    <>
      <Flex
        mb="32px"
        pt="32px"
        alignItems="center"
        justifyContent="space-between"
      >
        <PageTitle>Checkout</PageTitle>
        <ContinueShippngText onClick={() => {}}>
          Continue shopping
        </ContinueShippngText>
      </Flex>

      {cartItems && <CheckoutItemsComponent items={cartItems} />}

      <CheckoutAddressComponent
        addressID={cart.checkoutAddressID}
        shippingPrice={cart.selectedEasyPostShipmentRate}
      />

      <Box border="1px solid #E9E9E2" mb="32px"></Box>
      <Flex flexDir="column">
        <Flex flexFlow="row-reverse" alignItems="flex-end" mb="16px">
          <ProductPrice>${cart.totalPriceCart.toFixed(2)}</ProductPrice>
          <Text fontFamily="Manrope" fontWeight="400" fontSize="16px">
            Subtotal:
          </Text>
        </Flex>

        <Flex flexFlow="row-reverse" alignItems="flex-end" mb="64px">
          <ProductPrice>$0.0</ProductPrice>
          <Text fontFamily="Manrope" fontWeight="400" fontSize="16px">
            Estimated Taxes:
          </Text>
        </Flex>

        <Flex flexFlow="row-reverse" alignItems="flex-end" mb="32px">
          <ProductPrice>${getTotalPrice()}</ProductPrice>
          <Text fontFamily="Manrope" fontWeight="400" fontSize="16px">
            Total payment:
          </Text>
        </Flex>

        <Flex
          flexFlow="row-reverse"
          alignItems="center"
          gap={{ base: "8px", lg: "32px" }}
          mb={{ base: "32px", lg: "0px" }}
        >
          <BasicButton
            click={() => {}}
            width="auto"
            maxWidth="auto"
            type={BUTTON_TYPE.DARK}
            loading={loading}
          >
            Cryptopayment
          </BasicButton>
          <BasicButton
            click={clickOnCreditCard}
            width="auto"
            maxWidth="auto"
            type={BUTTON_TYPE.DARK}
            loading={loading}
          >
            Credit Card
          </BasicButton>
          <DiscardButton>Discard</DiscardButton>
        </Flex>
      </Flex>
      {clientSecret.length > 0 && (
        <Elements stripe={stripePromise} options={options}>
          <StripeComponent />
        </Elements>
      )}
    </>
  );
};

export default MerchandiseCheckoutPage;
