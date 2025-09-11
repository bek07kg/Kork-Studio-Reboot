import React, { useCallback, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>(
    {}
  );
  const [charCount, setCharCount] = useState(0);

  // ref для фокуса на сообщении об успехе
  const successRef = useRef<HTMLDivElement | null>(null);
  // ref для хранения таймера, чтобы при размонтировании его очистить
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const validate = useCallback((data: ContactForm) => {
    const e: Partial<Record<keyof ContactForm, string>> = {};
    if (!data.name.trim()) e.name = "Введите имя";
    if (!data.email.trim()) e.email = "Введите e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Неверный формат e-mail";
    if (!data.message.trim()) e.message = "Введите сообщение";
    else if (data.message.trim().length < 10)
      e.message = "Сообщение слишком короткое (минимум 10 символов)";
    return e;
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "message") setCharCount(value.length);
      // сбрасываем ошибку по полю при изменении
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const payload: ContactForm = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const validation = validate(payload);
      if (Object.keys(validation).length > 0) {
        setErrors(validation);
        return;
      }

      setIsSubmitting(true);
      try {
        // Замените URL на ваш реальный endpoint
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          // можно показать текст ошибки из тела ответа, если он есть
          const text = await res.text().catch(() => "");
          throw new Error(text || "Ошибка сети");
        }

        setSubmitted(true);
        // фокусируемся на сообщении об успехе для скринридеров
        setTimeout(() => successRef.current?.focus(), 50);

        // очищаем форму через 5 секунд (таймер сохраняем в ref)
        timeoutRef.current = setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setCharCount(0);
          setSubmitted(false);
        }, 5000);
      } catch (err) {
        console.error("Contact submit error:", err);
        setErrors((prev) => ({
          ...prev,
          message: "Не удалось отправить сообщение. Попробуйте снова.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate]
  );

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Давайте работать вместе</h2>
          <p className="text-white/70 text-lg mb-12">
            Есть проект на примете? Мы будем рады услышать о нем. Заполните форму ниже, и мы
            свяжемся с вами в ближайшее время.
          </p>

          {submitted ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className="bg-white/5 backdrop-blur-sm p-8 rounded-sm text-center outline-none"
            >
              <h3 className="text-2xl font-medium mb-4">Спасибо!</h3>
              <p className="text-white/80">Ваше сообщение получено. Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8" aria-busy={isSubmitting}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wide mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors duration-300 text-white"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-pink-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wide mb-2">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors duration-300 text-white"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-pink-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wide mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={2000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors duration-300 text-white resize-none"
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.message ? (
                      <p id="message-error" className="text-sm text-pink-400">
                        {errors.message}
                      </p>
                    ) : (
                      <span className="text-sm text-white/60">{charCount}/2000</span>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center space-x-2 py-3 px-8 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>{isSubmitting ? "Отправка..." : "Отправить сообщение"}</span>
                <Send
                  size={16}
                  className={`transform transition-transform duration-300 ${isSubmitting ? "animate-spin" : "group-hover:translate-x-1"}`}
                  aria-hidden
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
