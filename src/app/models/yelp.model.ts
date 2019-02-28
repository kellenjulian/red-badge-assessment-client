export interface Business {

    rating: number,
    price: string,
    phone: string,
    id: string,
    name: string,
    location: {
        city: string,
        state: string,
        address1: string
    },
    image_url: string
    
}