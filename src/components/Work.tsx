import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  images?: string[];
};

const categories = [
  "Все",
  "Концепции",
  "Экстерьеры",
  "Интерьеры",
  "Анимации",
  "360 Панорамы",
];

const projects: Project[] = [
  {
    id: 1,
    title: "",
    category: "Концепции",
    image: "/images/REND_1.webp",
    link: "#",
    images: [
      "/images/REND_1.webp",
      "/images/REND_2.webp",
      "/images/REND_3.webp",
      "/images/REND_4.webp",
      "/images/REND_5.webp",
      "/images/REND_6.webp",
      "/images/REND_7.webp",
      "/images/REND_8.webp",
    ],
  },
  {
    id: 14,
    title: "",
    category: "Концепции",
    image: "/images/Rend10.webp",
    images: [
      "/images/Rend10.webp",
      "/images/Rend11.webp",
      "/images/Rend12.webp",
      "/images/Rend5.webp",
      "/images/Rend6.webp",
      "/images/Rend7.webp",
      "/images/Rend13.webp",
      "/images/Rend14.webp",
      "/images/Rend15.webp",
      "/images/Rend1.webp",
      "/images/Rend2.webp",
      "/images/Rend3.webp",
      "/images/Rend4.webp",
      "/images/Rend8.webp",
      "/images/Rend9.webp",
      "/images/Rend16.webp",
      "/images/Rend17.webp",
      "/images/Rend17v.webp",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/main/ext1_1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/ext1_1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-12.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-13.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd-14 .webp",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RenD-9.webp",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Ren_sok7.webp",
    ],
    link: "#",
  },
  {
    id: 5,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/RendE_10.webp",
    ],
    link: "#",
  },
  {
    id: 6,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%201.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%201.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%202.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%203.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%204.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%205.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%206.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%207.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%208.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%209.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%2010.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-B%2011.webp",
    ],
    link: "#",
  },
  {
    id: 7,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder-6.webp",
    ],
    link: "#",
  },
  {
    id: 8,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Klub-House12.webp",
    ],
    link: "#",
  },
  {
    id: 9,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/render-1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/render-1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/render-2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/render-3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/render-4.webp",
    ],
    link: "#",
  },
  {
    id: 10,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render7.webp",
    ],
    link: "#",
  },
  {
    id: 11,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU12.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU13.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU14.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU15.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU16.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/4YOU17.webp",
    ],
    link: "#",
  },
  {
    id: 12,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/monet1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/monet1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/monet2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/monet3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/monet4.webp",
    ],
    link: "#",
  },
  {
    id: 13,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade11.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade12.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Facade1.webp",
    ],
    link: "#",
  },
  {
    id: 15,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnd7.webp",
    ],
    link: "#",
  },
  {
    id: 16,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/ADI%20Village1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/ADI%20Village1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/ADI%20Village2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/ADI%20Village3.webp",
    ],
    link: "#",
  },
  {
    id: 17,
    title: "",
    category: "Интерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View01%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View01%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View02%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View03%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View04%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View05%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View06%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View07%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View08%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
    ],
    link: "#",
  },
  {
    id: 18,
    title: "",
    category: "Интерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View01%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View01%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View02%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View03%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View04%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View05%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
    ],
    link: "#",
  },
  {
    id: 19,
    title: "",
    category: "Интерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View06%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View06%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View07%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View08%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View09%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View10%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
    ],
    link: "#",
  },
  {
    id: 20,
    title: "",
    category: "Интерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View01.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View01.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View02.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View03.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View04.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View05.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View06 .webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View07 .webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View08.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View09.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View12 .webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View13 .webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View14.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01_View15 .webp",
    ],
    link: "#",
  },
  {
    id: 21,
    title: "",
    category: "Интерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View01.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View01.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View02.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View03.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View04.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View05.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View06.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View07.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View08.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View09.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02_View12.webp",
    ],
    link: "#",
  },
  {
    id: 22,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder4.webp",
    ],
    link: "#",
  },
  {
    id: 23,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_12.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_13.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_14.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Golden_15.webp",
    ],
    link: "#",
  },
  {
    id: 24,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_12.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_13.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_14.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REND_1_15.webp",
    ],
    link: "#",
  },
  {
    id: 25,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/FASADE_1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/FASADE_1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/FASADE_2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/FASADE_3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/FASADE_4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/FASADE_5.webp",
    ],
    link: "#",
  },
  {
    id: 26,
    title: "",
    category: "Интерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View01.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View02.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View03.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View04.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View05.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View06.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View07.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View08.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View09.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View10 .webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View12.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View13.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View14.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/1_View15.webp",
    ],
    link: "#",
  },
  {
    id: 27,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder18__1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder18__1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder18__2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder18__3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder18__4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/REnder18__5.webp",
    ],
    link: "#",
  },
  {
    id: 28,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render1.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render1.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render2.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render3.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render4.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render5.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render6.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render7.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render8.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render9.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render10.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render11.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Render12.webp",
    ],
    link: "#",
  },
  {
    id: 29,
    title: "",
    category: "Экстерьеры",
    image:
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_1v.webp",
    images: [
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_1v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_2v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_3v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_4v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_5v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_6v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_7v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_8v.webp",
      "https://raw.githubusercontent.com/bek07kg/project_images/refs/heads/main/Rend_9v.webp",
    ],
    link: "#",
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "Все"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleNext = () => {
    if (selectedProject?.images && previewIndex !== null) {
      setPreviewIndex((previewIndex + 1) % selectedProject.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedProject?.images && previewIndex !== null) {
      setPreviewIndex(
        (previewIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <section id="work" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-8">Наши работы</h2>

        <div className="flex flex-wrap gap-6 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 border rounded transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative"
            >
              <div className="overflow-hidden shadow-md h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition duration-300 group-hover:brightness-75"
                  loading="lazy"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно со всеми изображениями */}
      {selectedProject?.images && previewIndex === null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-4">
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-12">
            {selectedProject.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setPreviewIndex(index)}
                className="relative cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Изображение ${index + 1}`}
                  className="w-full object-cover max-h-[80vh]"
                  style={{ borderRadius: 0 }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Полноэкранный просмотр с переключением */}
      {selectedProject?.images && previewIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <button
            onClick={() => setPreviewIndex(null)}
            className="fixed top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={selectedProject.images[previewIndex]}
            alt={`Просмотр изображения`}
            className="max-w-[90%] max-h-[90vh]"
            style={{ borderRadius: 0 }}
          />

          <button
            onClick={handleNext}
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;
