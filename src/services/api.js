// src/services/api.js
const API_BASE_URL = "http://localhost:8000/api"

class ApiService {
  constructor() {
    this.token = localStorage.getItem("auth_token")

    window.addEventListener("storage", (e) => {
      if (e.key === "auth_token") {
        this.token = e.newValue
      }
    })
  }

  getHeaders() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`
    }

    return headers
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const config = {
      headers: this.getHeaders(),
      ...options,
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        // Mejorar el manejo de errores de validación
        if (response.status === 422 && data.errors) {
          const errorMessages = Object.values(data.errors).flat()
          throw new Error(errorMessages.join(". "))

        }
        throw new Error(data.message || "Error en la petición")
      }

      return data
    } catch (error) {
      console.error("API Error:", error)
      throw error
    }
  }

  // Métodos de autenticación
  async login(email, password) {
    const data = await this.request("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })

    if (data.token) {
      this.token = data.token
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
    }

    return data
  }

  async register(userData) {
    const data = await this.request("/register", {
      method: "POST",
      body: JSON.stringify(userData),
    })

    if (data.token) {
      this.token = data.token
      localStorage.setItem("auth_token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
    }

    return data
  }

  async logout() {
    try {
      await this.request("/logout", { method: "POST" })
    } finally {
      this.token = null
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user")
    }
  }

  async getMe() {
    return this.request("/me")
  }

  async resetPassword(resetData) {
    return this.request("/reset-password", {
      method: "POST",
      body: JSON.stringify(resetData),
    })
  }

  // Métodos de entrenamientos
  async getWorkouts() {
    return this.request("/workouts")
  }

  async createWorkout(workoutData) {
    return this.request("/workouts", {
      method: "POST",
      body: JSON.stringify(workoutData),
    })
  }

  async updateWorkout(id, workoutData) {
    return this.request(`/workouts/${id}`, {
      method: "PUT",
      body: JSON.stringify(workoutData),
    })
  }

  async deleteWorkout(id) {
    return this.request(`/workouts/${id}`, {
      method: "DELETE",
    })
  }

  async getWorkoutStats() {
    return this.request("/workout-stats")
  }

  // Métodos de planes y suscripciones
  async getPlans() {
    return this.request("/subscriptions/plans")
  }

  async subscribe(planId, paymentMethod = "card") {
    return this.request("/subscriptions/subscribe", {
      method: "POST",
      body: JSON.stringify({
        plan_id: planId,
        payment_method: paymentMethod,
      }),
    })
  }

  async getActiveSubscription() {
    try {
      return await this.request("/subscriptions/active")
    } catch (error) {
      if (error.message.includes("404") || error.message.includes("not found")) {
        return null
      }
      throw error
    }
  }

  async getSubscriptionHistory() {
    return this.request("/history/subscriptions")
  }

  async cancelSubscription() {
    return this.request("/subscriptions/cancel", {
      method: "POST",
    })
  }

  // Métodos de clases
  async getClasses(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString()
    const endpoint = queryParams ? `/classes?${queryParams}` : "/classes"
    return this.request(endpoint)
  }

  async getClass(id) {
    return this.request(`/classes/${id}`)
  }

  async getClassesByDay() {
    return this.request("/classes-by-day")
  }

  async getAvailableSchedules(classId, date) {
    const queryParams = new URLSearchParams({ date }).toString()
    return this.request(`/classes/${classId}/schedules?${queryParams}`)
  }

  // Métodos de reservas - CORREGIDOS
  async createReservation(reservationData) {
    console.log("Enviando reserva:", reservationData)
    return this.request("/reservations", {
      method: "POST",
      body: JSON.stringify(reservationData),
    })
  }

  async getReservations() {
    return this.request("/my-reservations")
  }

  async getReservation(reservationId) {
    return this.request(`/reservations/${reservationId}`)
  }

  async cancelReservation(id) {
    return this.request(`/reservations/${id}/cancel`, {
      method: "POST",
    })
  }

  // Métodos de compatibilidad
  async getMyReservations() {
    return this.getReservations()
  }

  async deleteReservation(reservationId) {
    return this.cancelReservation(reservationId)
  }
}

export default new ApiService()