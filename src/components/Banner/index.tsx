import React from 'react';
import './Banner.css'

interface BannerProps {
    endercoImagem: string,
    altTexto?: string
}

const Banner = ({ endercoImagem, altTexto }: BannerProps) => {
    return (
        //JSX
        <header className="banner">
            <img src={endercoImagem} alt={altTexto} />
        </header>
    )
}

export default Banner;