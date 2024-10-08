export async function getProducts() {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      description:
        "A high-end smartphone with a powerful processor and excellent camera.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 699.99,
    },
    {
      id: 2,
      name: "Laptop",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description:
        "A sleek, lightweight laptop with an advanced graphics card for gaming.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 1299.99,
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1589571894963-df05a63edba2",
      description:
        "Noise-canceling wireless earbuds with superior sound quality.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 149.99,
    },
    {
      id: 4,
      name: "Smartwatch",
      image: "https://images.unsplash.com/photo-1599061398298-600bf4cb4243",
      description:
        "A feature-packed smartwatch with fitness tracking and notifications.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 199.99,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1607000044944-dc21fd3c3a24",
      description:
        "A portable Bluetooth speaker with deep bass and 360-degree sound.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 79.99,
    },
    {
      id: 6,
      name: "4K TV",
      image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38",
      description:
        "A 55-inch 4K Ultra HD television with HDR and smart TV capabilities.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 999.99,
    },
    {
      id: 7,
      name: "Gaming Console",
      image: "https://images.unsplash.com/photo-1595829718812-0381658370b4",
      description:
        "A next-gen gaming console with stunning graphics and fast performance.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 499.99,
    },
    {
      id: 8,
      name: "Tablet",
      image: "https://images.unsplash.com/photo-1539889704200-237283af76b0",
      description:
        "A high-resolution tablet ideal for streaming and productivity.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 329.99,
    },
    {
      id: 9,
      name: "DSLR Camera",
      image: "https://images.unsplash.com/photo-1572292091065-d432f9c37b29",
      description:
        "A professional DSLR camera with inter changeable lenses & 4K video recording.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 899.99,
    },
    {
      id: 10,
      name: "Wireless Mouse",
      image: "https://images.unsplash.com/photo-1570121013056-c9f7e9a52e3e",
      description:
        "A sleek, ergonomic wireless mouse with customizable buttons.",
      quantityAvailable: Math.floor(Math.random() * 100),
      unitPrice: 39.99,
    },
  ];

  return products || [];
}
