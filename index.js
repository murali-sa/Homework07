const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
// ****
/* inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your GitHub username:"
    },
    {
      type: "checkbox",
      message: "What is your favorite color:",
      name: "stack",
      choices: [
        "Blue", 
        "Red", 
        "Pink", 
        "Green"
      ]
    }); */
// ****
inquirer
  .prompt([
    {
      message: "Enter your GitHub username:",
      name: "username"
    },
    {
      message: "What is your favorite color:",
      name: "backcolor"
    }
  ])
  .then(function ({ username, backcolor }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function (res) {
      data = res.data;
      console.log(data);
      const html = `<html lang="en">
      <head>
  <meta charset="UTF-8">
  <title>Basic CSS Example</title>

  <!-- Introducing the Style Tag! -->
  <!-- ========================== -->

  <!-- Now you can customize the look of your sites. Each rule in the style tag changes the appearance of its associated element (notice how each rule names an element from the HTML body). -->
  <style>
    /*
			NOTE: Commenting is a bit different in CSS. 
		  They start with forward-slash + asterisk 
		  and end with back-slash + asterisk.
		  */
    /* h1 heading tag */
    
    h1 {
      /* Put a 15-pixel margin at the bottom of the heading. */
      margin-bottom: 15px;
      /* Change the size of your font to 60 pixels high. */
      font-size: 60px;
      /* This will color the heading font white. */
      color: blue;
      /* Align the text to the center of its enclosing element (e.g. div). */
      text-align: center;
      /* Underline the text. */
      text-decoration: underline;
      /* The background of the heading element will now be black. */
      /* background-color: blue;*/
    }
    /* h2 heading tags */
    
    h2 {
      /* Put a 15-pixel margin at the top of all h2 headings. */
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 40px;
      text-align: center;
    }
    /* h3 heading tags */
    h3 {
      margin-top: 15px;
      font-size: 20px;
      text-align: center;
    }
    /* All img tags */
    
    img {
      /* 
				Center a block element in the middle of its enclosing tag.
				When you use the "auto" rule on both left and right margins, 
				your browser will do the math necessary to center a block element.
				*/
      margin-left: auto;
      margin-right: auto;
      /* Block display (more on this later) */
      display: block;
    }
    /* All p tags */
    
    p {
      text-align: center;
      font-size: 20px;
      /* Bold the text. */
      font-weight: bold;
    }

  </style>
</head>
                  <body> 
                  <div style="background-color:${backcolor}">
                  <h1>User Name: ${data.login} </h1> 
                  <h2>URL: ${data.url}</h2>
                  <h2>Number of Repos: ${data.public_repos}</h2>
                  <h2>Number of followers: ${data.followers}</h2>
                  </div>
                  </body>
                  </html>`;
      //
      pdf.create(html).toFile('output.pdf', console.log);
      //            pdf.create(html).toFile('output.pdf', console.log);
    });
  });
/* const questions = [

];

function writeToFile(fileName, data) {

}

function init() {

init(); */



