type names = { name: string; surname: string };
export default class LocalStorageManager {
  static save(key: string, data: names): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string): names {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static remove(): void {
    localStorage.removeItem('rss_puzzle__user');
  }
}
