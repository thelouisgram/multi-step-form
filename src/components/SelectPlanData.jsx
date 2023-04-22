import { iconAdvanced, iconArcade, iconPro } from "../assets/images";

const data = {
    monthly: [
        {
            plan: 'Arcade',
            image: iconArcade,
            price: 9,
            frequency: 'Monthly',
            duration: 'month',
            periodMode: 'mo'
        },
        {
            plan: 'Advanced',
            image: iconAdvanced,
            price: 12,
            frequency: 'Monthly',
            duration: 'month',
            periodMode: 'mo'
        },
        {
            plan: 'Pro',
            image: iconPro,
            price: 15,
            frequency: 'Monthly',
            duration: 'month',
            periodMode: 'mo'
        },
    ],
    yearly: [
        {
            plan: 'Arcade',
            image: iconArcade,
            price: 90,
            frequency: 'yearly',
            duration: 'year',
            periodMode: 'yr',
            freePeriod: '2 months free'
        },
        {
            plan: 'Advanced',
            image: iconAdvanced,
            price: 120,
            frequency: 'yearly',
            duration: 'year',
            periodMode: 'yr',
            freePeriod: '2 months free'
        },
        {
            plan: 'Pro',
            image: iconPro,
            price: 150,
            frequency: 'yearly',
            duration: 'year',
            periodMode: 'yr',
            freePeriod: '2 months free'
        },
    ]
}

export default data;