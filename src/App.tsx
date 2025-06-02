import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = "KORK STUDIO | Creative Design Studio";

    // Обработчик плавной прокрутки
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href) {
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
        }
      }
    };

    // Добавляем обработчики ко всем якорным ссылкам
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Удаляем обработчики при размонтировании компонента
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
