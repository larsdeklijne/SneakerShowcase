import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Over ons" },
    { href: "#products", label: "Producten" },
    { href: "#contact-us", label: "Contacteer ons" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Merken' },
    { value: '500+', label: 'Winkels' },
    { value: '250k+', label: 'Klanten' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "€200,20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "€210,20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "€220,20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "€230,20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Gratis verzending",
        subtext: "Geniet van naadloos winkelen met onze gratis verzendservice."
    },
    {
        imgURL: shieldTick,
        label: "Veilige betaling",
        subtext: "Ervaar zorgeloze transacties met onze veilige betalingsopties."
    },
    {
        imgURL: support,
        label: "We helpen je graag",
        subtext: "Ons toegewijde team staat klaar om je bij elke stap te ondersteunen."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "De aandacht voor detail en de kwaliteit van het product overtrof mijn verwachtingen. Zeer aanbevolen!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Het product voldeed niet alleen aan, maar overtrof mijn verwachtingen. Ik kom zeker terug als klant!"
    }
];

export const footerLinks = [
    {
        title: "Producten",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Over ons", link: "/" },
            { name: "Veelgestelde vragen", link: "/" },
            { name: "Hoe het werkt", link: "/" },
            { name: "Privacybeleid", link: "/" },
            { name: "Betalingsbeleid", link: "/" },
        ],
    },
    {
        title: "Neem contact op",
        links: [
            { name: "aanmelden@nike.nl", link: "mailto:aanmelden@nike.nl" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
