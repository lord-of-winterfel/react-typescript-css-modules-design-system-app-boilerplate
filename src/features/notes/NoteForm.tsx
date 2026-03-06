import { useState, FormEvent } from 'react'
import { Button } from '../../components/Button/Button'
import styles from './NoteForm.module.css'

interface NoteFormProps {
  onSubmit: (text: string) => void
}

export function NoteForm({ onSubmit }: NoteFormProps) {
  const [text, setText] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed) {
      onSubmit(trimmed)
      setText('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Note text"
      />
      <Button type="submit">Add Note</Button>
    </form>
  )
}
