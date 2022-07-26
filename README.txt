MyReads 
*******

Description:
-----------
MyReads project is a simple UI book tracking app. The application uses HTML, CSS and ReactJS. 


Summary:
--------
The user interface has two pages: 
	- Home   (Home.js)
	- Search (Search.js)


* In the home page, there are three shelfs: 
	- Currently Reading. 
	- Wants to Read. 
	- Read.

- The main page shows three shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors. Each bookshelf is a reusable component.
- The main page shows a control that allows users to move books between shelves. The control is be tied to each book instance.
- Changes are persistent after refreshing the page. 
- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search. Routing is implemented with React Router

* In the search page, the user is provided with a textbox where he can write the name of the book or the author. The results are show on the page. The search gets the results from an API provided by Udacity. 

- The user can add a book to his library by clicking on the drop-down menu shown on the bottom right corner of the book's thumbnail. 
- As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. 
- Search results are not shown when all of the text is deleted out of the search input box.
- Invalid queries are handled and prior search results are not shown.
- The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "biography"). 
- The user is able to search for multiple words, such as “artificial intelligence.”
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
- The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /. Routing is implemented with React Router. 
- If a book is assigned to a shelf on the main page and that book also appears on the search page, the correct shelf is also selected for that book on the search page. If that book's shelf is changed on the search page, that change is reflected on the main page as well. The option "None" is selected if a book has not been assigned to any shelf.



Requirements: 
------------

The project requires: 
	- Node Package Manager (NPM). Refer to https://nodejs.org/en/ to install nodejs
	- React. Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app
		>npm install -g create-react-app
	- The project uses an API provided by Udacity. https://reactnd-books-api.udacity.com



Running the Application: 
-----------------------

- Install all the npm packages. Go into the project folder and type the following command to install all npm packages
	>npm install

-  In order to run the application Type the following command
	>npm start

- The Application Runs on localhost:3000



Application design: 
------------------

Components: 
	- Home component: This component displays a list of the books the user has added to his library. The books are distributed on three shelves, as mentioned above. 
	- Search componenet: This component allows the user to search the book library and can add any book to one of the shelf in the home page. This is a child component of the Home Component.
	- BookShelf componenet and Book component: These two components are built to be reused function components in the app. 




