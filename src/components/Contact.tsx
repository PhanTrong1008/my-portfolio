import { useState, type FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:phanductrong1008@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 w-full h-full object-cover">
        <img src='../src/assets/images/grid.png'/>
      </div>

      <div
        ref={sectionRef}
        className="fade-in-section max-w-[1440px] mx-auto px-[384px] max-xl:px-48 max-lg:px-6 max-md:px-6 py-20 max-lg:py-10"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-text-muted" />
              <p className="text-lg font-medium text-text-muted leading-[26px]">GET IN TOUCH</p>
            </div>
            <h2 className="text-[48px] max-md:text-[32px] font-bold leading-[58px] max-md:leading-[40px] text-center">
              <span className="text-dark">LET'S WORK </span>
              <span className="gradient-text">TOGETHER</span>
            </h2>
          </div>

          <div className="text-base font-medium text-text-body leading-6 text-center">
            <p>I'm available for full-time roles & freelance projects.</p>
            <p>My inbox is always open, whether you have a question or just want to say hi.</p>
            <p>I'll try my best to get back to you!</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-[40px] max-md:rounded-2xl border border-gray-border p-4 flex flex-col gap-4"
          >
            <div className="flex gap-4 max-md:flex-col">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-dark leading-[22px]">Your Name</label>
                <div className="rounded-2xl border border-gray-border">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name..."
                    className="w-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent placeholder:text-text-muted/40"
                    required
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-dark leading-[22px]">Your Email</label>
                <div className="rounded-2xl border border-gray-border">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Name@example.com"
                    className="w-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent placeholder:text-text-muted/40"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-dark leading-[22px]">Subject</label>
              <div className="rounded-2xl border border-gray-border">
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry..."
                  className="w-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent placeholder:text-text-muted/40"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-dark leading-[22px]">Message</label>
              <div className="h-40 rounded-2xl border border-gray-border">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello, I'm interested in discussing a project..."
                  className="w-full h-full p-3 text-xs text-text-muted leading-5 outline-none bg-transparent resize-none placeholder:text-text-muted/40"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="gradient-bg text-white font-medium text-base w-[200px] h-14 rounded flex items-center justify-center gap-2 leading-6 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d="M3 5L10 10L17 5M3 15H17V5H3V15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
