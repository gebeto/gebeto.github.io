export type Project = {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    link: string;
    description: string;
    size: 'full' | 'half';
    image: {
      publicURL: string;
    };
    images: {
      publicURL: string;
    }[];
  };
};
