import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Sparkles, Loader } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const contactInfo = [
  { name: 'Email', icon: Mail, value: 'nagavishnukarthikbs@gmail.com', href: 'mailto:nagavishnukarthikbs@gmail.com', color: 'text-rose-500' },
  { name: 'GitHub', icon: Github, value: 'github.com/nagavishnu-05', href: 'https://github.com/nagavishnu-05', color: 'text-slate-900 dark:text-white' },
  { name: 'LinkedIn', icon: Linkedin, value: 'linkedin.com/in/nagavishnu', href: 'https://www.linkedin.com/in/naga-vishnu-karthik-b-s/', color: 'text-blue-600' },
  { name: 'Location', icon: MapPin, value: 'Madurai, India', href: '#', color: 'text-emerald-500' },
];

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://vish-portfolio-m05l.onrender.com';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (!formStatus.message) {
      return undefined;
    }

    const timer = setTimeout(() => setFormStatus({ type: '', message: '' }), 6000);
    return () => clearTimeout(timer);
  }, [formStatus.message]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setFormStatus({ type: 'error', message: errorData.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ type: 'error', message: 'Error sending message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 py-8">
      <header className="text-center max-w-3xl mx-auto mb-4">
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
          <Sparkles size={14} /> Get In Touch
        </div>
        <h1 className="text-4xl font-black tracking-tight">Let's Build Something <span className="text-primary">Exceptional.</span></h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 justify-center"
        >
          <Card className="rounded-[2rem] p-8 border-zinc-100 dark:border-zinc-800 bg-slate-50/90 dark:bg-slate-950/90 shadow-xl shadow-black/5">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400 font-black mb-3">Contact</p>
                <h2 className="text-3xl font-black tracking-tight">Reach out directly</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                  Choose your preferred channel below and I’ll get back to you shortly.
                </p>
              </div>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.name}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/20"
                  >
                    <div className={`p-3 rounded-2xl ${info.color} bg-white dark:bg-zinc-950 shadow-sm`}>
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] font-black text-slate-400 mb-1">{info.name}</p>
                      <p className="text-sm font-semibold text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-[3rem] p-8 md:p-12 border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-primary/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-4">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 font-bold text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-4">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 font-bold text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-4">What's this about?</label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="New Project Inquiry"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 font-bold text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-4">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me more about your amazing project..."
                  disabled={isSubmitting}
                  className="w-full px-6 py-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 font-bold text-foreground resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {formStatus.message && (
                <div
                  className={`rounded-3xl border px-5 py-4 text-sm font-semibold ${
                    formStatus.type === 'success'
                      ? 'border-emerald-200/80 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200'
                      : 'border-rose-200/80 bg-rose-500/10 text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-200'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full gap-3 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
