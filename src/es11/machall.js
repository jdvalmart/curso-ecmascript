// const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, Etc,Etc';

for (const match of fruit.matchAll(fruit)){
    console.log(match);
}