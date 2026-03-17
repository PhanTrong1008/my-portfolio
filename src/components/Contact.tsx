import { useState, useEffect, type FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import emailjs from '@emailjs/browser'
import gridImg from '../assets/images/grid.png'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

type ToastType = 'success' | 'error'

function Toast({ message, type, onClose }: { message: string; type: ToastType; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg border ${
          type === 'success'
            ? 'bg-white border-green text-dark'
            : 'bg-white border-red-400 text-dark'
        }`}
      >
        {type === 'success' ? (
          <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 14 14">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-red-400 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 14 14">
              <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        )}
        <span className="text-sm font-medium leading-5">{message}</span>
        <button onClick={onClose} className="ml-2 text-text-muted hover:text-dark cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        },
        EMAILJS_PUBLIC_KEY
      )
      setToast({ message: 'Thank you for contacting me! I\'ll get back to you soon.', type: 'success' })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch {
      setToast({ message: 'Failed to send message. Please try again later.', type: 'error' })
    } finally {
      setSending(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for that field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <section id="contact" className="relative">
        <div className="absolute inset-0 w-full h-full object-cover">
          <img src={gridImg} alt="" />
        </div>

        <div
          ref={sectionRef}
          className="fade-in-section section-container max-lg:px-6 max-md:px-4 py-20 max-lg:py-10 max-md:py-6"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-text-muted" />
                <p className="text-lg max-md:text-base font-medium text-text-muted leading-[26px] max-md:leading-6">GET IN TOUCH</p>
              </div>
              <h2 className="text-[48px] max-md:text-[30px] font-bold leading-[58px] max-md:leading-[38px] text-center">
                <span className="text-dark">LET'S WORK </span>
                <span className="gradient-text">TOGETHER</span>
              </h2>
            </div>

            <div className="text-base max-md:text-sm font-medium max-md:font-normal text-text-body leading-6 max-md:leading-[22px] text-center">
              <p>I'm available for full-time roles & freelance projects.</p>
              <p>My inbox is always open, whether you have a question or just want to say hi.</p>
              <p>I'll try my best to get back to you!</p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full max-w-2xl bg-white rounded-[40px] max-md:rounded-[24px] border border-gray-border p-4 flex flex-col gap-4"
            >
              <div className="flex gap-4 max-md:flex-col">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-dark leading-[22px]">Your Name</label>
                  <div className={`rounded-2xl border ${errors.name ? 'border-red-400' : 'border-gray-border'}`}>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your Name..."
                      className="w-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent placeholder:text-text-muted/40"
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-400 leading-4">{errors.name}</p>}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-dark leading-[22px]">Your Email</label>
                  <div className={`rounded-2xl border ${errors.email ? 'border-red-400' : 'border-gray-border'}`}>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="Name@example.com"
                      className="w-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent placeholder:text-text-muted/40"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 leading-4">{errors.email}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-dark leading-[22px]">Subject</label>
                <div className={`rounded-2xl border ${errors.subject ? 'border-red-400' : 'border-gray-border'}`}>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="Project inquiry..."
                    className="w-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent placeholder:text-text-muted/40"
                  />
                </div>
                {errors.subject && <p className="text-xs text-red-400 leading-4">{errors.subject}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-dark leading-[22px]">Message</label>
                <div className={`h-40 rounded-2xl border ${errors.message ? 'border-red-400' : 'border-gray-border'}`}>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Hello, I'm interested in discussing a project..."
                    className="w-full h-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent resize-none placeholder:text-text-muted/40"
                  />
                </div>
                {errors.message && <p className="text-xs text-red-400 leading-4">{errors.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={sending}
                  className="gradient-bg text-white font-medium text-base w-[200px] max-md:w-full h-14 rounded flex items-center justify-center gap-2 leading-6 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                      <path d="M3 5L10 10L17 5M3 15H17V5H3V15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {sending ? 'Sending...' : 'Contact Me'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
