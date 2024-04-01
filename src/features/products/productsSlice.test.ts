import productsReducer, { receivedProducts } from "./productsSlice"; //was a little confused on importing receivedProducts, but Jamund just switched it in "productsReceived" by accident
import products from "../../../public/products.json"; 


describe("products reducer", () => {
    it("should return the initial state when passed an empty action", () => {
        const intitialState = undefined; 
        const action = { type: ""}; 
        const result = productsReducer(intitialState, action);
        expect(result).toEqual({ products: { }}) 
    });
    it("should convert the products received to an object", () => {
        const intitialState = undefined;
        const action = receivedProducts(products); 
        const result = productsReducer(intitialState, action); 
        expect(Object.keys(result.products).length).toEqual(products.length);
        products.forEach((product) => {
            expect(result.products[product.id]).toEqual(product);
        });
    });
});