// app/api/predict/route.js
import { NextResponse } from 'next/server'
import { Client } from '@gradio/client'

export async function POST(request) {
    try {
        const formData = await request.formData()
        const image = formData.get('image')
        
        if (!image) {
            return NextResponse.json(
                { error: 'No image provided' },
                { status: 400 }
            )
        }

        const bytes = await image.arrayBuffer()
        const blob = new Blob([bytes])

        const client = await Client.connect('tomhan41/pasta')
        const result = await client.predict('/predict', { image: blob })

        return NextResponse.json(result.data)
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            { error: 'Failed to process image' },
            { status: 500 }
        )
    }
}