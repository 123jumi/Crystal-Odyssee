import { http } from '@/utils/axios'
import type { UserForm } from '@/shared/interfaces/index'

const BASE_URL = '/users'

// Sends a request to the backend to find a user by its email.
export async function fetchUsernameByEmail(email: string): Promise<UserForm> {
  const response = await http.get(BASE_URL + `/${email}`)
  if (!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'fetchUserByEmail()' " + response.data.error)
  }
}

export async function createLanguage(locale: string): Promise<string> {
  const response = await http.post(BASE_URL, locale)
  if(!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'createLanguage()'" + response.data.error)
  }
}

export async function fetchLanguageById(id: string): Promise<string> {
  const response = await http.get(BASE_URL + `/${id}`)
  if(!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'fetchLanguageById()' " + response.data.error)
  }
}


