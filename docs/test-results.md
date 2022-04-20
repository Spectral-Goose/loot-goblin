## Test Results ##

### Test 1: Login with Correct Credentials ###
**Procedure:** Use the admin credentials to log into Loot Goblin. \
**Expected Result:** Successful login. \
**Actual Result:&emsp;&nbsp;** Successful login. \
**Status:** Passed

### Test 2: Login with Incorrect Password ###
**Procedure:** Use the admin username to log into Loot Goblin, but use the wrong password. \
**Expected Result:** Unsuccessful login. \
**Actual Result:&emsp;&nbsp;** Unsuccessful login. \
**Status:** Passed

### Test 3: Signup with New Credentials ###
**Procedure:** Use a new username to log into Loot Goblin. \
**Expected Result:** Successful account creation and login. \
**Actual Result:&emsp;&nbsp;** Unsuccessful login. \
**Status:** Failed

### Test 4: Add Item with Correct Input Types ###
**Procedure:** Add an item to the database following the correct input types for each field. \
**Expected Result:** Successfully add the item into database and display the item. \
**Actual Result:&emsp;&nbsp;** Successfully add the item into database and display the item. \
**Status:** Passed

### Test 5: Add Item with Incorrect Quantity Input Format ###
**Procedure:** Add an item to the database following the correct input types for each field, but use a string for the quantity. \
**Expected Result:** Insertion into database unsuccessful. \
**Actual Result:&emsp;&nbsp;** Insertion into database unsuccessful. \
**Status:** Passed

### Test 6: Add Item with Incorrect Weight Input Format ###
**Procedure:** Add an item to the database following the correct input types for each field, but use a string for the weight. \
**Expected Result:** Insertion into database unsuccessful. \
**Actual Result:&emsp;&nbsp;** Insertion into database unsuccessful. \
**Status:** Passed

### Test 7: Add Item with Incorrect Price Input Format ###
**Procedure:** Add an item to the database following the correct input types for each field, but use a string for the price. \
**Expected Result:** Insertion into database unsuccessful. \
**Actual Result:&emsp;&nbsp;** Insertion into database unsuccessful. \
**Status:** Passed

### Test 8: Use Quantity Incremental Arrows with no Original Value ###
**Procedure:** Use the incremental arrows to increase quantity without a value in the field. \
**Expected Result:** "1" now populates the field, and the arrows continue to increment or decrement the value. \
**Actual Result:&emsp;&nbsp;** "1" now populates the field, and the arrows continue to increment or decrement the value. \
**Status:** Passed

### Test 9: Use Weight Incremental Arrows with no Original Value ###
**Procedure:** Use the incremental arrows to increase weight without a value in the field. \
**Expected Result:** "1" now populates the field, and the arrows continue to increment or decrement the value. \
**Actual Result:&emsp;&nbsp;** "1" now populates the field, and the arrows continue to increment or decrement the value. \
**Status:** Passed

### Test 10: Use Price Incremental Arrows with no Original Value ###
**Procedure:** Use the incremental arrows to increase price without a value in the field. \
**Expected Result:** "1" now populates the field, and the arrows continue to increment or decrement the value. \
**Actual Result:&emsp;&nbsp;** "1" now populates the field, and the arrows continue to increment or decrement the value. \
**Status:** Passed

### Test 11: Use Quantity Incremental Arrows with Original Value ###
**Procedure:** Use the incremental arrows to increase quantity with "5" as the initial value in the field. \
**Expected Result:** "6" now populates the field, and the arrows continue to increment or decrement the value. \
**Actual Result:&emsp;&nbsp;** "6" now populates the field, and the arrows continue to increment or decrement the value. \
**Status:** Passed

### Test 12: Use Weight Incremental Arrows with Original Value ###
**Procedure:** Use the incremental arrows to increase weight with "5" as the initial value in the field. \
**Expected Result:** "6" now populates the field, and the arrows continue to increment or decrement the value. \
**Actual Result:&emsp;&nbsp;** "6" now populates the field, and the arrows continue to increment or decrement the value. \
**Status:** Passed

### Test 13: Use Price Incremental Arrows with Original Value ###
**Procedure:** Use the incremental arrows to increase price with "5" as the initial value in the field. \
**Expected Result:** "6" now populates the field, and the arrows continue to increment or decrement the value. \
**Actual Result:&emsp;&nbsp;** "6" now populates the field, and the arrows continue to increment or decrement the value. \
**Status:** Passed

### Test 14: Delete Item from Database ###
**Procedure:** Remove an item from the database. \
**Expected Result:** Item is removed from the database and is no longer displayed. \
**Actual Result:&emsp;&nbsp;** Item is removed from the database and is no longer displayed. \
**Status:** Passed

### Test 15: Logout ###
**Procedure:** Use the "Logout" button to log out of Loot Goblin. \
**Expected Result:** Successful logout. \
**Actual Result:&emsp;&nbsp;** Successful logout. \
**Status:** Passed

### Test 16: Use Color Picker ###
**Procedure:** Use the color picker to choose blue as the font color of an item to be added to the database. \
**Expected Result:** The item is displayed with blue as the font color. \
**Actual Result:&emsp;&nbsp;** The item is displayed with blue as the font color. \
**Status:** Passed
