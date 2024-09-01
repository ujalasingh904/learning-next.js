import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer:string ;
    location:string;
}

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Chichen Itza",
        src: photo1,
        photographer: "John Doe",
        location: "Mexico"
    },
    {
        id: "2",
        name: "Christ the Redeemer",
        src: photo2,
        photographer: "John Doe",
        location: "Brazil"
    },
    {
        id: "3",
        name: "Colosseum",
        src: photo3,
        photographer: "John Doe",
        location: "Italy"
    },
    {
        id: "4",
        name: "Great Wall of China",
        src: photo4,
        photographer: "John Doe",
        location: "China"
    },
    {
        id: "5",
        name: "Machu Picchu",
        src: photo5,
        photographer: "John Doe",
        location: "Peru"
    },
    {
        id: "6",
        name: "Petra",
        src: photo6,
        photographer: "John Doe",
        location: "Jordan"
    },
    {
        id: "7",
        name: "Taj Mahal",
        src: photo7,
        photographer: "John Doe",
        location: "India"
    }
];

export default wondersImages;
