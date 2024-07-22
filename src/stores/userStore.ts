import { defineStore } from 'pinia'
import {
  fetchUsernameByEmail,
  createUserReservation,
  createUserReview,
  fetchReservations,
  createLanguage,
  fetchLanguageById
} from '@/services/index'
// import type { Reservation, Review } from '../interfaces'
interface UserState {
  _id: string
  username: string
  email: string
  password: string
  locale: string
  error: any

}
export const useUser = defineStore('user', {
  state: (): UserState => ({
    _id: '',
    username: '',
    email: '',
    password: '',
    locale: '',
    error: null,
  }),
  getters: {
    getUsername(): string {
      return this.username
    },
    getId(): string {
      return this._id
    },
  },
  actions: {
    
   
  }

   
   
  
})
