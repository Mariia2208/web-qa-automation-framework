## TC-001: Successful checkout (positive scenario)

**Priority:** High  
**Type:** Functional / End-to-End  

### Preconditions:
- User has at least one product in the cart
- User is logged in
- Checkout page is accessible

### Steps:
1. Open the cart page
2. Click "Proceed to Checkout"
3. Fill in required fields: First Name, Last Name, Address, City, Zip Code
4. Click "Continue" button
5. Shipping method is visible (demo website)
6. Payment information is visible (demo website)
7. Price total is visible
8. Click "Finish" button
   

### Expected Result:
- Order is successfully placed
- Confirmation page is displayed with order number
- Cart is emptied after order
- Massage that your order is succesfully complited visible.

---

## TC-002: Checkout with missing required fields

### Preconditions:
- User has products in the cart

### Steps:
1. Open the checkout page
2. Leave one or more required fields empty
3. Click "Place Order"

### Expected Result:
- Checkout fails
- Error messages displayed for missing fields
- User remains on checkout page

---

## Notes / Edge Cases:
- Verify order summary matches cart items and prices
- Verify shipping costs and taxes are calculated correctly
- Check page reload or back button behavior during checkout
- Test multiple payment methods if available
