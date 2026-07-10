import React from 'react'
import Modal from './utils/Modal'
import TextInput from './utils/TextInput'
import Button from './utils/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NoticeModal = ({ setIsOpen, note }) => {
  const noticeFormik = useFormik({
    initialValues: {
      title: note?.title || '',
      text: note?.text || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().max(50, 'Must be at max 50 chars').required(),
      text: Yup.string().required(),
    }),
    onSubmit: (values, {setSubmitting}) => {
      try {
        alert("thanks");
        setIsOpen(false)
      } catch (error) {
        alert("Something went wrong while updating the note.")
        console.log("error ", error)
      } finally {
        setSubmitting(false)
      }
    }
  })
  return (
    <Modal setIsOpen={setIsOpen}>
      {/* Pin */}
      <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-red-500 shadow-lg" />

      <form onSubmit={noticeFormik.handleSubmit}>
        <h2 className="mt-6 text-2xl font-black">
          <TextInput
            placeholder="Note title here..."
            {...noticeFormik.getFieldProps('title')}
            error={noticeFormik.touched.title && noticeFormik.errors.title}
          />
        </h2>

        <p className="mt-6 text-lg leading-7 text-zinc-800">
          {/* Note text */}
          <TextInput
            placeholder="Note text here..."
            {...noticeFormik.getFieldProps('text')}
            error={noticeFormik.touched.text && noticeFormik.errors.text}
          />
          <TextInput disabled />
          <TextInput disabled />
        </p>

        <div className="absolute flex bottom-4 right-4 text-4xl">
          <Button type='submit' disabled={noticeFormik.isSubmitting}>{noticeFormik.isSubmitting ? "Submit..." : "Submit"}</Button>
        </div>
      </form>
    </Modal>
  )
}

export default NoticeModal