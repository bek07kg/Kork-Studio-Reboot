import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-xl font-medium tracking-tight">
              KORK STUDIO
            </a>
            <p className="mt-4 text-white/70 max-w-md">
              Креативная дизайн-студия, создающая уникальные архитектурные
              проекты.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4">
                Контакты
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="mailto:hello@kork.studio"
                    className="hover:text-white transition-colors duration-300"
                  >
                    hello@kork.studio
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+12345678900"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4">
                Мы в соцсетях
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; {currentYear} Kork Studio. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
