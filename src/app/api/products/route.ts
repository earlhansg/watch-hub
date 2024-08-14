export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const start = searchParams.get('_start') || 0; // Default to 0 if not provided
    const end = searchParams.get('_end') || 8;     // Default to 8 if not provided
    const res = await fetch(`http://localhost:3001/products?_start=${start}&_end=${end}`);
    const products = await res.json();
    return Response.json({ products });
}