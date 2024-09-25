const allergies = { 
    nuts: {},
    milk: {},
    gluten: {},
    getTotalNumber: function() {
      console.log(`There are ${this.nuts.children.length + this.milk.children.length + this.gluten.children.length} children with food restrictions.`);
    }
  };
  
  allergies.nuts.children = ["Becca", "Max", "Phil"];
  allergies.milk.children = ["Simon", "Ada", "Stacy"];
  allergies.gluten.children = ["Paul", "Lisa", "Beth", "Alex"];
  
  console.log(allergies.milk.children);
  allergies.nuts.total = allergies.nuts.children.length;
  allergies.milk.total = allergies.milk.children.length;
  allergies.gluten.total = allergies.gluten.children.length;
  
  allergies.getTotalNumber();