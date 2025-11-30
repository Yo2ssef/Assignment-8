var foods = [
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.7</span>
<span class="text-secondary">(367 reviews)</span>
</div>
`,
    imgUrl:
      ' src="./image/teriyaki-chicken-bowl.jpeg" alt="Teriyaki Chicken Bowl" ',
    detailsFood: {
      pTime: "15 min",
      cTime: "20 min",
      server: "2 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Easy</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Asian</span>
<h2 class="fw-bold mt-3">Teriyaki Chicken Bowl</h2>
<p class="text-secondary lead">Sweet and savory chicken over rice with vegetables</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">400g chicken thighs, sliced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">1/2 cup teriyaki sauce</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">2 cups cooked rice</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">1 broccoli head, florets</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">1 carrot, julienned</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">Sesame seeds</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Green onions, sliced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">1 tablespoon sesame oil</p>  
</div>
`,
    instr: {
      __1: "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      __2: "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      __3: "Meanwhile, steam broccoli and carrots until tender-crisp.",
      __4: "Divide rice between bowls.",
      __5: "Top with teriyaki chicken and steamed vegetables.",
      __6: "Garnish with sesame seeds and green onions. Serve hot.",
    },

    nutr: {
      calories: "540 kcal",
      protein: "42g",
      carbohydrates: "58g",
      fat: "14g",
      fiber: "4g",
      sodium: "1240mg",
    },

    chefTips: {
      ___1: "Use chicken thighs for juicier meat",
      ___2: "Make homemade teriyaki sauce for better flavor control",
      ___3: "Add edamame for extra protein",
      ___4: "Meal prep by cooking rice and chicken ahead",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.7</span>
<span class="text-secondary">(267 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/french-onion-soup.jpg" alt="French Onion Soup" ',

    detailsFood: {
      pTime: "15 min",
      cTime: "60 min",
      server: "4 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Intermediate</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Mediterranean</span>
<h2 class="fw-bold mt-3">French Onion Soup</h2>
<p class="text-secondary lead">Rich beef broth with caramelized onions and melted cheese</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
<div class=" ps-3 rounded-2 extended-preparation py-2 mx-auto my-3 d-flex gap-2 align-items-center">
<span class="color-ex-pr my-2"><i class="fa-solid fa-triangle-exclamation fa-xl"></i></span>
<div class="my-2">
<span class="fw-bold fs-5 color-danger">Extended Preparation Time</span>
<p class="m-0 color-ex-pr">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">4 large onions, thinly sliced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">4 tablespoons butter</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">1 liter beef broth</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">1/2 cup white wine</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">2 bay leaves</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">Fresh thyme</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Baguette slices</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">200g Gruyère cheese, grated</p>  
</div>
`,

    instr: {
      __1: "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      __2: "Add white wine and deglaze the pot, scraping up brown bits.",
      __3: "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      __4: "Meanwhile, toast baguette slices until golden.",
      __5: "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      __6: "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    },

    nutr: {
      calories: "380 kcal",
      protein: "18g",
      carbohydrates: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },

    chefTips: {
      ___1: "Patience is key - don't rush the onion caramelization",
      ___2: "Use good quality beef broth for best flavor",
      ___3: "Gruyère can be substituted with Swiss cheese",
      ___4: "Watch carefully when broiling to avoid burning",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.9</span>
<span class="text-secondary">(512 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/margherita-pizza.jpeg" alt="Margherita Pizza" ',

    detailsFood: {
      pTime: "90 min",
      cTime: "12 min",
      server: "2 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Intermediate</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Italian</span>
<h2 class="fw-bold mt-3">Margherita Pizza</h2>
<p class="text-secondary lead">Classic Italian pizza with fresh mozzarella and basil</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
<div class=" ps-3 rounded-2 extended-preparation py-2 mx-auto my-3 d-flex gap-2 align-items-center">
<span class="color-ex-pr my-2"><i class="fa-solid fa-triangle-exclamation fa-xl"></i></span>
<div class="my-2">
<span class="fw-bold fs-5 color-danger">Extended Preparation Time</span>
<p class="m-0 color-ex-pr">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">300g pizza dough</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">200g crushed tomatoes</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">250g fresh mozzarella</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">Fresh basil leaves</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">2 tablespoons olive oil</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">2 cloves garlic, minced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Salt and pepper to taste</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Parmesan cheese for topping</p>  
</div>
`,

    instr: {
      __1: "Let pizza dough come to room temperature and rest for 1 hour.",
      __2: "Preheat oven to maximum temperature (usually 250°C/480°F).",
      __3: "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      __4: "Roll out dough on a floured surface to desired thickness.",
      __5: "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      __6: "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    },

    nutr: {
      calories: "580 kcal",
      protein: "24g",
      carbohydrates: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },

    chefTips: {
      ___1: "Use a pizza stone for crispier crust",
      ___2: "Don't overload with toppings - less is more",
      ___3: "Add basil after baking to keep it fresh",
      ___4: "Let dough rest properly for best texture",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.8</span>
<span class="text-secondary">(234 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/greek-moussaka.webp" alt="Greek Moussaka" ',

    detailsFood: {
      pTime: "30 min",
      cTime: "60 min",
      server: "4 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Intermediate</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Mediterranean</span>
<h2 class="fw-bold mt-3">Greek Moussaka</h2>
<p class="text-secondary lead">Traditional layered eggplant casserole with lamb</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
<div class=" ps-3 rounded-2 extended-preparation py-2 mx-auto my-3 d-flex gap-2 align-items-center">
<span class="color-ex-pr my-2"><i class="fa-solid fa-triangle-exclamation fa-xl"></i></span>
<div class="my-2">
<span class="fw-bold fs-5 color-danger">Extended Preparation Time</span>
<p class="m-0 color-ex-pr">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">3 large eggplants, sliced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">500g ground lamb</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">400g canned tomatoes</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">1 onion, diced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">2 tablespoons olive oil</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">3 cloves garlic, minced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">100g parmesan cheese</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>8</span>
<p class="text-secondary m-0 w-fc">Cinnamon and oregano</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>9</span>
<p class="text-secondary m-0 w-fc">Olive oil</p>  
</div>
    `,

    instr: {
      __1: "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      __2: "Brush eggplant slices with olive oil, grill or bake until softened.",
      __3: "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      __4: "Preheat oven to 180°C (350°F).",
      __5: "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      __6: "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    },

    nutr: {
      calories: "580 kcal",
      protein: "36g",
      carbohydrates: "32g",
      fat: "32g",
      fiber: "8g",
      sodium: "820mg",
    },

    chefTips: {
      ___1: "Salt eggplant to remove bitterness",
      ___2: "Don't skip the resting time - it helps set the layers",
      ___3: "Use ground beef if lamb is unavailable",
      ___4: "Make ahead and reheat for easier serving",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.7</span>
<span class="text-secondary">(412 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/bbq-pulled-pork.jpg" alt="BBQ Pulled Pork" ',

    detailsFood: {
      pTime: "15 min",
      cTime: "240 min",
      server: "4 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Easy</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">American</span>
<h2 class="fw-bold mt-3">BBQ Pulled Pork</h2>
<p class="text-secondary lead">Slow-cooked tender pork in smoky barbecue sauce</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
<div class=" ps-3 rounded-2 extended-preparation py-2 mx-auto my-3 d-flex gap-2 align-items-center">
<span class="color-ex-pr my-2"><i class="fa-solid fa-triangle-exclamation fa-xl"></i></span>
<div class="my-2">
<span class="fw-bold fs-5 color-danger">Extended Preparation Time</span>
<p class="m-0 color-ex-pr">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">1kg pork shoulder</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">1 cup BBQ sauce</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">1/2 cup apple cider vinegar</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">2 tablespoons brown sugar</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">1 tablespoon paprika</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">1 tablespoon garlic powder</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Burger buns</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>8</span>
<p class="text-secondary m-0 w-fc">Coleslaw for serving</p>  
</div>
    `,

    instr: {
      __1: "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      __2: "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      __3: "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      __4: "Remove pork and shred with two forks. Discard excess fat.",
      __5: "Return shredded pork to slow cooker, mix with BBQ sauce.",
      __6: "Serve on toasted buns with coleslaw on top.",
    },

    nutr: {
      calories: "620 kcal",
      protein: "48g",
      carbohydrates: "52g",
      fat: "22g",
      fiber: "3g",
      sodium: "1180mg",
    },

    chefTips: {
      ___1: "Use pork shoulder for best results - it stays moist",
      ___2: "Let pork rest before shredding for juicier meat",
      ___3: "Make your own BBQ sauce for better flavor",
      ___4: "Leftovers freeze well for up to 3 months",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.6</span>
<span class="text-secondary">(289 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/vegetable-curry.jpeg" alt="Vegetable Curry" ',

    detailsFood: {
      pTime: "20 min",
      cTime: "30 min",
      server: "4 people",
    },

    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Easy</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Asian</span>
<h2 class="fw-bold mt-3">Vegetable Curry</h2>
<p class="text-secondary lead">Hearty vegetarian curry with coconut milk</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
<div class=" ps-3 rounded-2 extended-preparation py-2 mx-auto my-3 d-flex gap-2 align-items-center">
<span class="color-ex-pr my-2"><i class="fa-solid fa-triangle-exclamation fa-xl"></i></span>
<div class="my-2">
<span class="fw-bold fs-5 color-danger">Extended Preparation Time</span>
<p class="m-0 color-ex-pr">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">2 potatoes, cubed</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">1 cauliflower, florets</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">2 carrots, sliced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">1 can chickpeas</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">400ml coconut milk</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">3 tablespoons curry powder</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">1 onion, diced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>8</span>
<p class="text-secondary m-0 w-fc">3 cloves garlic, minced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>9</span>
<p class="text-secondary m-0 w-fc">Fresh spinach</p>  
</div>
    `,

    instr: {
      __1: "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      __2: "Add potatoes and carrots, cook for 5 minutes.",
      __3: "Pour in coconut milk and 1 cup water. Bring to simmer.",
      __4: "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      __5: "Stir in fresh spinach and cook until wilted.",
      __6: "Serve hot over basmati rice or with naan bread.",
    },

    nutr: {
      calories: "380 kcal",
      protein: "14g",
      carbohydrates: "48g",
      fat: "16g",
      fiber: "12g",
      sodium: "480mg",
    },

    chefTips: {
      ___1: "Add vegetables in order of cooking time needed",
      ___2: "Adjust curry powder amount to taste",
      ___3: "Use full-fat coconut milk for creamier curry",
      ___4: "Add protein like tofu or paneer if desired",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.6</span>
<span class="text-secondary">(421 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/classic-beef-burger.jpg" alt="Classic Beef Burger" ',

    detailsFood: {
      pTime: "15 min",
      cTime: "20 min",
      server: "4 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Easy</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">American</span>
<h2 class="fw-bold mt-3">Classic Beef Burger</h2>
<p class="text-secondary lead">Juicy homemade burger with all the fixings</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">500g ground beef (80/20)</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">4 burger buns</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">4 slices cheddar cheese</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">Lettuce leaves</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">Tomato slices</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">Red onion, sliced</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Pickles</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>8</span>
<p class="text-secondary m-0 w-fc">Burger sauce or condiments</p>  
</div>
    `,

    instr: {
      __1: "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      __2: "Season patties generously with salt and pepper on both sides.",
      __3: "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      __4: "Add cheese slices in the last minute of cooking and cover to melt.",
      __5: "Toast burger buns lightly on the grill or in a pan.",
      __6: "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    },

    nutr: {
      calories: "650 kcal",
      protein: "38g",
      carbohydrates: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },

    chefTips: {
      ___1: "Don't press down on burgers while cooking - keeps them juicy",
      ___2: "Make indent in center to prevent burger from puffing up",
      ___3: "Let patties rest for 2-3 minutes before serving",
      ___4: "Toast buns for better texture and flavor",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.8</span>
<span class="text-secondary">(445 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/pad-thai.jpeg" alt="Pad Thai" ',

    detailsFood: {
      pTime: "20 min",
      cTime: "15 min",
      server: "2 people",
    },

    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Intermediate</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Asian</span>
<h2 class="fw-bold mt-3">Pad Thai</h2>
<p class="text-secondary lead">Popular Thai stir-fried noodles with shrimp and peanuts</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
   
   `,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">200g rice noodles</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">200g shrimp, peeled</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">2 eggs</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">3 tablespoons tamarind paste</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">2 tablespoons fish sauce</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">1 tablespoon palm sugar</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">Bean sprouts</p>  
</div>

<div class="d-flex gap-2 mb-3">
<span>8</span>
<p class="text-secondary m-0 w-fc">Crushed peanuts</p>  
</div>
    `,

    instr: {
      __1: "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      __2: "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      __3: "Heat wok over high heat. Scramble eggs and set aside.",
      __4: "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      __5: "Add scrambled eggs and bean sprouts. Toss everything together.",
      __6: "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    },

    nutr: {
      calories: "540 kcal",
      protein: "32g",
      carbohydrates: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },

    chefTips: {
      ___1: "Don't oversoak noodles or they'll be mushy",
      ___2: "Cook on high heat for authentic wok flavor",
      ___3: "Balance sweet, sour, and salty flavors",
      ___4: "Prepare all ingredients before starting to cook",
    },
  },
  {
    rate: `
<div class="bg-white w-fc px-4 py-3 py-xxl-2 py-xl-2 py-lg-3 py-md-3 py-sm-3  px-xxl-3 px-xl-3 px-lg-4 px-md-4 px-sm-4 rounded-5 rate-food position-absolute">
<span class="text-warning"><i class="fa-solid fa-star"></i></span>  
<span class="fw-bold">4.5</span>
<span class="text-secondary">(324 reviews)</span>
</div>
`,
    imgUrl: ' src="./image/pad-thai.jpeg" alt="Pad Thai" ',
    detailsFood: {
      pTime: "15 min",
      cTime: "15 min",
      server: "4 people",
    },
    infoFood: `
<div class="d-flex flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-center">
<div class="text-center text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center">
<span class="text-success bg-success-subtle px-3 py-1 rounded-5">Easy</span>
<span class="text-primary bg-primary-subtle px-3 py-1 rounded-5">Asian</span>
<h2 class="fw-bold mt-3">Chicken Stir-Fry</h2>
<p class="text-secondary lead">Quick and healthy stir-fry with colorful vegetables</p>
</div>
<div class="d-flex gap-2">
<span class="setting-food rounded-3"><i class="fa-solid fa-bookmark fa-lg"></i></span>
<span class="setting-food rounded-3"><i class="fa-solid fa-share-nodes fa-lg"></i></span> 
</div>
</div>
`,
    ing: `
<div class="d-flex gap-2 mb-3">
<span>1</span>
<p class="text-secondary m-0 w-fc">500g chicken breast, sliced</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>2</span>
<p class="text-secondary m-0 w-fc">2 bell peppers, sliced</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>3</span>
<p class="text-secondary m-0 w-fc">1 broccoli head, florets</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>4</span>
<p class="text-secondary m-0 w-fc">2 carrots, julienned</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>5</span>
<p class="text-secondary m-0 w-fc">3 tablespoons soy sauce</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>6</span>
<p class="text-secondary m-0 w-fc">2 tablespoons oyster sauce</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>7</span>
<p class="text-secondary m-0 w-fc">1 tablespoon sesame oil</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>8</span>
<p class="text-secondary m-0 w-fc">2 cloves garlic, minced</p>  
</div>
<div class="d-flex gap-2 mb-3">
<span>9</span>
<p class="text-secondary m-0 w-fc">Fresh ginger, grated</p>  
</div>
    `,
    instr: {
      __1: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      __2: "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      __3: "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      __4: "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      __5: "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      __6: "Serve immediately over steamed rice or noodles.",
    },
    nutr: {
      calories: "320 kcal",
      protein: "38g",
      carbohydrates: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },
    chefTips: {
      ___1: "Cut all ingredients before starting to cook",
      ___2: "Keep heat high for authentic stir-fry texture",
      ___3: "Don't overcrowd the wok or vegetables will steam",
      ___4: "Add cashews or peanuts for extra crunch",
    },
  },
];

function genHtml(i) {
  var x = foods[i];
  return `
    <div class="col-12 col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 position-relative">
        ${x.rate}
        <img class="col-12 img-food object-fit-cover" ${x.imgUrl}>
        <div class="bg-white d-flex justify-content-around col-11 col-xxl-10 col-xl-10 col-lg-11 col-md-11 col-sm-11 info-food py-3 py-xxl-4 py-xl-4 py-lg-5 py-md-5 py-sm-3 rounded-4 position-absolute">
        <div class="d-flex flex-column align-items-center w-fc">
        <span class="clock-icon-color"><i class="fa-solid fa-clock fa-xl"></i></span>
        <span class="text-secondary">Prep Time</span>
        <span class="fw-bold">${x.detailsFood.pTime}</span>
        </div>
        <div class="d-flex flex-column align-items-center w-fc">
        <span class="text-danger"><i class="fa-solid fa-fire-burner fa-xl"></i></span>
        <span class="text-secondary">Cook Time</span>
        <span class="fw-bold">${x.detailsFood.cTime}</span>
        </div>
        <div class="d-flex flex-column align-items-center w-fc">
        <span class="text-primary"><i class="fa-solid fa-users fa-xl"></i></span>
        <span class="text-secondary">Servings</span>
        <span class="fw-bold">${x.detailsFood.server}</span>
        </div>  
        </div>
    </div>
    <div class="overflow-y-auto h-100 col-11 col-xxl-6 col-xl-6 col-lg-11 col-md-11 col-sm-11 mx-auto mx-xxl-5 mx-xl-5 mx-lg-auto mx-md-auto mx-sm-auto py-4 pb-5">
        ${x.infoFood}
        <ul class="nav align-items-center gap-2 justify-content-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-center nav-pills mb-3 border-bottom border-secondary-subtle pb-4" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
        <button class="nav-link nav-tabs-hover active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-list-check"></i> Ingredients</button>
        </li>
        <li class="nav-item" role="presentation">
        <button class="nav-link nav-tabs-hover" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa-solid fa-book-open"></i> Instructions</button>
        </li>
        <li class="nav-item" role="presentation">
        <button class="nav-link nav-tabs-hover" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fa-solid fa-chart-pie"></i> Nutrition</button>
        </li>
        <li class="nav-item" role="presentation">
        <button class="nav-link nav-tabs-hover" id="pills-investing-tab" data-bs-toggle="pill" data-bs-target="#pills-investing" type="button" role="tab" aria-controls="#pills-investing" aria-selected="false"><i class="fa-solid fa-lightbulb"></i> Chef's Tips</button>
        </li>
        </ul>
        <div class="tab-content border-bottom border-secondary-subtle pb-3 overflow-y-auto" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <div class="bg-ingre p-4 rounded-4">
        ${x.ing}
        </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
        <div class="instru p-4 rounded-4">
        <div class="d-flex align-items-center gap-3 mb-3">
        <span >1</span>
        <p class="text-secondary m-0 w-fc">${x.instr.__1}</p>  
        </div>
        <div class="d-flex align-items-center gap-3 mb-3">
        <span >2</span>
        <p class="text-secondary m-0 w-fc">${x.instr.__2}</p>  
        </div>
        <div class="d-flex align-items-center gap-3 mb-3">
        <span >3</span>
        <p class="text-secondary m-0 w-fc">${x.instr.__3}</p>  
        </div>
        <div class="d-flex align-items-center gap-3 mb-3">
        <span >4</span>
        <p class="text-secondary m-0 w-fc">${x.instr.__4}</p>  
        </div>
        <div class="d-flex align-items-center gap-3 mb-3">
        <span >5</span>
        <p class="text-secondary m-0 w-fc">${x.instr.__5}</p>  
        </div>
        <div class="d-flex align-items-center gap-3 mb-3">
        <span >6</span>
        <p class="text-secondary m-0 w-fc">${x.instr.__6}</p>  
        </div>
        </div>
        </div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
        <div class="d-flex flex-wrap  row-gap-3 justify-content-between col-12">

        <div class="bg-nut d-flex justify-content-between align-items-center rounded-4 py-3 px-2">
        <div class="d-flex gap-2 align-items-center">
        <span class="calories nutrition rounded-3"><i class="fa-solid fa-fire"></i></span>
        <p class="m-0">Calories</p>
        </div>
        <p class="fw-bold fs-5 m-0">${x.nutr.calories}</p>
        </div>
        <div class="bg-nut d-flex justify-content-between align-items-center rounded-4 py-3 px-2">
        <div class="d-flex gap-2 align-items-center">
        <span class="text-primary bg-primary-subtle nutrition rounded-3"><i class="fa-solid fa-dumbbell"></i></span>
        <p class="m-0">Protein</p>
        </div>
        <p class="fw-bold fs-5 m-0">${x.nutr.protein}</p>
        </div>
        <div class="bg-nut d-flex justify-content-between align-items-center rounded-4 py-3 px-2">
        <div class="d-flex gap-2 align-items-center">
        <span class="carbohydrates nutrition rounded-3"><i class="fa-solid fa-wheat-awn"></i></span>
        <p class="m-0">Carbohydrates</p>
        </div>
        <p class="fw-bold fs-5 m-0">${x.nutr.carbohydrates}</p>
        </div>
        <div class="bg-nut d-flex justify-content-between align-items-center rounded-4 py-3 px-2">
        <div class="d-flex gap-2 align-items-center">
        <span class="carbohydrates nutrition rounded-3"><i class="fa-solid fa-droplet"></i></span>
        <p class="m-0">Fat</p>
        </div>
        <p class="fw-bold fs-5 m-0">${x.nutr.fat}</p>
        </div>
        <div class="bg-nut d-flex justify-content-between align-items-center rounded-4 py-3 px-2">
        <div class="d-flex gap-2 align-items-center">
        <span class="text-success bg-success-subtle nutrition rounded-3"><i class="fa-solid fa-seedling"></i></span>
        <p class="m-0">Fiber</p>
        </div>
        <p class="fw-bold fs-5 m-0">${x.nutr.fiber}</p>
        </div>
        <div class="bg-nut d-flex justify-content-between align-items-center rounded-4 py-3 px-2">
        <div class="d-flex gap-2 align-items-center">
        <span class="sodium nutrition rounded-3"><i class="fa-solid fa-cube"></i></span>
        <p class="m-0">Sodium</p>
        </div>
        <p class="fw-bold fs-5 m-0">${x.nutr.sodium}</p>
        </div>
        </div>
        </div>
        <div class="tab-pane fade" id="pills-investing" role="tabpanel" aria-labelledby="pills-investing-tab" tabindex="0">
        <div class="d-flex flex-column row-gap-3">
        <div class="chef-tips rounded-4 col-12 border-start border-4 border-warning py-4 d-flex gap-2 align-items-center ps-2">
        <span class="chef-icon"><i class="fa-solid fa-circle-check fa-xl"></i></span>
        <p class="m-0">${x.chefTips.___1}</p>
        </div>
        <div class="chef-tips rounded-4 col-12 border-start border-4 border-warning py-4 d-flex gap-2 align-items-center ps-2">
        <span class="chef-icon"><i class="fa-solid fa-circle-check fa-xl"></i></span>
        <p class="m-0">${x.chefTips.___2}</p>
        </div>
        <div class="chef-tips rounded-4 col-12 border-start border-4 border-warning py-4 d-flex gap-2 align-items-center ps-2">
        <span class="chef-icon"><i class="fa-solid fa-circle-check fa-xl"></i></span>
        <p class="m-0">${x.chefTips.___3}</p>
        </div>
        <div class="chef-tips rounded-4 col-12 border-start border-4 border-warning py-4 d-flex gap-2 align-items-center ps-2">
        <span class="chef-icon"><i class="fa-solid fa-circle-check fa-xl"></i></span>
        <p class="m-0">${x.chefTips.___4}</p>
        </div>
        </div>
        </div>
        </div>
        <button class="text-white bg-btn-tar mt-3 fw-semibold border-0" name="tryAnotherRecipe" value="tryAnotherRecipe" onclick="showRandom()"><span><i class="fa-solid fa-rotate"></i></span> Try Another Recipe</button>
    </div>
    `;
}

function showRandom() {
  var mainSection = document.getElementById("main-section");
  var arrayLength = foods.length;
  var randomIndex = Math.floor(Math.random() * arrayLength);
  mainSection.innerHTML = genHtml(randomIndex);
}
showRandom();