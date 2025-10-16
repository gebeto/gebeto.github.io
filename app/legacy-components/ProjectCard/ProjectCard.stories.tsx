import type { Meta, StoryObj } from "@storybook/react-vite"

import { ProjectCard } from "./ProjectCard"
import { CardSizeEnum, ProjectMetadata } from "app/types"
import { Tile, TilesGrid } from "../Tiles"

const meta = {
  component: ProjectCard,
  render: args => (
    <TilesGrid>
      <Tile size={args.project.metadata.size} animated={false}>
        <ProjectCard {...args} />
      </Tile>
    </TilesGrid>
  ),
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

const defaultMetadata: ProjectMetadata = {
  title: "Test Project",
  link: "https://google.com",
  date: "2024-01-01",
  description: "description",
  size: CardSizeEnum.full,
  image: "",
  image_light: "",
  images: [],
  // github?: {
  //   owner: string,
  //   repo: string,
  //   path?: string,
  // },
}

export const Full: Story = {
  args: {
    project: {
      slug: "test-slug",
      content: "some content",
      metadata: {
        ...defaultMetadata,
        size: CardSizeEnum.full,
      },
    },
  },
}

export const Half: Story = {
  args: {
    project: {
      slug: "test-slug",
      content: "some content",
      metadata: {
        ...defaultMetadata,
        size: CardSizeEnum.half,
      },
    },
  },
}

export const HalfLarge: Story = {
  args: {
    project: {
      slug: "test-slug",
      content: "some content",
      metadata: {
        ...defaultMetadata,
        size: CardSizeEnum.half_large,
      },
    },
  },
}

export const HalfLong: Story = {
  args: {
    project: {
      slug: "test-slug",
      content: "some content",
      metadata: {
        ...defaultMetadata,
        size: CardSizeEnum.half_long,
      },
    },
  },
}
