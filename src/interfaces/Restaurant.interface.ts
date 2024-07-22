
export interface Restaurant {
  _id?: string
  name: string
  location: Location
  description: string
  address: {
    door: number
    local?: string
    street: string
    city: string
    province: string
    country: string
    postal: string
  }
  rating: { score: number; count: number }
 
  contact: { phone?: string; email: string }

  operatingHours: { openAt: string; closeAt: string }
  menu: { meal: string; price: number }[]
  imageUrl: string
  createdAt?: Date
  updatedAt?: Date
}
