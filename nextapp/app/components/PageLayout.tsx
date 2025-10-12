"use client"

import React from "react"
import Link from "next/link"

import { Blurry } from "./Blurry"
import { Bio } from "app/legacy-components/Bio"

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
  // const rootPath = `${__PATH_PREFIX__}/`
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  const header = React.useMemo(() => {
    if (isRootPath) {
      return (
        <h1 className="main-heading">
          <Link href="/">{title}</Link>
        </h1>
      )
    } else {
      return (
        <Link className="header-link-home" href="/">
          {title}
        </Link>
      )
    }
  }, [])

  const [shown, setShown] = React.useState(false)

  React.useEffect(() => setShown(true), [])

  return (
    <>
      <div className="container" data-is-root-path={isRootPath}>
        <Blurry shown={shown} color="ukraine" />
        {/* <header>{header}</header> */}
        <Bio />
        <main>{children}</main>
        {/* <Footer>© {new Date().getFullYear()}, Built by gebeto.</Footer> */}
      </div>
    </>
  )
}
