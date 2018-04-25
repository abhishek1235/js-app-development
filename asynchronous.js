/*const second = () => {

    console.log("sync hey there")
   setTimeout(() => {
         console.log('Async Hey there');
     }, 2000);
 }

 const first = () => {
     console.log('Hey there');
     second();
     console.log('The end');
 }

 first();*/

/* function getRecipe() {
     setTimeout(() => {
         const recipeID = [523, 883, 432, 974];
         console.log(recipeID);

         setTimeout(id => {
             const recipe = {title: 'tomato pasta', publisher: 'Ankur'};
             console.log(`${id}: ${recipe.title}`);

             setTimeout(publisher => {
                 const recipe2 = {title: 'Italian Pizza', publisher: 'Ankur'};
                 console.log(recipe);
             }, 1500, recipe.publisher);

         }, 1500, recipeID[2]);

     }, 1500);
 }
 getRecipe();*/

/* const getIDs = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve([523, 883, 432, 974]);
        // reject([523, 883, 432, 974]);

     }, 1500);
 });

 const getRecipe = recID => {
     return new Promise((resolve, reject) => {
         setTimeout(ID => {
             const recipe = {title: ' tomato pasta', publisher: 'Ankur'};
             resolve(`${ID}: ${recipe.title}`);
         }, 1500, recID);
     });
 };

 const getRelated = publisher => {
     return new Promise((resolve, reject) => {
         setTimeout(pub => {
             const recipe = {title: 'Italian Pizza', publisher: 'Ankur'};
             resolve(`${pub}: ${recipe.title}`);
         }, 1500, publisher);
     });
 };

 getIDs
 .then(IDs => {
     console.log(IDs);
     return getRecipe(IDs[2]);
 })
 .then(recipe => {
     console.log(recipe);
     return getRelated('Ankur Tyagi');
 })
 .then(recipe => {
     console.log(recipe);
 })
 .catch(error => {
     console.log('Error!!');
 });*/

/*
 async function getRecipesAW() {
     const IDs = await getIDs;
     console.log(IDs);
     const recipe = await getRecipe(IDs[2]);
     console.log(recipe);
     const related = await getRelated('Ankur Tyagi');
     console.log(related);

     return recipe;
 }
 getRecipesAW().then(result => console.log(`${result} is the best!`));
*/
