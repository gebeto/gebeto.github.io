import { BlogPosts } from "app/components/posts"
import { Blurry } from "./components/Blurry"
import { PageLayout } from "./components/PageLayout"

export default function Page() {
  return (
    <PageLayout location={{ pathname: "/" }} title="Home">
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Portfolio
        </h1>
        <p className="mb-4">
          {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </PageLayout>
  )
}
