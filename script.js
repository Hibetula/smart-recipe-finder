function findRecipes() {

    let input =
        document.getElementById("ingredients")
        .value.toLowerCase();

    let results =
        document.getElementById("results");

    let output = "";

    function addRecipe(name) {
        output += `
        <div class="recipe-card">
            <h3>${name}</h3>
        </div>
        `;
    }

    // Omelette
    if (input.includes("egg") && input.includes("onion")) {
        addRecipe("🥚 Omelette");
    }

    // Firfir
    if (
        input.includes("injera") &&
        input.includes("pepper") &&
        input.includes("salt") &&
        input.includes("oil") &&
        input.includes("water")
    ) {
        addRecipe("🔥 Firfir");
    }

    // Genfo
    if (
        input.includes("flour") &&
        input.includes("water") &&
        input.includes("butter")
    ) {
        addRecipe("🥣 Genfo");
    }

    // Kitfo with Kocho
    if (
        input.includes("meat") &&
        input.includes("kocho")
    ) {
        addRecipe("🥩 Kitfo with Kocho");
    }

    // Egg Sandwich
    if (input.includes("bread") && input.includes("egg")) {
        addRecipe("🥪 Egg Sandwich");
    }

    // Tomato Rice
    if (input.includes("rice") && input.includes("tomato")) {
        addRecipe("🍅 Tomato Rice");
    }

    // Pasta
    if (input.includes("pasta") && input.includes("tomato")) {
        addRecipe("🍝 Pasta");
    }

    // Fried Rice
    if (input.includes("rice") && input.includes("egg")) {
        addRecipe("🍚 Fried Rice");
    }

    // Pancakes
    if (
        input.includes("flour") &&
        input.includes("egg") &&
        input.includes("milk")
    ) {
        addRecipe("🥞 Pancakes");
    }

    //Cake
    if (
        input.includes("flour")&&
        input.includes("egg")&&
        input.includes("sugar")&&
        input.includes("milk")
    ) {
        addRecipe("cake");
    }
    // Salad
    if (input.includes("tomato") && input.includes("cucumber")) {
        addRecipe("🥗 Salad");
    }

    // Burger
    if (input.includes("bread") && input.includes("meat")) {
        addRecipe("🍔 Burger");
    }

    // Pizza
    if (input.includes("cheese") && input.includes("bread")) {
        addRecipe("🍕 Pizza");
    }

    // Chicken Soup
    if (input.includes("chicken") && input.includes("onion")) {
        addRecipe("🍲 Chicken Soup");
    }

    // French Fries
    if (input.includes("potato")) {
        addRecipe("🍟 French Fries");
    }

    // Show results
    if (output === "") {
        results.innerHTML = "<p>❌ No recipes found.</p>";
    } else {
        results.innerHTML = output;
    }
}
