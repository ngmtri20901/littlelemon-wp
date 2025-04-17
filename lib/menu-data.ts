export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  tags: string[]
  dietaryOptions: string[]
  cuisine: string
  ingredients: string[]
  reviews: Review[]
  rating: number
  isAvailable: boolean
}

export interface Review {
  id: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  date: string
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
}

export const dietaryOptions = [
  { id: "all", label: "All" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "low-carb", label: "Low Carb" },
  { id: "gluten-free", label: "Gluten Free" },
]

export const cuisines = [
  { id: "all", label: "All Cuisines" },
  { id: "mediterranean", label: "Mediterranean" },
  { id: "italian", label: "Italian" },
  { id: "greek", label: "Greek" },
  { id: "asian", label: "Asian" },
  { id: "middle-eastern", label: "Middle Eastern" },
]

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Greek Salad",
    description:
      "Our famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "salads",
    tags: ["best-seller"],
    dietaryOptions: ["vegetarian", "gluten-free"],
    cuisine: "greek",
    ingredients: ["lettuce", "peppers", "olives", "feta cheese", "garlic", "rosemary", "croutons"],
    reviews: [
      {
        id: "r1",
        userName: "Maria G.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "The best Greek salad I've had outside of Greece! Fresh ingredients and perfect dressing.",
        date: "2023-05-15T14:30:00Z",
      },
      {
        id: "r2",
        userName: "John D.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "Very good salad, though I would have liked a bit more feta cheese.",
        date: "2023-04-22T11:15:00Z",
      },
    ],
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "appetizers",
    tags: ["best-seller"],
    dietaryOptions: ["vegetarian", "vegan"],
    cuisine: "italian",
    ingredients: ["bread", "garlic", "salt", "olive oil", "tomatoes", "basil"],
    reviews: [
      {
        id: "r3",
        userName: "Emily W.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Simple yet delicious! The tomatoes were so fresh.",
        date: "2023-06-01T18:45:00Z",
      },
    ],
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "desserts",
    tags: ["best-seller"],
    dietaryOptions: ["vegetarian"],
    cuisine: "mediterranean",
    ingredients: ["lemon", "sugar", "flour", "eggs", "butter"],
    reviews: [
      {
        id: "r4",
        userName: "Robert J.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Perfectly balanced sweetness and tartness. A must-try!",
        date: "2023-05-28T20:15:00Z",
      },
      {
        id: "r5",
        userName: "Sarah M.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "Delicious dessert, though a bit too sweet for my taste.",
        date: "2023-05-10T13:20:00Z",
      },
    ],
    rating: 4.7,
    isAvailable: true,
  },
  {
    id: "4",
    name: "Grilled Fish",
    description:
      "Mediterranean-style grilled sea bass with lemon, herbs, and olive oil. Served with roasted vegetables.",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "mains",
    tags: ["new"],
    dietaryOptions: ["low-carb", "gluten-free"],
    cuisine: "mediterranean",
    ingredients: ["sea bass", "lemon", "herbs", "olive oil", "vegetables"],
    reviews: [
      {
        id: "r6",
        userName: "Michael P.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "The fish was perfectly cooked and seasoned. Will order again!",
        date: "2023-06-05T19:30:00Z",
      },
    ],
    rating: 4.9,
    isAvailable: true,
  },
  {
    id: "5",
    name: "Margherita Pizza",
    description: "Classic Margherita pizza with tomato sauce, fresh mozzarella, basil, and olive oil.",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "mains",
    tags: ["best-seller"],
    dietaryOptions: ["vegetarian"],
    cuisine: "italian",
    ingredients: ["dough", "tomato sauce", "mozzarella", "basil", "olive oil"],
    reviews: [
      {
        id: "r7",
        userName: "Lisa K.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "Good classic pizza. The crust was perfect!",
        date: "2023-05-20T18:00:00Z",
      },
    ],
    rating: 4.6,
    isAvailable: true,
  },
  {
    id: "6",
    name: "Falafel Plate",
    description:
      "Homemade falafel served with hummus, tahini sauce, pita bread, and a side of fresh Mediterranean salad.",
    price: 13.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "mains",
    tags: ["new", "discount"],
    dietaryOptions: ["vegetarian", "vegan"],
    cuisine: "middle-eastern",
    ingredients: ["chickpeas", "herbs", "spices", "tahini", "pita bread", "vegetables"],
    reviews: [
      {
        id: "r8",
        userName: "Ahmed H.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Authentic taste and generous portions. The hummus was exceptional!",
        date: "2023-06-02T13:45:00Z",
      },
    ],
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: "7",
    name: "Pad Thai",
    description: "Traditional Thai stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts.",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "mains",
    tags: ["new"],
    dietaryOptions: ["gluten-free"],
    cuisine: "asian",
    ingredients: ["rice noodles", "eggs", "tofu", "bean sprouts", "peanuts", "lime", "fish sauce"],
    reviews: [
      {
        id: "r9",
        userName: "Jennifer L.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "Flavorful and authentic. Could use a bit more spice though.",
        date: "2023-06-03T20:10:00Z",
      },
    ],
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: "8",
    name: "Moussaka",
    description:
      "Traditional Greek casserole with layers of eggplant, potato, seasoned ground beef, and béchamel sauce.",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "mains",
    tags: ["best-seller"],
    dietaryOptions: ["low-carb"],
    cuisine: "greek",
    ingredients: ["eggplant", "potato", "ground beef", "béchamel sauce", "tomato sauce", "spices"],
    reviews: [
      {
        id: "r10",
        userName: "Sophia P.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Just like my grandmother used to make! Authentic and delicious.",
        date: "2023-05-25T19:20:00Z",
      },
    ],
    rating: 4.7,
    isAvailable: true,
  },
  {
    id: "9",
    name: "Tiramisu",
    description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: 7.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "desserts",
    tags: ["discount"],
    dietaryOptions: ["vegetarian"],
    cuisine: "italian",
    ingredients: ["ladyfingers", "coffee", "mascarpone", "eggs", "cocoa"],
    reviews: [
      {
        id: "r11",
        userName: "Marco B.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Perfect balance of coffee and cream. Not too sweet, just right!",
        date: "2023-06-04T21:30:00Z",
      },
    ],
    rating: 4.9,
    isAvailable: true,
  },
  {
    id: "10",
    name: "Hummus with Pita",
    description: "Creamy hummus served with warm pita bread, olive oil, and a sprinkle of paprika.",
    price: 7.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "appetizers",
    tags: ["best-seller"],
    dietaryOptions: ["vegetarian", "vegan"],
    cuisine: "middle-eastern",
    ingredients: ["chickpeas", "tahini", "lemon juice", "garlic", "olive oil", "pita bread"],
    reviews: [
      {
        id: "r12",
        userName: "Leila K.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "Smooth and flavorful hummus. The pita was fresh and warm.",
        date: "2023-05-18T17:45:00Z",
      },
    ],
    rating: 4.6,
    isAvailable: true,
  },
  {
    id: "11",
    name: "Vegetable Stir Fry",
    description: "Fresh seasonal vegetables stir-fried with tofu in a savory sauce, served with steamed rice.",
    price: 13.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "mains",
    tags: ["new", "discount"],
    dietaryOptions: ["vegetarian", "vegan", "gluten-free"],
    cuisine: "asian",
    ingredients: ["mixed vegetables", "tofu", "soy sauce", "ginger", "garlic", "rice"],
    reviews: [
      {
        id: "r13",
        userName: "Tina W.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "Healthy and tasty! The vegetables were fresh and perfectly cooked.",
        date: "2023-06-06T18:30:00Z",
      },
    ],
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: "12",
    name: "Baklava",
    description: "Sweet pastry made of layers of filo filled with chopped nuts and sweetened with honey.",
    price: 5.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "desserts",
    tags: ["best-seller"],
    dietaryOptions: ["vegetarian"],
    cuisine: "middle-eastern",
    ingredients: ["filo pastry", "nuts", "honey", "butter", "cinnamon"],
    reviews: [
      {
        id: "r14",
        userName: "Omar F.",
        userAvatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "Perfectly sweet and flaky. The honey syrup was divine!",
        date: "2023-05-30T15:20:00Z",
      },
    ],
    rating: 4.8,
    isAvailable: true,
  },
]

// Helper functions
export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id)
}

export function getMenuItemsByTag(tag: string): MenuItem[] {
  return menuItems.filter((item) => item.tags.includes(tag))
}

export function getMenuItemsByDiet(diet: string): MenuItem[] {
  if (diet === "all") return menuItems
  return menuItems.filter((item) => item.dietaryOptions.includes(diet))
}

export function getMenuItemsByCuisine(cuisine: string): MenuItem[] {
  if (cuisine === "all") return menuItems
  return menuItems.filter((item) => item.cuisine === cuisine)
}

export function getMenuItemsByPriceRange(min: number, max: number): MenuItem[] {
  return menuItems.filter((item) => item.price >= min && item.price <= max)
}

export function searchMenuItems(query: string): MenuItem[] {
  const lowercaseQuery = query.toLowerCase()
  return menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.ingredients.some((ingredient) => ingredient.toLowerCase().includes(lowercaseQuery)),
  )
}
