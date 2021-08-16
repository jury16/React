Based on the ishop2 project, develop the ishop3 project (online store) in the ishop3 folder.
Redesign the project for building under npm.
Divide the project into modules (each component in a separate file).
Revise the description of component classes to ES6 syntax.
Use JSX.
Move the list of goods to a JSON file.
Refine the behavior:
When you click on a line with a product, it is not only highlighted in color, but also below (or to the right) of the product table, a product card is displayed.
Each line with a product contains buttons "edit" and "delete". Below the list of products is the "new" button.
By pressing the “edit” button, the product line is highlighted and the product card goes into editing mode with the “save” and “cancel” buttons:
for any changes in the fields, the correct filling of the fields is validated (according to any rules); error messages are displayed next to incorrectly filled fields;
if the fields are filled in invalid, the "save" button is unavailable;
if you click on another line, the view mode of the card of this product should be turned on (if no changes have been made to the card being edited now, otherwise the click is ignored);
if you click on the "edit" button of another product, the editing of the card of this product is immediately turned on (if no changes have been made to the card being edited now, otherwise the button click is ignored or the button is prohibited);
all "delete" buttons and the "new" button should be disabled.
By clicking the "new" button, the product card switches to the add mode (empty form) with the "add" and "cancel" buttons:
validation works the same way;
clicks on product lines shouldn't do anything;
the line of goods highlighted in color should not be;
all buttons "delete", "edit" and "new" should be disabled.
