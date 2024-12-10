// API请求工具
export const request = async (url, options = {}) => {
  try {
    const response = await fetch(url, options)
    return await response.json()
  } catch (error) {
    throw new AppError({
      type: 'api',
      message: error.message
    })
  }
}