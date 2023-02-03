import * as React from "react"
import { Link } from "gatsby"

import { Baseline } from "./Baseline"
import { Container } from "./Container"
import { Footer } from "./Footer"
import { Blurry } from "./Blurry"

export type PageLayoutProps = {
  children: React.ReactNode
  title?: string
  location: {
    pathname: string
  }
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  location,
  title,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const [shown, setShown] = React.useState(false)

  React.useEffect(() => setShown(true), [])

  return (
    <>
      <Baseline />
      <Container data-is-root-path={isRootPath}>
        <Blurry className={shown ? "shown" : undefined} color="ukraine" />
        <header>{header}</header>
        <main>{children}</main>
        {/* <Footer>© {new Date().getFullYear()}, Built by gebeto.</Footer> */}
      </Container>
    </>
  )
}
