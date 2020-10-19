import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import styles from './TodoModal.module.css'
import { ReactComponent as CloseTodoIcon } from '../../../../../../assets/icons/delete-icon.svg'


function TodoModal({id, onModalClose, onTitleUpdate, findTitle}) {
  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: findTitle(id)
    },
    validationSchema: yup.object({
      title: yup.string().required('Você precisa preencher com uma tarefa')
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title)
      formikBag.setFieldValue('title', '', false)
      onModalClose()
    }
  })
  return (
    <>
      <div className={styles.backdrop} onClick={onModalClose} />
        <div className={styles.modal}>
          <form onSubmit={handleSubmit}>
            <button className={styles.closeButton} onClick={onModalClose}> <CloseTodoIcon/> </button>
            <input className={styles.input} type="text" { ...getFieldProps('title')} 
              placeholder='Novo Título'/>
            { errors.title ? (
              <small className={styles.error}>{ errors.title }</small>
            ): null}
            <button className={styles.submit} type='submit'>Atualizar Tarefa</button>
          </form>
        </div>
    </>
  )
}

export default TodoModal