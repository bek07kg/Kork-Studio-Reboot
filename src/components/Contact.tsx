import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Давайте работать вместе</h2>
          <p className="text-white/70 text-lg mb-12">
            Есть проект на примете? Мы будем рады услышать о нем. Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
          </p>
          
          {submitted ? (
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm text-center">
              <h3 className="text-2xl font-medium mb-4">Спасибо!</h3>
              <p className="text-white/80">Ваше сообщение получено. Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wide mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors duration-300 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wide mb-2">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors duration-300 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wide mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors duration-300 text-white resize-none"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center space-x-2 py-3 px-8 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 ease-out"
              >
                <span>Отправить сообщение</span>
                <Send size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;