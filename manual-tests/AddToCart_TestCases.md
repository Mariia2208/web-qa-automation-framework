## TC-001: Add product to cart (positive scenario)

**Priority:** High  
**Type:** Functional  

### Preconditions:
- User is on the product listing page
- Product is available and in stock
- User is not required to be logged in

### Steps:
1. Open the application
2. Navigate to the products page
3. Select any product
4. Click the "Add to cart" button

### Expected Result:
- Product is successfully added to the cart
- "Add to cart" button changes to "Remove"
- Cart icon shows updated item count

---

## TC-002: Remove product from cart

### Preconditions:
- Product is already added to the cart

### Steps:
1. Click the "Remove" button on the product

### Expected Result:
- Product is removed from the cart
- Button changes back to "Add to cart"
- Cart item count is updated
