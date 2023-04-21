import { iconAdvanced, iconArcade, iconPro } from "../assets/images";

const data = {
    monthly: [
        {
            plan: 'Arcade',
            image: iconArcade,
            price: 9,
            duration: 'Monthly',
            periodMode: 'mo'
        },
        {
            plan: 'Advanced',
            image: iconAdvanced,
            price: 12,
            duration: 'Monthly',
            periodMode: 'mo'
        },
        {
            plan: 'Pro',
            image: iconPro,
            price: 15,
            duration: 'Monthly',
            periodMode: 'mo'
        },
    ],
    yearly: [
        {
            plan: 'Arcade',
            image: iconArcade,
            price: 90,
            duration: 'yearly',
            periodMode: 'yr',
            freePeriod: '2 months free'
        },
        {
            plan: 'Advanced',
            image: iconAdvanced,
            price: 120,
            duration: 'yearly',
            periodMode: 'yr',
            freePeriod: '2 months free'
        },
        {
            plan: 'Pro',
            image: iconPro,
            price: 150,
            duration: 'yearly',
            periodMode: 'yr',
            freePeriod: '2 months free'
        },
    ]
}

export default data;