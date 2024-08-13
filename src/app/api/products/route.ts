export async function GET() {
    const res = await fetch("http://localhost:3001/products?_start=0&_limit=8");
    const products = await res.json();
    return Response.json({products});
}