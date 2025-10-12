import { Projects } from "app/components/posts"
import { Blurry } from "./components/Blurry"
import { PageLayout } from "./components/PageLayout"

export default function Page() {
  return (
    <PageLayout location={{ pathname: "/" }}>
      <Projects />
    </PageLayout>
  )
}
