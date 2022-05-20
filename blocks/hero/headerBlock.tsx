import { HStack, Link } from "@chakra-ui/react";
import { Logo } from "components/logo";
import { Socials } from "components/socials";

export interface HeaderBlockProps {
  rootUrl?: string;
  telegramUrl?: string;
  discordUrl?: string;
  twitterUrl?: string;
  mediumUrl?: string;
  githubUrl?: string;
}

export const HeaderBlock: React.FC<HeaderBlockProps> = ({ rootUrl }) => {
  return (
    <HStack
      justifyContent="space-between"
      w="100%"
      mb={{ xl: "20px", lg: "20px", md: "60px", base: "100px" }}
    >
      <Link href={rootUrl}>
        <Logo />
      </Link>

      <Socials />
    </HStack>
  );
};
