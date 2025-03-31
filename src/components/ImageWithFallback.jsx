import { useState } from 'react'

export default function ImageWithFallback({ src, alt, className }) {
    const [imageError, setImageError] = useState(false)

    if (imageError) {
        return (
            <div className="image-error">
                <span className="image-error-icon">📸</span>
                <span className="image-error-text">No image found</span>
            </div>
        )
    }

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
        />
    )
} 