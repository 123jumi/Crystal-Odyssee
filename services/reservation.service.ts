import { http } from '@/utils/axios'
import type { Reservation } from '@/shared/interfaces/index'

const BASE_URL = '/reservations'

export async function createUserReservation(reservation: Reservation): Promise<Reservation> {
  const response = await http.post(BASE_URL, reservation)
  if (!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'createUserReservation()' " + response.data.error)
  }
}

export async function fetchUserReservation(userId: string): Promise<Reservation[]> {
  const response = await http.get(BASE_URL, { params: { id: userId } })
  if (!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'fetchReviews()' " + response.data.error)
  }
}

export async function fetchReservations(userId?: string, restaurantId?: string): Promise<Reservation[]> {
  const response = await http.get(BASE_URL, { params: { user: userId, resto: restaurantId } })
  if (!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'fetchReservations()' " + response.data.error)
  }
}
