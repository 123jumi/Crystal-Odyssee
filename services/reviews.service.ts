import { http } from '@/utils/axios'
import type { Review, Vote } from '@/shared/interfaces/index'

const BASE_URL = '/reviews'

// Sends a request to the backend to find all reviews.
export async function fetchReviews(userId?: string, restaurantId?: string): Promise<Review[]> {
  const response = await http.get(BASE_URL, { params: { user: userId, resto: restaurantId } })
  if (!response.data?.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'fetchReviews()' " + response.data.error)
  }
}
//
export async function createUserReview(review: Review): Promise<Review> {
  const response = await http.post(BASE_URL, review)
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'createUserReview()' " + response.data.error)
  }
}

export async function createReviewVote(reviewId: string, vote: Vote): Promise<Review> {
  const response = await http.post(BASE_URL + '/votes', {review: reviewId, vote})
  if (!response.data.error) {
    return response.data
  } else {
    throw new Error("Client erreur dans 'createReviewVote()' " + response.data.errror)
  }
}