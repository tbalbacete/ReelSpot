import { useState } from "react";
import { Image, Text } from "@mantine/core";

type Props = {
  imagePath: string;
  title?: string;
};

//TODO: Make this work?
export const LazyImage: React.FC<Props> = ({ imagePath, title }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      height={"13.5rem"}
      onLoad={() => setIsLoaded(true)}
      src={
        isLoaded
          ? `https://image.tmdb.org/t/p/original/${imagePath}`
          : "./popcorn.svg"
      }
      onClick={(e) => e.stopPropagation()}
      withPlaceholder
      placeholder={
        <Text sx={{ height: "10rem" }} align="center">
          {title}
        </Text>
      }
    />
  );
};
