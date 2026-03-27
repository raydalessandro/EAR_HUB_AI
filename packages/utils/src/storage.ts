export function createStorage(appName: string) {
  const prefix = `${appName}:`

  return {
    get(key: string): string | null {
      return localStorage.getItem(prefix + key)
    },
    set(key: string, value: string): void {
      localStorage.setItem(prefix + key, value)
    },
    remove(key: string): void {
      localStorage.removeItem(prefix + key)
    },
    clear(): void {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(prefix)) {
          localStorage.removeItem(key)
        }
      })
    },
  }
}
