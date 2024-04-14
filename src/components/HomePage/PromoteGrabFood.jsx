import React from "react";
import { Flex, Box } from "react-bootstrap";
import SliderPromote from "./SliderPromote";

const PromoteGrabFood = ({ address }) => {
  return (
    <Flex justifyContent={"center"}>
      <Box width={"100%"}>
        <Flex
          fontWeight={"bold"}
          fontSize={{ base: 24, md: 36 }}
          m={0}
          mb={10}
          gap={10}
        >
          <span>Ưu đãi GrabFood tại</span>
          <span style={{ color: "#00B14F" }}>{address}</span>
        </Flex>
        <Box>
          <SliderPromote />
        </Box>
      </Box>
    </Flex>
  );
};

export default PromoteGrabFood;
