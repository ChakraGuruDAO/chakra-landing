import {
  Container,
  Stack,
  ButtonGroup,
  IconButton,
  Text,
  Box,
} from "@chakra-ui/react";
import { Logo } from "components/logo";

export const FooterBottom = () => {
  return (
    <Box bg="dark.100">
      <Container as="footer" role="contentinfo" py={{ base: "20px" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Logo />
            <Text fontSize={{ base: "9px", md: "sm" }} color="white">
              &copy; {new Date().getFullYear()} Chakra Guru DAO.{" "}
              <Box as="br" display={{ base: "block", md: "none" }} /> All rights
              reserved.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
