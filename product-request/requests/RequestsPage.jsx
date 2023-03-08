import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { useApi } from "../../../hooks/useApi/useApi";
import { getRequests } from "../../../apis/orderApiService";

import Loading from "../../../components/shared/loading/Loading";

import RequestComponent from "../components/request-component/RequestComponent";

const RequestsPage = () => {
  const [requests, setRequests] = useState(null);

  const { getAPi } = useApi();

  useEffect(async () => {
    let result = await getAPi(getRequests());
    if (result) setRequests(result);
  }, []);

  if (!requests) return <Loading />;

  return (
    <Box w="100%" px="36px">
      {result.map((request, i) => {
        return <RequestComponent key={i} request={request} />;
      })}
    </Box>
  );
};

export default RequestsPage;
