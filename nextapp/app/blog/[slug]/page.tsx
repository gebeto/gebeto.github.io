import { notFound } from "next/navigation"
import { CustomMDX } from "app/components/mdx"
import { getProjects } from "app/blog/serverUtils"
import { baseUrl } from "app/sitemap"
import { formatDate } from "../utils"
import { Blurry } from "../../components/Blurry"

export async function generateStaticParams() {
  let posts = getProjects()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  let post = getProjects().find(post => post.slug === params.slug)
  if (!post) {
    return
  }

  let { title, date: publishedTime, image } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og/${encodeURIComponent(title)}`

  return {
    title,
    description: "(No description)",
    openGraph: {
      title,
      description: "(No description)",
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "(No description)",
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getProjects().find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: "(No description)",
            image: `${baseUrl}${post.metadata.image}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.date)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
