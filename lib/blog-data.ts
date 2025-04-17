export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  publishedAt: string
  author: {
    name: string
    avatar: string
  }
  featured?: boolean
}

export interface BlogComment {
  id: string
  postId: string
  author: string
  authorEmail: string
  content: string
  createdAt: string
}

export const categories = [
  { id: "new-dishes", name: "New Dishes" },
  { id: "promotions", name: "Promotions" },
  { id: "events", name: "Events" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "recipes", name: "Recipes" },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "introducing-our-summer-menu",
    title: "Introducing Our Summer Menu: Fresh Flavors for the Season",
    excerpt: "Discover our new summer dishes featuring seasonal ingredients and Mediterranean flavors.",
    content: `
# Introducing Our Summer Menu: Fresh Flavors for the Season

Summer is here, and at Little Lemon, we're celebrating with a brand new menu that captures the essence of the season. Our culinary team has been hard at work crafting dishes that showcase the freshest seasonal ingredients while staying true to our Mediterranean roots.

## Seasonal Ingredients

This summer, we're highlighting:

- Locally sourced heirloom tomatoes
- Fresh herbs from our rooftop garden
- Wild-caught seafood
- Stone fruits and berries at their peak ripeness

## New Signature Dishes

### Grilled Mediterranean Sea Bass

Served with a lemon herb sauce, roasted summer vegetables, and a side of our house-made tzatziki. The sea bass is sourced sustainably and grilled to perfection to maintain its delicate flavor.

### Heirloom Tomato & Burrata Salad

A celebration of summer's bounty featuring multicolored heirloom tomatoes, creamy burrata cheese, fresh basil, and a drizzle of our signature lemon-infused olive oil.

### Summer Berry Lemon Tart

The perfect ending to your meal - our classic lemon tart topped with a medley of seasonal berries and a touch of mint.

## Limited Time Only

These summer specials will only be available until the end of August, so make your reservation today to experience these fresh, seasonal flavors!
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "new-dishes",
    publishedAt: "2023-06-15T10:00:00Z",
    author: {
      name: "Maria Gonzalez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
  {
    id: "2",
    slug: "weekend-brunch-launch",
    title: "Weekend Brunch Launch: Join Us for a Mediterranean Morning",
    excerpt:
      "We're excited to announce our new weekend brunch menu, available every Saturday and Sunday from 10am to 2pm.",
    content: `
# Weekend Brunch Launch: Join Us for a Mediterranean Morning

We're thrilled to announce the launch of our weekend brunch service at Little Lemon! Starting this weekend, join us every Saturday and Sunday from 10am to 2pm for a Mediterranean-inspired morning experience.

## A Fresh Take on Brunch

Our brunch menu combines traditional breakfast favorites with Mediterranean flavors to create a unique dining experience you won't find anywhere else in town.

## Menu Highlights

### Shakshuka

Our signature shakshuka features eggs poached in a rich tomato sauce with bell peppers, onions, and spices, served with freshly baked sourdough bread for dipping.

### Lemon Ricotta Pancakes

Light and fluffy pancakes made with ricotta cheese and lemon zest, topped with honey, fresh berries, and a sprinkle of pistachios.

### Mediterranean Breakfast Board

A selection of hummus, labneh, olives, cucumber, tomato, feta cheese, and warm pita bread - perfect for sharing!

### Brunch Cocktails

Enjoy our special brunch cocktails, including:
- Classic Mimosas
- Mediterranean Bloody Mary with harissa
- Spiked Mint Tea

## Reservations Recommended

We expect our brunch service to be popular, so reservations are highly recommended. Book your table today through our website or by calling us directly.

We can't wait to share our Mediterranean morning with you!
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "new-dishes",
    publishedAt: "2023-05-28T09:30:00Z",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    slug: "summer-cooking-class-series",
    title: "Summer Cooking Class Series: Learn the Secrets of Mediterranean Cuisine",
    excerpt: "Join our chefs for hands-on cooking classes every Wednesday evening this summer.",
    content: `
# Summer Cooking Class Series: Learn the Secrets of Mediterranean Cuisine

Have you ever wanted to recreate Little Lemon's dishes at home? Now's your chance! We're excited to announce our Summer Cooking Class Series, where our talented chefs will share their knowledge and passion for Mediterranean cuisine.

## Class Schedule

Classes will be held every Wednesday evening from 6:30pm to 8:30pm throughout the summer months (June-August).

### June: Mezze & Small Plates

- June 7: The Perfect Hummus & Variations
- June 14: Stuffed Grape Leaves & Falafel
- June 21: Spanakopita & Greek Dips
- June 28: Mediterranean Flatbreads

### July: Main Courses

- July 5: Seafood Specialties
- July 12: Perfect Grilled Meats
- July 19: Vegetarian Mains
- July 26: Pasta & Risotto with Mediterranean Flavors

### August: Sweet Endings

- August 2: Classic Baklava
- August 9: Mediterranean Fruit Desserts
- August 16: Cookies & Small Sweets
- August 23: Modern Mediterranean Desserts
- August 30: Graduation Dinner (participants prepare a full meal)

## What's Included

Each class includes:
- Hands-on cooking instruction
- All ingredients and equipment
- Recipe cards to take home
- Dinner and a glass of wine
- 10% discount on same-day restaurant dining

## Pricing & Registration

Individual classes: $85 per person
Full month series: $300 per person (save $40)
Full summer series: $850 per person (save $170)

Space is limited to 12 participants per class, so early registration is recommended. Visit our website or call us to secure your spot!
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "events",
    publishedAt: "2023-05-15T14:00:00Z",
    author: {
      name: "Chef David Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "4",
    slug: "summer-promotion-family-feast",
    title: "Summer Promotion: Family Feast To-Go Package",
    excerpt: "Enjoy our special Family Feast package, perfect for picnics, beach days, or easy dinners at home.",
    content: `
# Summer Promotion: Family Feast To-Go Package

This summer, we're making it easier than ever to enjoy Little Lemon's Mediterranean flavors wherever your adventures take you. Introducing our Family Feast To-Go Package, perfect for picnics, beach days, or easy dinners at home.

## The Family Feast Package

Designed to feed 4-6 people, our Family Feast includes:

### Starters
- Large Greek salad with our house dressing
- Hummus and tzatziki with warm pita bread
- Marinated olives and pickled vegetables

### Main Course (Choose One)
- Grilled lemon herb chicken skewers
- Lamb kofta with mint yogurt sauce
- Vegetable moussaka (vegetarian option)

### Sides
- Lemon herb roasted potatoes
- Grilled seasonal vegetables
- Mediterranean rice pilaf

### Dessert
- Assorted baklava and cookies

## Special Pricing

The Family Feast Package is priced at $120 (a $150 value if purchased separately).

## How to Order

Orders must be placed at least 3 hours in advance. You can order:
- Online through our website
- By calling us directly
- Through our mobile app

## Limited Time Offer

This special promotion is available from June 1st through August 31st. Perfect for those summer days when you want a delicious meal without the fuss of cooking!

## Bonus Offer

For the month of June, each Family Feast order comes with a complimentary bottle of our house-made lemonade!
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "promotions",
    publishedAt: "2023-06-01T11:30:00Z",
    author: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
  {
    id: "5",
    slug: "benefits-of-mediterranean-diet",
    title: "The Benefits of a Mediterranean Diet: Health and Flavor Combined",
    excerpt:
      "Discover why the Mediterranean diet is consistently ranked as one of the healthiest eating patterns in the world.",
    content: `
# The Benefits of a Mediterranean Diet: Health and Flavor Combined

At Little Lemon, our menu is inspired by the rich culinary traditions of the Mediterranean region. But did you know that the Mediterranean diet is consistently ranked as one of the healthiest eating patterns in the world? Let's explore why this way of eating is good for both your health and your taste buds.

## What is the Mediterranean Diet?

The Mediterranean diet is based on the traditional foods that people used to eat in countries like Italy and Greece in the 1960s. Research has shown that people in these regions were exceptionally healthy compared to Americans and had a low risk of many lifestyle diseases.

The diet typically includes:

- Daily consumption of vegetables, fruits, whole grains, and healthy fats
- Weekly intake of fish, poultry, beans, and eggs
- Moderate portions of dairy products
- Limited intake of red meat

## Health Benefits

### Heart Health

Numerous studies have shown that the Mediterranean diet can reduce the risk of heart disease. The emphasis on healthy fats like olive oil, nuts, and fatty fish provides omega-3 fatty acids and monounsaturated fats that are good for your heart.

### Weight Management

Despite being moderately high in fat, the Mediterranean diet has been shown to help with weight loss and maintenance. The focus on whole, unprocessed foods and the absence of refined sugars and flours helps maintain steady blood sugar levels and reduces cravings.

### Longevity

Several studies have found that people who follow a Mediterranean diet have a lower risk of premature death and are more likely to live longer, healthier lives.

### Brain Health

The diet has been associated with better cognitive function and a lower risk of developing Alzheimer's disease and other forms of dementia.

## Flavor Without Sacrifice

One of the best things about the Mediterranean diet is that it's not about deprivation. It's about enjoying delicious, flavorful foods that happen to be good for you.

At Little Lemon, we embrace these principles by:

- Using extra virgin olive oil as our primary cooking fat
- Featuring an abundance of fresh vegetables and herbs
- Incorporating whole grains into our dishes
- Serving sustainably sourced seafood
- Creating plant-forward dishes where meat is a complement, not the focus

## Try It Yourself

Next time you dine with us, notice how our menu reflects these Mediterranean principles. And if you're inspired to incorporate more Mediterranean-style eating at home, start with these simple steps:

1. Replace butter with olive oil
2. Eat more fruits and vegetables
3. Choose fish at least twice a week
4. Reduce red meat consumption
5. Enjoy meals with family and friends

Your taste buds and your body will thank you!
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "lifestyle",
    publishedAt: "2023-04-20T09:15:00Z",
    author: {
      name: "Dr. Elena Papadopoulos",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "6",
    slug: "classic-greek-salad-recipe",
    title: "Recipe: Our Classic Greek Salad with Homemade Dressing",
    excerpt: "Learn how to make our signature Greek salad with our chef's special dressing recipe.",
    content: `
# Recipe: Our Classic Greek Salad with Homemade Dressing

Our Greek salad is one of the most popular items on our menu, and today we're sharing our recipe so you can enjoy it at home! This refreshing salad is perfect as a light lunch or as a side dish for dinner.

## Ingredients

### For the Salad (Serves 4):
- 1 large cucumber, diced (about 2 cups)
- 1 pint cherry tomatoes, halved
- 1 red bell pepper, diced
- 1/2 red onion, thinly sliced
- 1 cup kalamata olives, pitted
- 6 oz feta cheese, cubed (about 1 cup)
- 2 tablespoons fresh oregano leaves

### For the Dressing:
- 1/4 cup extra virgin olive oil
- 2 tablespoons red wine vinegar
- 1 lemon, juiced
- 1 clove garlic, minced
- 1 teaspoon dried oregano
- 1/2 teaspoon Dijon mustard
- Salt and freshly ground black pepper, to taste

## Instructions

### Prepare the Salad:
1. In a large bowl, combine the cucumber, cherry tomatoes, bell pepper, red onion, and kalamata olives.
2. Gently toss the vegetables to combine.

### Make the Dressing:
1. In a small bowl, whisk together the olive oil, red wine vinegar, lemon juice, minced garlic, dried oregano, and Dijon mustard.
2. Season with salt and pepper to taste.

### Assemble the Salad:
1. Pour the dressing over the vegetables and toss gently to coat.
2. Add the cubed feta cheese and fresh oregano leaves.
3. Toss very gently to combine, being careful not to break up the feta too much.
4. Let the salad sit for about 10 minutes before serving to allow the flavors to meld.

## Chef's Tips

- For the best flavor, make sure all your vegetables are at room temperature.
- Use the highest quality feta you can find - we recommend Greek feta made from sheep's milk.
- Don't skip the fresh oregano - it adds a wonderful aromatic quality that dried oregano can't match.
- This salad is even better the next day, so consider making it ahead of time!

## Variations

- Add 1 cup of cooked quinoa or farro to make it a more substantial meal.
- Include 1 cup of chickpeas for added protein.
- In the summer, add chunks of watermelon for a sweet contrast.

Enjoy this taste of Little Lemon at home, and let us know how your salad turns out!
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "recipes",
    publishedAt: "2023-03-12T16:45:00Z",
    author: {
      name: "Chef David Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "7",
    slug: "meet-our-head-chef",
    title: "Meet Our Head Chef: The Culinary Journey of David Chen",
    excerpt:
      "Learn about the experiences and inspirations that shaped our head chef's approach to Mediterranean cuisine.",
    content: `
# Meet Our Head Chef: The Culinary Journey of David Chen

Behind every great restaurant is a passionate chef with a unique story. Today, we're excited to introduce you to the culinary mastermind behind Little Lemon's Mediterranean-inspired menu: our head chef, David Chen.

## Early Beginnings

David's love for cooking began in his grandmother's kitchen in Taiwan, where he learned the importance of fresh ingredients and balanced flavors. "My grandmother could create amazing dishes with just a few simple ingredients," David recalls. "She taught me that good cooking is about respecting your ingredients and understanding how flavors work together."

## Culinary Education and Training

After moving to the United States at age 18, David pursued formal culinary training at the Culinary Institute of America. He then honed his skills in several Michelin-starred restaurants in New York and San Francisco, working under renowned chefs who specialized in various cuisines.

## Mediterranean Inspiration

David's passion for Mediterranean cuisine was ignited during a year-long sabbatical where he traveled throughout Greece, Turkey, Lebanon, and Morocco. "I was captivated by how these cultures use fresh herbs, olive oil, and simple cooking techniques to create incredibly flavorful dishes," he explains.

During his travels, David worked in local restaurants, learned from home cooks, and attended regional cooking schools to deepen his understanding of Mediterranean culinary traditions.

## Philosophy in the Kitchen

David's approach to cooking at Little Lemon combines his technical expertise with his deep appreciation for Mediterranean flavors and ingredients.

"I believe in letting ingredients speak for themselves," says David. "Our menu focuses on sourcing the highest quality seasonal produce and preparing it in ways that enhance its natural flavors rather than masking them."

This philosophy is evident in Little Lemon's menu, where simple dishes like our Greek salad and grilled branzino showcase the quality of their ingredients through thoughtful preparation.

## Innovation with Respect for Tradition

While David is deeply respectful of traditional Mediterranean cooking methods, he's not afraid to innovate. "I like to think of our menu as 'Mediterranean-inspired' rather than strictly traditional," he explains. "We honor the core principles of Mediterranean cuisine while incorporating modern techniques and occasional influences from other culinary traditions."

This approach has resulted in signature dishes like our Lemon-Saffron Risotto with Grilled Octopus and our Pistachio-Crusted Lamb with Pomegranate Reduction, which blend Mediterranean flavors with contemporary presentation.

## Beyond the Kitchen

When he's not creating new dishes for Little Lemon, David is passionate about culinary education. He regularly hosts cooking classes and has established a mentorship program for aspiring chefs from underserved communities.

"Cooking changed my life, and I want to create opportunities for others to discover their passion for food," he says.

## Experience Chef David's Cuisine

We invite you to taste Chef David's Mediterranean-inspired creations at Little Lemon. Whether you're a longtime patron or a first-time visitor, there's always something new and exciting to discover on our seasonally changing menu.
    `,
    coverImage: "/placeholder.svg?height=600&width=800",
    category: "lifestyle",
    publishedAt: "2023-02-28T13:20:00Z",
    author: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export const blogComments: BlogComment[] = [
  {
    id: "1",
    postId: "1",
    author: "Jane Smith",
    authorEmail: "jane@example.com",
    content: "I can't wait to try the new summer menu! The Grilled Mediterranean Sea Bass sounds amazing.",
    createdAt: "2023-06-15T14:23:00Z",
  },
  {
    id: "2",
    postId: "1",
    author: "Michael Brown",
    authorEmail: "michael@example.com",
    content: "I visited last weekend and tried the Heirloom Tomato & Burrata Salad. It was absolutely delicious!",
    createdAt: "2023-06-16T09:45:00Z",
  },
  {
    id: "3",
    postId: "2",
    author: "Sarah Johnson",
    authorEmail: "sarah@example.com",
    content:
      "The Mediterranean Breakfast Board sounds perfect for sharing. Will be making a reservation for this weekend!",
    createdAt: "2023-05-29T11:32:00Z",
  },
  {
    id: "4",
    postId: "6",
    author: "Robert Davis",
    authorEmail: "robert@example.com",
    content: "I made this salad last night and it was a hit with the whole family. The dressing is perfect!",
    createdAt: "2023-03-13T18:05:00Z",
  },
  {
    id: "5",
    postId: "6",
    author: "Emily Wilson",
    authorEmail: "emily@example.com",
    content: "Question - can I substitute the red wine vinegar with balsamic vinegar?",
    createdAt: "2023-03-14T10:17:00Z",
  },
  {
    id: "6",
    postId: "6",
    author: "Chef David Chen",
    authorEmail: "chef@littlelemon.com",
    content:
      "Hi Emily! Yes, you can substitute with balsamic vinegar. It will give a slightly sweeter flavor profile, but it works well with the other ingredients.",
    createdAt: "2023-03-14T14:22:00Z",
  },
]

// Helper functions for blog data
export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string) {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedPosts() {
  return blogPosts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function searchPosts(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery),
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getCommentsByPostId(postId: string) {
  return blogComments
    .filter((comment) => comment.postId === postId)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
}
