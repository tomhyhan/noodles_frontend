'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import PastaLoader from '@/components/loader'

export default function Home() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleImage = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
            // Create a preview URL for the image
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedImage) return

        setLoading(true)
        try {
            // Create FormData to send the image
            const formData = new FormData()
            formData.append('image', selectedImage)

            // Send to your API route
            const response = await fetch('/api/predict', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) throw new Error('Prediction failed')

            const data = await response.json()
            router.push(`/${data[0]}`)
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to process image')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Image Analysis</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <input
                        onChange={handleImage}
                        type="file"
                        accept="image/*"
                        className="w-full"
                    />
                </div>

                {preview && (
                    <div className="relative h-64 w-full">
                        <Image
                            src={preview}
                            alt="Preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    disabled={!selectedImage || loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300"
                >
                    {loading ? <PastaLoader /> : 'Analyze Image'}
                </button>
            </form>

        </div>
    )
}