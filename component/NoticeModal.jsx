import React from 'react'
import Modal from './utils/Modal'
import TextInput from './utils/TextInput'
import Button from './utils/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createNotice, updateNotice } from '@/utils/ApiFunctions'

const NoticeModal = ({ setIsOpen, note }) => {
  const noticeFormik = useFormik({
    initialValues: {
      title: note?.title || "",
      body: note?.body || "",
      category: note?.category || "General",
      priority: note?.priority || "Normal",
      publishDate: note?.publishDate
        ? new Date(note.publishDate).toISOString().split("T")[0]
        : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().max(50, "Must be at max 50 chars").required("Required"),
      body: Yup.string().required("Required"),
      category: Yup.string()
        .oneOf(["Exam", "Event", "General"])
        .required("Required"),
      priority: Yup.string()
        .oneOf(["Normal", "Urgent"])
        .required("Required"),
      publishDate: Yup.date().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (note) {
          // update
          const res = await updateNotice(note?.id, values);
          if (res?.success) {
            console.log(res.message)
          } else {
            console.log(res?.message || 'something went wrong')
          }
        } else {
          const res = await createNotice(values);
          if (res?.success) {
            console.log(res.message)
          } else {
            console.log(res?.message || 'something went wrong')
          }
        }
        setIsOpen(false);
        location.reload(); // will remove after fixing swr
      } catch (error) {
        alert("Something went wrong.");
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Modal setIsOpen={setIsOpen}>
      {/* Pin */}
      <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-red-500 shadow-lg" />

      <form onSubmit={noticeFormik.handleSubmit}>
        <h2 className="mt-6 text-2xl font-black">
          <TextInput
            placeholder="Notice title..."
            {...noticeFormik.getFieldProps("title")}
            error={noticeFormik.touched.title && noticeFormik.errors.title}
          />
        </h2>

        <div className="mt-6">
          <TextInput
            placeholder="Notice body..."
            {...noticeFormik.getFieldProps("body")}
            error={noticeFormik.touched.body && noticeFormik.errors.body}
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block font-semibold">Category</label>
            <select
              className="w-full rounded border p-2"
              {...noticeFormik.getFieldProps("category")}
            >
              <option value="General">General</option>
              <option value="Exam">Exam</option>
              <option value="Event">Event</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block font-semibold">Priority</label>
            <select
              className="w-full rounded border p-2"
              {...noticeFormik.getFieldProps("priority")}
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-1 block font-semibold">Publish Date</label>
          <input
            type="date"
            className="w-full rounded border p-2"
            {...noticeFormik.getFieldProps("publishDate")}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit" disabled={noticeFormik.isSubmitting}>
            {noticeFormik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default NoticeModal