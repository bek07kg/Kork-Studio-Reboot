import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) {
            contentRef.current.classList.add('translate-y-0', 'opacity-100');
            contentRef.current.classList.remove('translate-y-8', 'opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    "Фасады",
    "Дизайн Интерьеров",
    "Экстерьеры",
    "Концепции",
    "Проектирование",
    "360 Панорамы проектов"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div 
          ref={contentRef}
          className="md:grid md:grid-cols-2 gap-12 transition-all duration-1000 ease-out transform translate-y-8 opacity-0"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">О нас</h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                Мы — компания, специализирующаяся на архитектурных проектах разработке концепций, фасадов зданий и дизайне интерьера.
              </p>
              <p className="text-lg">
                Имея опыт работы более 8 лет, мы помогаем нашим клиентам создавать уникальные и гармоничные пространства, начиная с разработки концептуальных решений и заканчивая полной реализацией проектов, соответствующих современным требованиям.
              </p>
              <p className="text-lg">
                Наш состав состоит из опытных архитекторов, дизайнеров и инженеров, которые работают с учетом всех сторон каждого проекта.
              </p>
              <p className="text-lg">
                Мы предлагаем индивидуальный подход к каждому клиенту, гарантируя высокое качество, внимание к деталям и инновациям.
              </p>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0">
            <h3 className="text-2xl font-light mb-8">Наши Услуги</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <li 
                  key={index}
                  className="text-lg py-3 border-t border-white/10 text-white/80"
                >
                  {service}
                </li>
              ))}
            </ul>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-light mb-4">Связаться с нами</h3>
              <a 
                href="mailto:hello@kork.studio" 
                className="text-lg text-white inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                hello@kork.studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;