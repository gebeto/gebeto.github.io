import React from "react"
import { Transition, TransitionStatus } from "react-transition-group"

const duration = 500
const transitionStyles: Partial<Record<TransitionStatus, React.CSSProperties>> =
  {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

export function Fade({
  in: inProp = false,
  duration = 500,
  delay = 0,
  children,
}: {
  in?: boolean
  duration?: number
  delay?: number
  children: React.ReactElement
}) {
  const [isIn, setIsIn] = React.useState(inProp)
  const nodeRef = React.useRef(null)

  const defaultStyle: React.CSSProperties = React.useMemo(
    () => ({
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }),
    [duration, delay]
  )

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
            ...defaultStyle,
            ...transitionStyles[state],
          },
        })
      }
    </Transition>
  )
}
