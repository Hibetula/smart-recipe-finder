function findRecipes() {

    let input =
        document.getElementById("ingredients")
        .value.toLowerCase();

    let results =
        document.getElementById("results");

    let recipes = [];

    // Omelette
    if (
        input.includes("egg") &&
        input.includes("onion")
    ) {
        recipes.push("🥚 Omelette");
    }

    // Egg Sandwich
    if (
        input.includes("bread") &&
        input.includes("egg")
    ) {
        recipes.push("🥪 Egg Sandwich");
    }

    // Tomato Rice
    if (
        input.includes("rice") &&
        input.includes("tomato")
    ) {
        recipes.push("🍅 Tomato Rice");
    }

    // Pasta
    if (
        input.includes("pasta") &&
        input.includes("tomato")
    ) {
        recipes.push("🍝 Pasta");
    }

    // Fried Rice
    if (
        input.includes("rice") &&
        input.includes("egg")
    ) {
        recipes.push("🍚 Fried Rice");
    }

    // Pancakes
    if (
        input.includes("flour") &&
        input.includes("egg") &&
        input.includes("milk")
    ) {
        recipes.push("🥞 Pancakes");
    }

    // Salad
    if (
        input.includes("tomato") &&
        input.includes("cucumber")
    ) {
        recipes.push("🥗 Salad");
    }

    // Burger
    if (
        input.includes("bread") &&
        input.includes("meat")
    ) {
        recipes.push("🍔 Burger");
    }

    // Pizza
    if (
        input.includes("cheese") &&
        input.includes("bread")
    ) {
        recipes.push("🍕 Pizza");
    }

    // Chicken Soup
    if (
        input.includes("chicken") &&
        input.includes("onion")
    ) {
        recipes.push("🍲 Chicken Soup");
    }

    // French Fries
    if (
        input.includes("potato")
    ) {
        recipes.push("🍟 French Fries");
    }

    // Show recipes
    if (recipes.length > 0) {

        let output =
            "<h3>Recipes You Can Make:</h3><ul>";

        for (let i = 0; i < recipes.length; i++) {
            output +=
                "<li>" + recipes[i] + "</li>";
        }

        output += "</ul>";

        results.innerHTML = output;

    } else {

        results.innerHTML =
            "<p>❌ No recipes found.</p>";
    }
}