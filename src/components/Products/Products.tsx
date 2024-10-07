import React from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    brand: string;
    description: string;
    thumbnail: string;
    rating: number;
    stock: number;
    tags: string[];
    sku: string;
    weight: number;
}

interface ProductsProps {
    products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p><strong>Ціна:</strong> ${product.price}</p>
                    <p><strong>Бренд:</strong> {product.brand}</p>
                    <p><strong>Опис:</strong> {product.description}</p>
                    <p><strong>Рейтинг:</strong> {product.rating}</p>
                    <p><strong>Наявність:</strong> {product.stock}</p>
                    <p><strong>Теги:</strong> {product.tags.join(', ')}</p>
                    <p><strong>Ідентифікатор:</strong> {product.sku}</p>
                    <p><strong>Вага:</strong> {product.weight}</p>



                    <img src={product.thumbnail} alt={product.title}/>
                </div>
            ))}
        </div>
    );
};
export default Products;

