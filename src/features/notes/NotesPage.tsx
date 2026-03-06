import { useState, useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { NoteForm } from './NoteForm'
import { NoteList } from './NoteList'
import { Button } from '../../components/Button/Button'
import type { Note } from '../../types/note'
import styles from './NotesPage.module.css'

function generateId() {
  return Math.random().toString(36).slice(2)
}

export function NotesPage() {
  const { mode, toggleTheme } = useTheme()
  const [notes, setNotes] = useState<Note[]>([])

  const handleAddNote = useCallback((text: string) => {
    setNotes((prev) => [...prev, { id: generateId(), text }])
  }, [])

  const handleDeleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id))
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Note Maker</h1>
        <Button
          variant="secondary"
          onClick={toggleTheme}
          aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} theme`}
        >
          {mode === 'light' ? 'Dark' : 'Light'} theme
        </Button>
      </header>

      <main className={styles.main}>
        <NoteForm onSubmit={handleAddNote} />
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </main>
    </div>
  )
}
