import { pastaData } from "@/lib/pastaData"

export async function generateStaticParams() {
    return [
        {noodles: "Spaghetti"},
        {noodles: "Fettuccine"},
        {noodles: "Penne"},
        {noodles: "Rigatoni"},
        {noodles: "Macaroni"},
        {noodles: "Linguine"},
        {noodles: "Farfalle"},
        {noodles: "Tagliatelle"},
        {noodles: "Fusilli"},
        {noodles: "Orzo"},
        {noodles: "Conchiglie"},
        {noodles: "Bucatini"},
        {noodles: "Orecchiette"},
        {noodles: "Ravioli"},
        {noodles: "Tortellini"},
        {noodles: "Fregola"},
    ]
}

export default async function Page({ params }) {
    
    const noodles = (await params).noodles
    console.log(noodles)
    return <div>My Post: {noodles} <p>{pastaData[noodles]}</p></div>
}

export const dynamicParams = false