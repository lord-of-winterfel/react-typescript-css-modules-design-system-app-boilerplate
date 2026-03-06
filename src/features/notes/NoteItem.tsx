import { Card } from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import type { Note } from '../../types/note'
import styles from './NoteItem.module.css'

interface NoteItemProps {
  note: Note
  onDelete: (id: string) => void
}

export function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.content}>
          <span className={styles.text}>{note.text}</span>
          <Button variant="secondary" onClick={() => onDelete(note.id)}>
            Delete
          </Button>
        </div>
      </Card>
    </div>
  )
}
