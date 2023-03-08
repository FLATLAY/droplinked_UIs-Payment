import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Button, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useToastify } from "../../../../../context/toastify/ToastifyContext";
import { ModalContainer } from "./StripeComponent-style";

import ModalWrapper from "../../../../../modal/modal-wrapper/ModalWrapper";
import BasicButton, {
  BUTTON_TYPE,
} from "../../../components/basic-button/BasicButton";

const StripeComponent = () => {
  //state
  const [loading, setLoading] = useState(false);
  //hook
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { shopName } = useParams();
  const { errorToast } = useToastify();

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/${shopName}?redirect_status=succeeded`,
      },
    });
    setLoading(false);
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      errorToast(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const clickCancel = () => navigate(`/${shopName}`);

  return (
    <ModalWrapper show={true} close={() => {}}>
      <ModalContainer>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <Flex w="100%" justifyContent="space-between" pt="24px">
            <BasicButton
              type={BUTTON_TYPE.LIGHT}
              click={clickCancel}
              loading={loading}
              width="200px"
              maxWidth="200px"
            >
              Cancel
            </BasicButton>

            <Button
              disabled={!stripe}
              p="8px 16px"
              color={"#FFFFFF"}
              w='200px'
              bg={"#27262B"}
              border="1px solid"
              borderRadius="4px"
              fontFamily="Manrope"
              fontSize="16px"
              fontWeight="400"
              borderColor="#27262B"
              onClick={handleSubmit}
            >
              {loading ? (
                <Spinner size="sm" thickness="2px" color={"#FFFFFF"} />
              ) : (
                "Submit"
              )}
            </Button>
          </Flex>
          {/* <button disabled={!stripe}>Submit</button> */}
        </form>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default StripeComponent;
