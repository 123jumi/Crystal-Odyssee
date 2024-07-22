import { http } from '@/utils/axios'
import type { Restaurant } from '../interfaces'
const BASE_URL = '/restaurants'

// Sends a request to the backend to find restaurants that match the query in the name, description, tags.name or reviews.rating fields.
export async function getSearchResults(
  query: string,
  sort: string,
  order: number,
  location: string,
  filter?:string,
): Promise<Restaurant[]> {
  const response = await http.get(BASE_URL, { params: { query, sort, order, location, filter } })
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error(response.data.error)
  }
}

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await http.get(BASE_URL)
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error(response.data.error)
  }
}
// Sends a request to the backend to find a restaurant by its id.
export async function getRestaurantById(id: string): Promise<Restaurant> {
  const response = await http.get(BASE_URL + `/${id}`)
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error(response.data.error)
  }
}
// Sends a request to the backend to create a new restaurant.
export async function createRestaurant(partialRestaurant: Restaurant): Promise<Restaurant | null> {
  const response = await http.post(BASE_URL, partialRestaurant)
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error(response.data.error)
  }
}
// Sends a request to the backend to update a restaurant.
export async function updateRestaurant(
  currentRestaurant: Restaurant,
  dataToUpdate: any
): Promise<Restaurant | null> {
  const response = await http.patch(BASE_URL + `/${currentRestaurant._id}`, dataToUpdate)
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error(response.data.error)
  }
}
// Sends a request to the backend to delete a restaurant.
export async function deleteRestaurant(id: number): Promise<Restaurant | null> {
  const response = await http.delete(BASE_URL + `/${id}`)
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error(response.data.error)
  }
}

// Fetch random pictures with a query
export async function fetchImageUrl(searchQuery: string): Promise<string> {
  const accessKey = import.meta.env.VITE_API_UNSPLASH
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&client_id=${accessKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results.length > 0 ? data.results[0].urls.regular : undefined;
  } catch (error) {
    console.error('Error fetching image:', error);
    return '';
  }
}