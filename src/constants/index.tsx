export const ApiUrls = {
    login: () => `login`,
    logout: () => `logout`,
    users: (userId?: number) => `users/${userId}`,
    products: (productId?: number) => `products/${productId}`
  }, buildApiUrl = (apiUrl: string) => `http://localhost:5000/${apiUrl}`;
  