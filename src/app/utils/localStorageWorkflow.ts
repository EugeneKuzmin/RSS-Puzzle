type names = {name:string, surname:string}
export default class LocalStorageManager {
    save(key: string, data: names): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get(key: string): names {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}