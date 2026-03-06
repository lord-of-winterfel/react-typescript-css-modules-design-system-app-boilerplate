import { NoteItem } from './NoteItem'
import type { Note } from '../../types/note'
import styles from './NoteList.module.css'

interface NoteListProps {
  notes: Note[]
  onDelete: (id: string) => void
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <p className={styles.empty}>No notes yet. Add one above.</p>
    )
  }

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteItem note={note} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
