import React from "react"
import { Transition, TransitionStatus } from "react-transition-group"

export function BaseTransition({
  in: inProp = false,
  duration = 500,
  delay = 0,
  children,
  defaultStyles,
  states,
}: {
  in?: boolean
  duration?: number
  delay?: number
  children: React.ReactElement
  defaultStyles: React.CSSProperties
  states: Partial<Record<TransitionStatus, React.CSSProperties>>
}) {
  const [isIn, setIsIn] = React.useState(inProp)
  const nodeRef = React.useRef(null)

  React.useEffect(() => {
    setTimeout(() => {
      setIsIn(true)
    }, delay)
  }, [])

  return (
    <Transition nodeRef={nodeRef} in={isIn} timeout={duration}>
      {state =>
        React.cloneElement(children, {
          ref: nodeRef,
          ...children.props,
          dataSUS: state,
          style: {
            ...defaultStyles,
            ...states[state],
          },
        })
      }
    </Transition>
  )
}

export function Fade(props: {
  in?: boolean
  duration?: number
  delay?: number
  children: React.ReactElement
}) {
  const defaultStyles: React.CSSProperties = React.useMemo(
    () => ({
      transition: `opacity ${props.duration}ms ease-in-out`,
      opacity: 0,
    }),
    [props.duration]
  )

  const states: Partial<Record<TransitionStatus, React.CSSProperties>> =
    React.useMemo(
      () => ({
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      }),
      []
    )

  return (
    <BaseTransition {...props} states={states} defaultStyles={defaultStyles} />
  )
}

export function FadeAndSlide({
  duration = 500,
  ...props
}: {
  in?: boolean
  duration?: number
  delay?: number
  children: React.ReactElement
}) {
  const defaultStyles: React.CSSProperties = React.useMemo(
    () => ({
      transition: [
        `opacity ${duration - 300}ms 300ms ease-in-out`,
        `transform ${duration}ms ease-in-out`,
      ].join(", "),
      opacity: 0,
      transform: "translateX(-6px)",
    }),
    [duration]
  )

  const states: Partial<Record<TransitionStatus, React.CSSProperties>> =
    React.useMemo(
      () => ({
        entering: { opacity: 1, transform: "translateX(0px)" },
        entered: { opacity: 1, transform: "translateX(0px)" },
        exiting: { opacity: 0, transform: "translateX(-6px)" },
        exited: { opacity: 0, transform: "translateX(-6px)" },
      }),
      []
    )

  return (
    <BaseTransition {...props} states={states} defaultStyles={defaultStyles} />
  )
}
