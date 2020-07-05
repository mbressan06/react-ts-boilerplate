const baseUrl = '//fathomless-lowlands-82210.herokuapp.com'
export const ApiUrls = {
    login: () => `login`,
    logout: () => `logout`,
    users: (userId?: number) => `users/${userId}`,
    products: (productId?: number) => `products/${productId}`
  }, buildApiUrl = (apiUrl: string) => `${baseUrl}/${apiUrl}`;
  