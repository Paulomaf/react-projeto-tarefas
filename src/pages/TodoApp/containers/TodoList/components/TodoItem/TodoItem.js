import React, {useState, useCallback, useEffect} from 'react'
import { ReactComponent as UpdateTitleIcon } from '../../../../../../assets/icons/update-icon.svg'
import { ReactComponent as DeleteTodoIcon } from '../../../../../../assets/icons/delete-icon.svg'
import styles from './TodoItem.module.css'

function TodoItem({ id, title, onDelete, completed, onStatusUpdate, onModalOpen }) {
  const [isChecked, setIsChecked] = useState(completed)

  const handleChange = useCallback((evt) => {
    setIsChecked(evt.target.checked)
  },[])

  useEffect(() => {
    onStatusUpdate(id, isChecked)
  },[isChecked, onStatusUpdate, id])

  const handleModalOpen = useCallback(() => {
    onModalOpen(id)
  },[onModalOpen, id])

  const handleDelete = useCallback(() => {
    onDelete(id)
  },[onDelete, id])
  return (
  <li className={styles.item}>
    <span className={completed ? styles.completed : null}>{title}</span>
    <div className={styles.controlButtons}>
      <button onClick={handleModalOpen}><UpdateTitleIcon/></button>
      <input type="checkbox" checked={isChecked} onChange={handleChange}/>
      <button onClick={handleDelete}><DeleteTodoIcon/></button>
    </div>
  </li>
  )
}

export default TodoItem