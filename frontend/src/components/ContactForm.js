import { useState } from 'react';
import { apiPost } from '@/services/api';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await apiPost('/contact', form);
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send.');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 520 }}>
      <label>
        Name
        <input name="name" value={form.name} onChange={onChange} required style={{ width: '100%', padding: 8, marginTop: 4, marginBottom: 12 }} />
      </label>
      <label>
        Email
        <input type="email" name="email" value={form.email} onChange={onChange} required style={{ width: '100%', padding: 8, marginTop: 4, marginBottom: 12 }} />
      </label>
      <label>
        Message
        <textarea name="message" value={form.message} onChange={onChange} rows={5} required style={{ width: '100%', padding: 8, marginTop: 4, marginBottom: 12 }} />
      </label>
      <button type="submit" style={{ padding: '0.6rem 1rem' }}>Send</button>
      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </form>
  );
}
