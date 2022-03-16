import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import { Project } from "../../types";

import { TileFullWrapper } from './TileFull';
import { TileHalfWrapper } from './TileHalf';


export type TileProps = {
  project: Project;
};


const tileBySize = {
  full: TileFullWrapper,
  half: TileHalfWrapper,
}


const TileTitle = styled.h2`
  margin-bottom: 8px;
`;


export const Tile: React.FC<TileProps> = ({ project }) => {
  const title = project.frontmatter.title || project.fields.slug
  const size = project.frontmatter.size || 'full';
  const image = project.frontmatter.image;
  const imageDark = project.frontmatter.image_dark;
  const TileWrapper = tileBySize[size];

  // eslint-disable-next-line
  const randomImage = React.useMemo(() => {
    const images = project.frontmatter.images || [project.frontmatter.image];
    const imageIndex = Math.floor(Math.random() * images.length);
    const randomImage = project.frontmatter.images ? project.frontmatter.images[imageIndex] : project.frontmatter.image;
    return randomImage;
  }, [project]);

  return (
    <TileWrapper>
      <div className="tile-image">
        <picture>
          <source srcSet={imageDark?.publicURL} media="(prefers-color-scheme: dark)"/>
          <img src={image.publicURL} alt="project" />
        </picture>
      </div>
      <article className="tile-details" itemScope itemType="http://schema.org/Article">
        <header>
          <TileTitle>
            {project.frontmatter.link ? (
              <a href={project.frontmatter.link} target="_blank">
                <span itemProp="headline">{title}</span>
              </a>
            ) : (
              <Link to={project.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            )}
          </TileTitle>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: project.frontmatter.description || project.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </TileWrapper>
  );
}
