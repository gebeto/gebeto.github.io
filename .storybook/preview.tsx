import type { Preview } from "@storybook/nextjs-vite"
import "../app/global.css"
import "../app/normalize.css"
import { karlaFont } from "../app/font"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <div className={karlaFont.className}>
        <Story />
      </div>
    ),
  ],
}

export default preview
