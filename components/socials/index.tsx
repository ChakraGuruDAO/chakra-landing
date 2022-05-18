import { HStack, Link, StackProps } from "@chakra-ui/react";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "../icons";

interface SocialsProps extends StackProps {
  telegram?: string;
  twitter?: string;
  discord?: string;
}

export const Socials: React.FC<SocialsProps> = ({
  telegram = "#",
  twitter = "#",
  discord = "#",
  ...props
}) => {
  return (
    <HStack gap="10px" {...props}>
      <Link href={telegram}>
        <TelegramIcon color="brand.100" boxSize="24.75px" />
      </Link>
      <Link href={discord}>
        <DiscordIcon color="brand.100" boxSize="28px" />
      </Link>
      <Link href={twitter}>
        <TwitterIcon color="brand.100" h="21.75px" w="24.75px" />
      </Link>
    </HStack>
  );
};
