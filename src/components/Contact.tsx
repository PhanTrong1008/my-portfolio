import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import emailjs from '@emailjs/browser'
import { D } from '../data/portfolio'
import { Icon, Words } from './common'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
const CAN_SEND = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)

type FieldKey = 'name' | 'email' | 'subject' | 'message'
const EMPTY: Record<FieldKey, string> = { name: '', email: '', subject: '', message: '' }
const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`

function ContactField({ k, label, error, children }: { k: FieldKey; label: string; error?: string; children: ReactNode }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label className="field__l" htmlFor={`f-${k}`}>
        <span>{label}</span>
        {error && (
          <span className="field__err" id={`f-${k}-err`}>
            {error}
          </span>
        )}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const id = D.identity
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'opened'>('idle')
  const [attempts, setAttempts] = useState(0)
  const [copied, setCopied] = useState('')
  const mailRef = useRef<HTMLAnchorElement>(null)

  const validate = () => {
    const e: Partial<Record<FieldKey, string>> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Check the address'
    if (!form.subject.trim()) e.subject = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }
  const signed = () => `${form.message}\n\n— ${form.name} (${form.email})`

  const submit = async (ev: FormEvent) => {
    ev.preventDefault()
    const errs = validate()
    setErrors(errs)
    const keys = Object.keys(errs)
    if (keys.length) {
      document.getElementById(`f-${keys[0]}`)?.focus()
      return
    }
    setAttempts((n) => n + 1)
    if (CAN_SEND) {
      setStatus('sending')
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID!,
          EMAILJS_TEMPLATE_ID!,
          { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, reply_to: form.email },
          EMAILJS_PUBLIC_KEY!,
        )
        setForm(EMPTY)
        setStatus('sent')
        return
      } catch {
        /* Sending failed: hand the message to the visitor's email app instead */
      }
    }
    const a = document.createElement('a')
    a.href = `mailto:${id.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(signed())}`
    document.body.appendChild(a)
    a.click()
    a.remove()
    setStatus('opened')
  }

  const update = (k: FieldKey, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    setStatus((s) => (s === 'sent' ? 'idle' : s))
    if (errors[k])
      setErrors((es) => {
        const nx = { ...es }
        delete nx[k]
        return nx
      })
  }

  /* The address and the message stay selectable if the clipboard is refused */
  const copy = async (what: 'email' | 'message') => {
    const text = what === 'email' ? id.email : `To: ${id.email}\nSubject: ${form.subject}\n\n${signed()}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(what)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      if (what === 'message') {
        ;(document.getElementById('f-message') as HTMLTextAreaElement).select()
        return
      }
      const range = document.createRange()
      range.selectNodeContents(mailRef.current!)
      const sel = window.getSelection()!
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  const input = (k: FieldKey) => ({
    id: `f-${k}`,
    className: 'input',
    value: form[k],
    onChange: (e: { target: { value: string } }) => update(k, e.target.value),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `f-${k}-err` : undefined,
  })

  const note = {
    idle: CAN_SEND ? 'Goes straight to my inbox.' : 'Opens your email app with the message pre-filled.',
    sending: 'Sending…',
    sent: "Thanks, your message is on its way. I'll get back to you soon.",
    opened: `Your email app should open with this message. If it doesn't, copy the message and send it to ${id.email}.`,
  }[status]

  return (
    <section id="contact" className="contact invert">
      <div className="wrap">
        <div className="sbar">
          <span>
            <b>05</b> / Contact
          </span>
          <span>Open to full-time opportunities</span>
        </div>
        <h2 className="contact__title">
          <Words text="Let's build something together." />
        </h2>
        <div className="contact__grid">
          <div className="contact__lead">
            <dl className="kv kv--lg">
              <div>
                <dt>email</dt>
                <dd className="kv__mail">
                  <a ref={mailRef} href={`mailto:${id.email}`}>
                    {id.email}
                  </a>
                  <button type="button" className="copybtn" onClick={() => copy('email')} aria-label="Copy email address">
                    <Icon name={copied === 'email' ? 'check' : 'copy'} size={12} />
                    <span aria-live="polite">{copied === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </dd>
              </div>
              <div>
                <dt>phone</dt>
                <dd>
                  <a href={telHref(id.phone)}>{id.phone}</a>
                </dd>
              </div>
              <div>
                <dt>linkedin</dt>
                <dd>
                  <a className="tlink" href={D.social.linkedin} target="_blank" rel="noopener noreferrer">
                    {handle(D.social.linkedin)}
                    <Icon name="arrow-up-right" size={12} />
                  </a>
                </dd>
              </div>
              <div>
                <dt>github</dt>
                <dd>
                  <a className="tlink" href={D.social.github} target="_blank" rel="noopener noreferrer">
                    {handle(D.social.github)}
                    <Icon name="arrow-up-right" size={12} />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form className="form" onSubmit={submit} noValidate aria-label="Contact form">
            <div className="form__row">
              <ContactField k="name" label="Name" error={errors.name}>
                <input {...input('name')} autoComplete="name" placeholder="Jane Doe" />
              </ContactField>
              <ContactField k="email" label="Email" error={errors.email}>
                <input {...input('email')} type="email" autoComplete="email" placeholder="jane@company.com" />
              </ContactField>
            </div>
            <ContactField k="subject" label="Subject" error={errors.subject}>
              <input {...input('subject')} placeholder="Software engineer role" />
            </ContactField>
            <ContactField k="message" label="Message" error={errors.message}>
              <textarea {...input('message')} rows={5} placeholder="A few lines about the role or project…"></textarea>
            </ContactField>
            <div className="form__foot">
              <button type="submit" className={`btn btn--solid${attempts ? ' is-sent' : ''}`} disabled={status === 'sending'}>
                Send message
                <Icon key={attempts} name="arrow-right" size={15} />
              </button>
              <div className="form__status">
                <p className="form__note" role="status">
                  {note}
                </p>
                {status === 'opened' && (
                  <button type="button" className="tlink" onClick={() => copy('message')}>
                    {copied === 'message' ? 'Copied' : 'Copy message'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
