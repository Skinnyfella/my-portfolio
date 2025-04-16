
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient-pink">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-neon-pink mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">
              Let's build your dream <span className="text-neon-purple">together</span>
            </h3>
            <p className="text-muted-foreground mb-10">
              Have a project in mind or just want to say hello? I'm always open to 
              discussing new projects, creative ideas, or opportunities to be part of your 
              vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="h-6 w-6 text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                  <p className="text-lg">officialayanfedavid@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                  <p className="text-lg">+234 (915) 946-3971</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                  <p className="text-lg">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Send Message</h3>
            
            {formSuccess ? (
              <div className="bg-green-500/10 border border-green-500 text-green-400 p-4 rounded-lg mb-6 animate-fade-in">
                Message sent successfully! I'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-shadow"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-shadow"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-shadow"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-shadow resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-neon-pink text-white font-medium rounded-lg transition-all duration-300 hover:bg-opacity-90 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
