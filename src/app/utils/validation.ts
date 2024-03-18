export default function validateInput(input: string,nameLength:number): boolean {
    const regex = new RegExp(`^[A-Z][a-z-]{${nameLength-1},}[a-z]$`);
    return regex.test(input);
}