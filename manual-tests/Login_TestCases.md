## TC-001: Successful login (positive scenario)

**Priority:** High  
**Type:** Functional  

### Preconditions:
- User has a valid account (username/password)
- Login page is accessible

### Steps:
1. Open the login page
2. Enter valid username
3. Enter valid password
4. Click "Login" button

### Expected Result:
- User is redirected to the homepage
- No error messages appear
---

## TC-002: Login with invalid password

### Preconditions:
- User has a valid account

### Steps:
1. Open the login page
2. Enter valid email
3. Enter **incorrect password**
4. Click "Login" button

### Expected Result:
- Login fails
- Error message displayed: "Epic sadface: Username and password do not match any user in this service"
- User remains on login page
---

## TC-003: Login with incorrect username

### Preconditions:
- Usrnname is not registered in the system

### Steps:
1. Open the login page
2. Enter incorrect username
3. Enter password
4. Click "Login" button

### Expected Result:
- Login fails
- Error message displayed: "Epic sadface: Username and password do not match any user in this service"
- User remains on login page

---

## TC-004: Empty email or password

### Preconditions:
- Login page is open

### Steps:
1. Leave username and/or password empty
2. Click "Login" button

### Expected Result:
- Login fails
- Error message displayed: "Epic sadface: Username is required"/ "Epic sadface: Password is required"
- User remains on login page

---

## Notes / Edge Cases:
- Check login persists after page reload
- Verify password masking

