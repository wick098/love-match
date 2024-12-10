// 错误处理
export class AppError extends Error {
  constructor(config) {
    super(config.message)
    this.name = 'AppError'
    this.config = config
  }

  static handle(error) {
    console.error(`[${error.config.type}] ${error.message}`)
  }
}