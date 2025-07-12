import carbine_main from "./assets/shop/carbine-main.jpg";
import carbine from "./assets/shop/carbine.png";
import female_vest from "./assets/shop/female-vest.png";
import keychain from "./assets/shop/keychain.png";
import male_vest_main from "./assets/shop/male-vest-main.png";
import male_vest from "./assets/shop/male-vest.png";
import phone_strap from "./assets/shop/phone-strap.png";
import phone_strap_main from "./assets/shop/phone-strap-main.png";
import top from "./assets/shop/top.png";
import bag_main from "./assets/shop/bag-main.png";
import bag from "./assets/shop/bag.png";
import cap from "./assets/shop/cap.png";
import { easeInOut } from "framer-motion";
import { getRandomInt } from "./utils";

export const Thresholds = [0, 0.1, 0.2, 0.3, 0.4, 0.9];

export const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: easeInOut },
};

type ShopItem = {
    name: string;
    price: number;
    description: string;
    image_small?: string;
    image_main?: string;
};

export const ShopItems: ShopItem[] = [
    { name: "Майка", price: 2000, description: "Описание", image_small: top },
    { name: "Сумка", price: 3000, description: "Описание", image_small: bag, image_main: bag_main },
    { name: "Кепка", price: 1500, description: "Описание", image_small: cap },
    { name: "Брелок", price: 800, description: "Описание", image_small: keychain },
    { name: "Карабин", price: 1500, description: "Описание", image_small: carbine, image_main: carbine_main },
    { name: "Женская жилетка", price: 5000, description: "Описание", image_small: female_vest },
    {
        name: "Мужская жилетка",
        price: 5000,
        description: "Описание",
        image_small: male_vest,
        image_main: male_vest_main,
    },
    {
        name: "Подвязка для телефона",
        price: 900,
        description: "Описание",
        image_small: phone_strap,
        image_main: phone_strap_main,
    },
];

type ProjectItem = {
    pre: string;
    name: string;
    description: string;
    images: string[];
    right: number[];
    top: number[];
    color: string;
    starts_with_s: boolean;
};

export const SetWorks: ProjectItem[] = [
    {
        pre: "похудожим со",
        name: "сквозь бабом",
        description: "Описание",
        images: [
            "projects/sqwoz/6.png",
            "projects/sqwoz/7.png",
            "projects/sqwoz/1.png",
            "projects/sqwoz/3.png",
            "projects/sqwoz/4.png",
            "projects/sqwoz/5.png",
            "projects/sqwoz/8.png",
            "projects/sqwoz/2.png",
        ],
        right: [35, 10, 0, 60, 30, 70, 22, 18],
        top: [55, 18, 20, -2, -2, 70, 70, 35],
        color: "var(--color-dark)",
        starts_with_s: true,
    },
    {
        pre: "похудожим с",
        name: "Somna",
        description: `Бренд уходовой косметики Somna сотрудничает со студией «Почучуть» на постоянной основе. Благодаря совместным усилиям удалось реализовать множество креативных роликов с яркими акцентными цветами и эстетикой бренда.`,
        images: [
            "projects/somna/1.png",
            "projects/somna/4.png",
            "projects/somna/2.png",
            "projects/somna/3.png",
            "projects/somna/5.png",
        ],
        right: [70, 52, 60, 5, 40, 0],
        top: [70, 10, 3, 10, 65, 0],
        color: "var(--color-blue)",
        starts_with_s: false,
    },
    {
        pre: "похудожим с",
        name: "яндекс музыкой",
        description: `Подкаст для яндекс музыки был подготовлен специально для праздника 8 марта. Стол изготавливался вручную.`,
        images: [
            "projects/yamu/1.png",
            "projects/yamu/2.png",
            "projects/yamu/3.png",
            "projects/yamu/4.png",
            "projects/yamu/5.png",
            "projects/yamu/6.png",
        ],
        right: [40, 17, 2, 55, 35, 55],
        top: [5, 60, 10, 62, 53, 3],
        color: "var(--color-secondary)",
        starts_with_s: false,
    },
    {
        pre: "похудожим с",
        name: "LIDA",
        description: `Проект был выполнен для клипа современного музыкального исполнителя на трек «Не ходи на русский рейв». Задачей было создать яркую неоновую локацию по мотивам подвального техно рейва.`,
        images: [
            "projects/lida/1.png",
            "projects/lida/2.png",
            "projects/lida/3.png",
            "projects/lida/5.png",
            "projects/lida/4.png",
            "projects/lida/6.png",
            "projects/lida/7.png",
        ],
        right: [22, 3, 50, 25, 16, 65, 60],
        top: [50, 10, 2, 8, 20, 62, -3],
        color: "var(--color-secondary)",
        starts_with_s: false,
    },
];

