// Define an object 'allergies' to track children with different food allergies
const allergies = { 
    nuts: {}, // Object to store children with nut allergies
    milk: {}, // Object to store children with milk allergies
    gluten: {}, // Object to store children with gluten allergies
    // Method to calculate and log the total number of children with food restrictions
    getTotalNumber: function() {
      console.log(`There are ${this.nuts.children.length + this.milk.children.length + this.gluten.children.length} children with food restrictions.`);
    }
};

// Assign arrays of children's names to each allergy type
allergies.nuts.children = ["Becca", "Max", "Phil"];
allergies.milk.children = ["Simon", "Ada", "Stacy"];
allergies.gluten.children = ["Paul", "Lisa", "Beth", "Alex"];

// Log the children with milk allergies
console.log(allergies.milk.children);

// Calculate and store the total number of children for each allergy type
allergies.nuts.total = allergies.nuts.children.length;
allergies.milk.total = allergies.milk.children.length;
allergies.gluten.total = allergies.gluten.children.length;

// Call the method to log the total number of children with food restrictions
allergies.getTotalNumber();
