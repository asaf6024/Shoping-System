let productsFromStorage = JSON.parse(localStorage.getItem('reservation'))
let products;
productsFromStorage != null ? products = productsFromStorage
    : products = {
        fridge: [
            {
                id: 1,
                name: 'חלב',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 2,
                name: 'גבינה לבנה',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 3,
                name: 'קוטג',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 4,
                name: 'גבינה צפתית',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 5,
                name: 'גבינה צהובה',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 6,
                name: 'ביצים',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 7,
                name: 'חומוס',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 8,
                name: 'פסטרמה',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 9,
                name: 'סחוג',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 10,
                name: 'קטשופ',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 11,
                name: 'מיונז',
                amount: 1,
                comment: '',
                isActive: true
            },
        ],

        kitchen: [
            {
                id: 1,
                name: 'פיתות',
                amount: 20,
                comment: '',
                isActive: true
            },
            {
                id: 2,
                name: 'חבילות לחמניות',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 3,
                name: 'חבילות כוסות לשתיה חמה',
                amount: 4,
                comment: '',
                isActive: true
            },
            {
                id: 4,
                name: 'חבילות כוסות לשתיה קרה',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 5,
                name: 'חבילות צלחות חד פעמיות',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 6,
                name: 'פתיתים',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 7,
                name: 'בצק עלים',
                amount: 20,
                comment: '',
                isActive: true
            },
            {
                id: 8,
                name: 'שמיר',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 9,
                name: 'פטרוזיליה',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 10,
                name: 'אורז',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 11,
                name: 'תרכיז עגבניות',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 12,
                name: 'קופסת תירס',
                amount: 2,
                comment: '',
                isActive: true
            },
            {
                id: 13,
                name: 'מלפפון חמוץ ',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 14,
                name: 'קופסת פטריות',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 15,
                name: 'מיצים',
                amount: 6,
                comment: '',
                isActive: true
            },
            {
                id: 16,
                name: 'סודה',
                amount: 1,
                comment: '',
                isActive: true
            },
        ],
        vegetables: [
            {
                id: 1,
                name: 'שק תפוחי אדמה',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 2,
                name: 'נענע',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 3,
                name: 'שק לימונים',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 4,
                name: 'שום',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 5,
                name: 'בצל',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 6,
                name: 'אבוקדו',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 7,
                name: 'פטריות',
                amount: 1,
                comment: '',
                isActive: true
            },
        ],

        candies: [
            {
                id: 1,
                name: 'עוגיות שוקוציפס',
                amount: 3,
                comment: '',
                isActive: true
            },
            {
                id: 2,
                name: 'וופלים',
                amount: 2,
                comment: '',
                isActive: true
            },
        ],

        frozen: [
            {
                id: 1,
                name: 'מלוואח',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 2,
                name: 'שניצל תירס',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 3,
                name: 'דגים',
                amount: 6,
                comment: '',
                isActive: true
            },
        ],

        clean: [
            {
                id: 1,
                name: 'אקונומיקה',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 2,
                name: 'מרכך לשיער',
                amount: 1,
                comment: '',
                isActive: true
            },
            {
                id: 3,
                name: 'שמפו',
                amount: 6,
                comment: '',
                isActive: true
            },
            {
                id: 4,
                name: 'משחת שיניים',
                amount: 6,
                comment: '',
                isActive: true
            },
            {
                id: 5,
                name: 'נייר טואלט',
                amount: 6,
                comment: '',
                isActive: true
            },
        ]

    }
export default products