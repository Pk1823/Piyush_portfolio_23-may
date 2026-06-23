import { useEffect, useState } from 'react'

export default function TypingText({ words, speed = 80, pause = 2000 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (deleting ? -1 : 1)))
      }, deleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return (
    <span className="typing-text">
      {text}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </span>
  )
}
