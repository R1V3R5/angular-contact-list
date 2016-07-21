[SURGE!](http://tiy-joshuarivers-angular-contact-list.surge.sh)

## Learning Objectives

After completing this assignment, you should…

* Understand how to do form validation using angular models. (Hint: use `ngKeypress`)
* Understand how to work with persistent data.

## Deliverables

* A link to your repo
* A deployed version on `surge.sh`

## Normal Mode

Create a contact form with the following fields: name, email, website and message. The form should also have a submit button. As the user is typing, it should validate all of the form fields and show any errors in the form data.

Once you have a correctly filled out form, you should send the info to the class server.

Below the contact form, it should list out all of the comments in a nicely styled fashion. Those comments should be persistent.

### Validations

* Name cannot be left empty
* Email cannot be left empty
* Email must contain an `@`
* Website cannot be left empty
* Website must start with `http://` or `https://`
* Message cannot be left empty