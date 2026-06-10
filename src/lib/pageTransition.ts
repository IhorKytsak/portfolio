const DURATION = 1000
const EASING = 'cubic-bezier(0.76, 0, 0.24, 1)'

/**
 * Runs inside a View Transition (next-view-transitions `onTransitionReady`):
 * the old page sinks back and fades while the new page slides up over it.
 */
export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)',
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: 'translateY(-100px)',
      },
    ],
    {
      duration: DURATION,
      easing: EASING,
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)',
    },
  )

  document.documentElement.animate(
    [
      {
        opacity: 0.4,
        transform: 'translateY(100%)',
      },
      {
        opacity: 1,
        transform: 'translateY(0)',
      },
    ],
    {
      duration: DURATION,
      easing: EASING,
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    },
  )
}
