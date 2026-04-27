declare module "*.mdx" {
  import type { ComponentType } from "react";
  const Component: ComponentType;
  export const frontmatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
    readTime?: string;
  };
  export default Component;
}
