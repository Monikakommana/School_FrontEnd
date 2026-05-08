import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface ApplicationData {
  name: string
  grade: string
  parentName: string
  email: string
  phone: string
  message: string
}

const defaultData: ApplicationData = {
  name: "",
  grade: "",
  parentName: "",
  email: "",
  phone: "",
  message: "",
}

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"

const Apply: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<ApplicationData>(defaultData)
  const [submitted, setSubmitted] = useState(false)
  const [savedData, setSavedData] = useState<ApplicationData | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!submitted) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      navigate(-1)
    }, 2000)

    return () => window.clearTimeout(timeoutId)
  }, [submitted, navigate])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage("")
    setLoading(true)

    try {
      const response = await fetch(`${backendUrl}/api/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) {
        setErrorMessage(data.error || "Submission failed. Please try again.")
        setSuccessMessage("")
        setLoading(false)
        return
      }

      setSavedData(data.application)
      setSuccessMessage(data.message || "Application submitted successfully")
      setFormData(defaultData)
      setSubmitted(true)
    } catch {
      setErrorMessage("Unable to submit right now. Please try again later.")
      setSuccessMessage("")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Apply to Vidyarthi Bhavan School</h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Fill in your details below and our admissions team will contact you soon.
        </p>
        <Link to="/" className="inline-block mt-6 text-blue-700 hover:underline">
          ← Back to Home
        </Link>
      </section>

      {submitted && savedData ? (
        <div className="bg-green-50 border border-green-200 rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Submitted Successfully</h2>
          <p className="text-gray-700 mb-6">
            {successMessage ||
              "Your details have been stored successfully and will be reviewed by our admissions team."}
          </p>
          <p className="text-sm text-gray-500 mb-6">Going back in 2 seconds...</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-gray-500">Student Name</p>
              <p className="font-semibold text-gray-900">{savedData.name}</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-gray-500">Grade Applying For</p>
              <p className="font-semibold text-gray-900">{savedData.grade}</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-gray-500">Parent / Guardian</p>
              <p className="font-semibold text-gray-900">{savedData.parentName}</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-semibold text-gray-900">{savedData.email}</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-semibold text-gray-900">{savedData.phone}</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm">
              <p className="text-sm text-gray-500">Additional Notes</p>
              <p className="font-semibold text-gray-900">{savedData.message || "None"}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
            setSubmitted(false)
            setSavedData(null)
            setFormData(defaultData)
            setErrorMessage("")
            setSuccessMessage("")
          }}
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-3xl p-10 shadow-lg mx-auto"
          style={{ maxWidth: "720px" }}
        >
          {errorMessage && (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-red-700">
              {errorMessage}
            </div>
          )}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Student Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="grade">
              Grade Applying For
            </label>
            <input
              id="grade"
              name="grade"
              type="text"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="parentName">
              Parent / Guardian Name
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Any questions or information we should know"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      )}
    </div>
  )
}

export default Apply
