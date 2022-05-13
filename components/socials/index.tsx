import { HStack, Link } from "@chakra-ui/react";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "../icons";

interface SocialsProps {
  telegram: string;
  twitter: string;
  discord: string;
}

export const Socials: React.FC<SocialsProps> = ({
  telegram,
  twitter,
  discord,
}) => {
  return (
    <HStack gap="10px">
      <Link href={telegram}>
        <TelegramIcon boxSize="24.75px" />
      </Link>
      <Link href={discord}>
        <DiscordIcon boxSize="28px" />
      </Link>
      <Link href={twitter}>
        <TwitterIcon h="21.75px" w="24.75px" />
      </Link>
    </HStack>
  );
};
