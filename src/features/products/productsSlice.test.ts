import productsReducer, { receivedProducts } from "./productsSlice"; //was a little confused on importing receivedProducts, but Jamund just switched it into "productsReceived" by accident
import products from "../../../public/products.json"; 


describe("products reducer", () => {
    it("should return the initial state when passed an empty action", () => {
        const intitialState = undefined; 
        const action = { type: ""}; 
        const result = productsReducer(intitialState, action);
        expect(result).toEqual({ products: { }}) 
    });
    it("should convert the products received to an object", () => {
        const intitialState = undefined; //previous test as base
        const action = receivedProducts(products); 
        const result = productsReducer(intitialState, action); 
        expect(Object.keys(result.products).length).toEqual(products.length);
        products.forEach((product) => {
            expect(result.products[product.id]).toEqual(product);
        });
    });
    it("should not allow the same product to be added more than once", () => {
        const intitialState = undefined; //same thing just copy paste from last base
        const action = receivedProducts(products); 
        let result = productsReducer(intitialState, action); //change to let
        expect(Object.keys(result.products).length).toEqual(products.length);
        products.forEach((product) => {
            expect(result.products[product.id]).toEqual(product);
        });
        result = productsReducer(result, action);
        expect(Object.keys(result.products).length).toEqual(products.length);

    });
    it("should allow mutiple products to be received at different times", () => {
        const intitialState = undefined;
        const action = receivedProducts(products.slice(0,2)); //change to 0 to 2
        let result = productsReducer(intitialState, action);
        expect(Object.keys(result.products).length).toEqual(2); //must equal 2
        const secondAction = receivedProducts(products.slice(2,4));
        result = productsReducer(result, secondAction);
        expect(Object.keys(result.products).length).toEqual(4); //must equal 4
    })
});