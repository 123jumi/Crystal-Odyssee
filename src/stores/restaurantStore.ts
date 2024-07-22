import { defineStore } from 'pinia'
import {
  getRestaurants,
  getSearchResults
 
} from '@/services/index'

import type { Restaurant } from '../interfaces'
interface RestaurantState {
  error: any
  restaurantList: Restaurant[]
}

export const useRestaurant = defineStore('restaurant', {
  state: (): RestaurantState => ({
    restaurantList: [],
    error: null
  }),
  getters: {
    getRestaurantList(): Restaurant[] {
      return this.restaurantList
    },
   
   
    getError(): string {
      return this.error
    }
  },
  actions: {
    // Get all restaurants from backend
    async fetchRestaurantList() {
      try {
        this.restaurantList = await getRestaurants()
        this.error = null
      } catch (error) {
        this.error = error
      }
    },
    //Get the restaurant by finding it with the id, from the backend
  
    
    async fetchSearchResults(
      query: string,
      sort: string,
      order: number,
      location: string,
      filter?: string
    ) {
      try {
        this.restaurantList = await getSearchResults(query, sort, order, location, filter)
        this.error = null
      } catch (error) {
        this.error = error
      }
    },
    
    async setError(error: any) {
      this.error = error
    }
  }
})
