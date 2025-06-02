import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && titleRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 500;
        const translateY = scrollPosition * 0.3;

        titleRef.current.style.opacity = Math.max(opacity, 0).toString();
        titleRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight transition-all duration-300 ease-out"
        >
          Креативная Студия <br />
          <span className="font-normal">для Архитектурных Проектов</span>
        </h1>

        <p className="mt-6 text-white/70 max-w-xl text-lg md:text-xl">
          Мы проектируем и разрабатываем захватывающие архитектурные проекты,
          которые соединяют бренды с их аудиторией.
        </p>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-center animate-bounce z-10">
        <a
          href="#work"
          className="text-white/80 hover:text-white transition-colors duration-300 flex flex-col items-center"
        >
          <span className="text-sm uppercase tracking-widest mb-2">
            Прокрутить
          </span>
          <ArrowDown size={20} />
        </a>
      </div>

      <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </section>
  );
};

export default Hero;
