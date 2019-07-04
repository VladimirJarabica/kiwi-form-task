# Booking form task
## Form
Create form with folowing fields

Passenger:
- firstname
- lastname
- nationality
- gender
- date of birth

\* plus points: possibility to add multiple passengers (1 - 9) - each has same fields

Contact:
- contact email
- contact phone

Payment:
- card number
- expiration date
- cvv (security code)
- cardholder's name
- Submit button (does nothing)

\* plus points: form could have 2 steps. First contains Passenger and Contact, second Payment section - same as kiwi.com booking

## Validation
All fields are required and must be validated.   
- firstname, lastname - length > 1, only valid characters
- date of birth - all adults for simplicity (more than 18 years)
- email validation (has \@, .domain)
- card number 16 number
  - \* plus points: field mask - space after each 4 number
- expiration date - later than today
- cvv - 3/4 numbers
- submit button - enabled if all fields are valid

\* plus points: if two steps are used, user can go to second step only if all fields from first are valid

## Notes
Show yourself! Use any cool library, technique, skill you have, like or want us to see.  
Some proposals:
- React 16.8
- flow / typescript for types
- orbit.kiwi or another component library for fancy input, errors, button...