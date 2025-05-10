import path from 'path';
import { promises as fs } from 'fs';

export async function fetchData() {
    try {
    const filePath = path.join(process.cwd(), 'Data', 'Properties.json'); // Adjust to 'data' if needed
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
    } catch (err) {
    console.error('Error reading Properties.json:', err);
    throw err;
    }
}