export const DirWorks: ProjectItem[] = [
    {
        pre: "в поисках",
        name: "северного сияния",
        description: `Очень личный первый самостоятельный проект в качестве режиссера. Ярик - молодой талантливый инженер, что живет в своем маленьком идеальном мире, не выходя за рамки своего комфорта и страха. В его жизни словно ураган появляется Анечка, что своей энергией и смелостью напоминает ему  как важно следовать за мечтой! Каждый из них, находя друг друга, также обретает свою свободу и любовь!`,
        images: [
            "projects/ss/1.jpg",
            "projects/ss/2.jpg",
            "projects/ss/3.jpg",
            "projects/ss/4.jpg",
            "projects/ss/5.jpg",
        ],
        right: [70, 50, 30, 30, 10, 126],
        top: [70, 10, 60, 15, 68, 1139],
        color: "var(--color-blue)",
        starts_with_s: false,
    },
];

type Bubble = {
    scale: number;
    border: number;
    top: number;
    duration: number;
    delay: number;
    gif: string;
};

export const SetBubbles: Bubble[] = [
    { scale: 7, border: 10, top: 100, duration: 20, delay: 0, gif: "projects/sqwoz/7.png" },
    { scale: 10, border: 30, top: 500, duration: 25, delay: 10, gif: "projects/sqwoz/7.png" },
    { scale: 8, border: 40, top: 300, duration: 15, delay: 2, gif: "projects/somna/6.gif" },
    { scale: 7, border: 20, top: 700, duration: 25, delay: 3, gif: "projects/somna/6.gif" },
    { scale: 10, border: 20, top: 400, duration: 17, delay: 4, gif: "projects/yamu/7.gif" },
    { scale: 7, border: 30, top: 200, duration: 20, delay: 6, gif: "projects/yamu/7.gif" },
    { scale: 8, border: 30, top: 700, duration: 16, delay: 3, gif: "projects/lida/8.gif" },
    { scale: 9, border: 20, top: 300, duration: 15, delay: 9, gif: "projects/lida/8.gif" },
];

export const DirBubbles: Bubble[] = [
    { scale: 7, border: 10, top: 100, duration: 20, delay: 0, gif: "projects/ss/6.gif" },
    { scale: 10, border: 30, top: 500, duration: 25, delay: 10, gif: "projects/ss/6.gif" },
    { scale: 8, border: 40, top: 300, duration: 15, delay: 2, gif: "projects/ss/6.gif" },
    { scale: 7, border: 20, top: 700, duration: 25, delay: 3, gif: "projects/ss/6.gif" },
    { scale: 10, border: 20, top: 400, duration: 17, delay: 4, gif: "projects/ss/6.gif" },
    { scale: 7, border: 30, top: 200, duration: 20, delay: 6, gif: "projects/ss/6.gif" },
    { scale: 8, border: 30, top: 700, duration: 16, delay: 3, gif: "projects/ss/6.gif" },
    { scale: 9, border: 20, top: 300, duration: 15, delay: 9, gif: "projects/ss/6.gif" },
];

export const SetLeftWindowNames = [
    {
        id: 0,
        name: "пoчучуть",
        font: "Comediant Script",
        caps: "first",
        scale: 128,
        top: 100,
        duration: getRandomInt(15, 25),
        delay: 2,
    },
    {
        id: 1,
        name: "пoчучуть",
        font: "Playfair Display",
        caps: "all",
        scale: 64,
        top: 300,
        duration: getRandomInt(15, 25),
        delay: 10,
    },
    {
        id: 2,
        name: "похудожим",
        font: "Undertale Battle Font",
        caps: "all",
        scale: 150,
        top: 600,
        duration: getRandomInt(15, 25),
        delay: 0,
    },
    {
        id: 3,
        name: "клипы",
        font: "Rimma Sans",
        caps: "all",
        scale: 96,
        top: 350,
        duration: getRandomInt(15, 25),
        delay: 20,
    },
    {
        id: 4,
        name: "реклама",
        font: "Miama Nueva",
        caps: "first",
        scale: 64,
        top: 550,
        duration: getRandomInt(15, 25),
        delay: 15,
    },
];

export const DirLeftWindowNames = [
    {
        id: 0,
        name: "пoчучуть",
        font: "Comediant Script",
        caps: "first",
        scale: 128,
        top: 100,
        duration: getRandomInt(15, 25),
        delay: 2,
    },
    {
        id: 1,
        name: "пoчучуть",
        font: "Playfair Display",
        caps: "all",
        scale: 64,
        top: 300,
        duration: getRandomInt(15, 25),
        delay: 10,
    },
    {
        id: 2,
        name: "арт-дирекшн",
        font: "Undertale Battle Font",
        caps: "all",
        scale: 150,
        top: 600,
        duration: getRandomInt(15, 25),
        delay: 0,
    },
    {
        id: 3,
        name: "почучуть",
        font: "Rimma Sans",
        caps: "all",
        scale: 96,
        top: 350,
        duration: getRandomInt(15, 25),
        delay: 20,
    },
    {
        id: 4,
        name: "студенческие работы",
        font: "Miama Nueva",
        caps: "first",
        scale: 64,
        top: 550,
        duration: getRandomInt(15, 25),
        delay: 15,
    },
];
