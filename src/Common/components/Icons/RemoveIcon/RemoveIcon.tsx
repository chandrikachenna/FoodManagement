import * as React from "react"

function RemoveIcon(props) {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
      <path
        fill="#7E858E"
        fillOpacity={0.4}
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm2.404-4.747L8 8.849l-2.404 2.404-.849-.849L7.152 8 4.747 5.596l.849-.849L8 7.151l2.404-2.404.849.849L8.849 8l2.404 2.404-.849.849z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export {RemoveIcon} 