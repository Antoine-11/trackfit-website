// src/services/api.js
const API_BASE_URL = 'http://localhost:8000/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('auth_token');

    window.addEventListener('storage', (e) => {
      if (e.key === 'auth_token') {
        this.token = e.newValue;
      }
    });
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en la petición');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Métodos de autenticación
  async login(email, password) {
    const data = await this.request('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (data.token) {
      this.token = data.token;
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  }

  async register(userData) {
    const data = await this.request('/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (data.token) {
      this.token = data.token;
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  }

  async logout() {
    try {
      await this.request('/logout', { method: 'POST' });
    } finally {
      this.token = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
  }

  async getMe() {
    return this.request('/me');
  }

  // Métodos de entrenamientos
  async getWorkouts() {
    return this.request('/workouts');
  }

  async createWorkout(workoutData) {
    return this.request('/workouts', {
      method: 'POST',
      body: JSON.stringify(workoutData),
    });
  }

  async updateWorkout(id, workoutData) {
    return this.request(`/workouts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(workoutData),
    });
  }

  async deleteWorkout(id) {
    return this.request(`/workouts/${id}`, {
      method: 'DELETE',
    });
  }

  async getWorkoutStats() {
    return this.request('/workout-stats');
  }

  // Métodos de planes y suscripciones
  async getPlans() {
    return this.request('/subscriptions/plans');
  }

  async subscribe(planId, paymentMethod = 'card') {
    return this.request('/subscriptions/subscribe', {
      method: 'POST',
      body: JSON.stringify({ 
        plan_id: planId, 
        payment_method: paymentMethod 
      }),
    });
  }

  async getActiveSubscription() {
    try {
      return await this.request('/subscriptions/active');
    } catch (error) {
      if (error.message.includes('404') || error.message.includes('not found')) {
        return null; // No hay suscripción activa
      }
      throw error;
    }
  }

  async getSubscriptionHistory() {
    return this.request('/subscriptions/history');
  }

  async cancelSubscription() {
    return this.request('/subscriptions/cancel', {
      method: 'POST',
    });
  }

  // Métodos de clases
  async getClasses(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = queryParams ? `/classes?${queryParams}` : '/classes';
    return this.request(endpoint);
  }

  async getClassesByDay() {
    return this.request('/classes-by-day');
  }

  // Métodos de reservas
  async createReservation(classId, reservationDate) {
    return this.request('/reservations', {
      method: 'POST',
      body: JSON.stringify({
        class_id: classId,
        reservation_date: reservationDate,
      }),
    });
  }

  async getMyReservations() {
    return this.request('/my-reservations');
  }

  async cancelReservation(id) {
    return this.request(`/reservations/${id}/cancel`, {
      method: 'POST',
    });
  }
}

export default new ApiService();