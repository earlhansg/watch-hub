import { Product } from "@/app/_utils/types/product";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const start = searchParams.get('_start') || 0; // Default to 0 if not provided
    const end = searchParams.get('_end') || 8;     // Default to 8 if not provided

    const res = await fetch(`http://localhost:3001/products?_start=${start}&_end=${end}`);
    const products = await res.json();
    return Response.json({ products });
}


// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const start = searchParams.get('_start') || 0;
//     const end = searchParams.get('_end') || 8;
//     const keywords = searchParams.get('_keywords') || '';

//     if (keywords === '') {
//         console.log('default fetch')
//         const res = await fetch(`http://localhost:3001/products?_start=${start}&_end=${end}`);
//         const products = await res.json();
//         return Response.json({ products });
//     } else if (keywords !== '') {
//         const res = await fetch(`http://localhost:3001/products`);
//         const allProducts: Product[] = await res.json();
//         const filteredByTitle = allProducts.filter((product) => product.title.toLowerCase() === keywords.toLowerCase());
//         console.log('filteredByTitle', filteredByTitle)
//         Response.json({ products: filteredByTitle});
//     }
// }