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
            <Text fontSize="sm" color="white">
              &copy; {new Date().getFullYear()} Chakra Guru DAO. All rights
              reserved.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
