import { ImageField, RichTextField, Slice } from "@prismicio/client";

export type PrismicGenericSlice = Slice<
  "generic",
  {
    header: string;
    content: RichTextField;
    image: ImageField;
    image_position: "left" | "right";
    extended_image: boolean;
  }
>;
