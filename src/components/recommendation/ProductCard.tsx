import "./ProductCard.css";

interface Props {

    image: string;

    title: string;

    subtitle?: string;

    quantity?: number;

    price?: number;

    url?: string;

}

export default function ProductCard({

    image,

    title,

    subtitle,

    quantity,

    price,

    url

}: Props) {

    return (

        <div className="product-card">

            <div className="product-image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="product-content">

                <h3>{title}</h3>

                {subtitle && (

                    <p className="subtitle">

                        {subtitle}

                    </p>

                )}

                {quantity !== undefined && (

                    <p>

                        <strong>

                            Qty:

                        </strong>{" "}

                        {quantity}

                    </p>

                )}

                {price !== undefined && (

                    <p className="price">

                        R{price.toLocaleString()}

                    </p>

                )}

                {url && (

                    <a

                        href={url}

                        className="view-button"

                    >

                        View Product

                    </a>

                )}

            </div>

        </div>

    );

}