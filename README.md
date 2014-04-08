cits3403stg1
============

CITS3403 Web and Internet Technologies - Project-1

Student name   : ITALO GOMES SANTANA
Student number : 21382104
Reference page : http://student.csse.uwa.edu.au/~21382104/CITS3403/reference.html


Javascript:

I've created a javascript file called js/scripts.js. It contains methods related to form validations,
redirect pages and get html components(layout).
For example, the page register.html validates all fields. Specifically, the email field is validated
using regular expression to ensure the correct use the field.
All fields of register.html show a error message if the data has not been provided or wrongly inserted.


CSS:

There is a file called css/styles.css where it has implemented all main css styles the whole website.
However, in some pages, e.g. register.html, we can find some css written on file.
Most files have inline css written


Form Controls:

When the user makes a valid register in the website, it shows a successful message to the user.
However, as a static website, there is no user session.


DHTML:

An example of using DHTML is presented in the function getFooter() 
in js/scripts.js. This function builds the whole footer, which is composed by
HTML text and a javascript call. It is responsible to get the file last modified date.