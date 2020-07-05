const baseUrl =  process.env.BASE_URL;
export const ApiUrls = {
    login: () => `login`,
    logout: () => `logout`,
    users: (userId?: number) => `users/${userId}`,
    products: (productId?: number) => `products/${productId}`
  }, buildApiUrl = (apiUrl: string) => `${baseUrl}/${apiUrl}`;
  