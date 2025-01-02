import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[]
}) {
  console.log(" >> SDSDS", allPostsData)
  return (
    <>
      <section>
        <h2>SUS</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <a href={`/posts/${id}`}>{title}</a>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
