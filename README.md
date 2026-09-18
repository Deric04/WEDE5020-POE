# Bakes by MK

Bakes by MK is a responsive bakery website created for the WEDE5020 Portfolio of Evidence. The website showcases bakery products and provides customers with information about the business, products, enquiries and contact options.

The website includes five linked pages:

- Home
- About
- Products
- Enquiry
- Contact

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- GitHub
## Part 2 – CSS Styling and Responsive Design

Part 2 focused on improving the visual design, layout and responsiveness of the Bakes by MK website.

### CSS Styling

An external stylesheet was created in `css/style.css` and linked to all five HTML pages. The stylesheet includes:

- CSS reset and base styling
- Consistent colour scheme
- Typography and heading hierarchy
- Flexbox and CSS Grid layouts
- Buttons and navigation styling
- Borders, shadows and backgrounds
- Hover, focus and active states
- Consistent spacing and sizing

### Responsive Design

Responsive CSS was implemented using media queries to support:

- Desktop screens
- Tablet screens
- Mobile screens

Relative units such as `rem` and percentages were used where appropriate to improve scalability.

The website was tested at different screen sizes using browser developer tools and Live Server.

### Responsive Image

The home page hero image uses the HTML `<picture>` element to support responsive image presentation.

## Responsive Testing Evidence

Screenshots showing the website at desktop, tablet and mobile sizes are stored in the `evidence` folder:

- `desktop-view.png`
- `tablet-view.png`
- `mobile-view.png`
## Changelog

### Part 2 – CSS Styling and Responsive Design

- Created and used an external CSS stylesheet in `css/style.css`.
- Applied a CSS reset and consistent base styling across the website.
- Added a consistent Bakes by MK colour scheme.
- Improved typography using font sizes, font weights, line heights and spacing.
- Added Flexbox and CSS Grid layouts for different website sections.
- Added visual styling including backgrounds, borders and box shadows.
- Added hover, focus and active states to interactive elements.
- Added responsive breakpoints for desktop, tablet and mobile screen sizes.
- Updated selected CSS measurements to use relative units such as `rem` and percentages.
- Added responsive image handling using the HTML `<picture>` element.
- Tested the website at desktop, tablet and mobile screen sizes.
- Added responsive testing screenshots to the `evidence` folder.

## Part 1 Feedback and Improvements

The Part 1 assessment feedback was reviewed before continuing with the development of the website.

### Timeline
The Part 1 timeline section received feedback indicating that major improvement was required. The development process was therefore continued in clear stages, including website structure, CSS styling, responsive design, JavaScript functionality, SEO, form development, testing and deployment.

### Budget
The Part 1 budget section received feedback indicating that major improvement was required. The project development was reviewed with consideration for the tools and resources required, including Visual Studio Code, HTML, CSS, JavaScript, image assets, GitHub and website deployment.

### Two Proposals
The Two Proposals section received 2/5 marks, with feedback indicating that additional detail and accuracy were required. The selected Bakes by MK website concept was developed further by implementing the planned pages, visual design, responsive layout and website functionality.

### GitHub and Documentation
The Part 1 feedback identified improvements required for GitHub commits, the README and the changelog. These areas are being addressed during Part 2 and Part 3 by documenting development changes, maintaining descriptive commits and keeping the README updated.

### References
The References section received 2/5 marks, with feedback indicating that more detail and accuracy were required. References used during the project will be documented consistently in the README and relevant project documentation.

## References

- Mozilla Developer Network (MDN). (n.d.). HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 18 September 2026).

- Mozilla Developer Network (MDN). (n.d.). CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 18 September 2026).

- Mozilla Developer Network (MDN). (n.d.). JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 18 September 2026).

- W3C. (n.d.). Web Standards. Available at: https://www.w3.org/standards/ (Accessed: 18 September 2026).

- GitHub. (n.d.). GitHub Documentation. Available at: https://docs.github.com/ (Accessed: 18 September 2026).

## Part 3 – Enhancing Functionality and SEO

Part 3 focused on improving the functionality, accessibility, SEO and user experience of the Bakes by MK website.

### JavaScript Functionality

JavaScript was implemented through the external `js/script.js` file.

The following interactive features were added:

* Product search functionality on the Products page.
* Dynamic filtering of product cards based on the user's search.
* A no-results message when no matching products are found.
* FAQ accordion functionality on the About page.
* Dynamic enquiry form fields based on the selected enquiry type.
* Client-side HTML and JavaScript form validation.
* Email format validation.
* Phone number validation.
* Minimum message-length validation.
* AJAX form submission.
* Submission success and error messages.
* Form reset functionality.

### Enquiry Form

The Enquiry page contains a structured HTML form that allows customers to provide:

* Full name.
* Email address.
* Phone number.
* Enquiry type.
* Product selection.
* Preferred date.
* Quantity.
* Collection or delivery preference.
* Preferred location.
* Additional requirements.

The enquiry form supports product, service, volunteer and sponsorship enquiries.

When volunteer or sponsorship enquiries are selected, product-related fields are disabled because they are not required for those enquiry types.

The form is submitted using AJAX through Formspree and provides feedback to the user after submission.

### Contact Form

The Contact page contains a validated contact form allowing users to provide:

* Full name.
* Email address.
* Message type.
* Full message.

The contact form uses JavaScript validation and AJAX submission through Formspree.

The form displays a success message after a successful submission and an error message if submission fails.

### Search and Interactive Features

The Products page includes a search feature that allows users to search product names and descriptions.

The About page includes an interactive FAQ accordion that allows users to expand and collapse answers.

These features improve usability by allowing visitors to find information without navigating away from the current page.

### SEO Improvements

SEO improvements were implemented across the website.

These include:

* Unique page titles.
* Page-specific meta descriptions.
* Relevant keyword metadata.
* Descriptive image `alt` attributes.
* Descriptive image filenames.
* Semantic HTML structure.
* Proper heading hierarchy.
* Internal navigation links between pages.
* Favicon implementation.
* Responsive design for mobile devices.
* Lazy loading for product images.
* Responsive hero image handling using the `<picture>` element.
* Local business structured data on the Home page.
* `robots.txt`.
* `sitemap.xml`.

### Performance and Accessibility

Performance and accessibility improvements include:

* Responsive layouts for desktop, tablet and mobile devices.
* Relative CSS units such as `rem` and percentages.
* Responsive images.
* Lazy loading of non-critical product images.
* Descriptive alternative text for images.
* Accessible navigation labels.
* Accessible form labels.
* `aria-live` feedback areas for form submissions and search results.
* `aria-expanded` states for FAQ controls.
* Keyboard-focus styling.

### Testing

The website was tested across different screen sizes and the following responsive evidence was recorded:

* `evidence/desktop-view.png`
* `evidence/tablet-view.png`
* `evidence/mobile-view.png`

JavaScript functionality was also tested for:

* Product searching.
* FAQ interaction.
* Enquiry form validation.
* Enquiry form submission.
* Contact form validation.
* Contact form submission.
* Form reset functionality.

### Deployment

The website is prepared for deployment using GitHub Pages.

The final deployment URL will be added to this README after GitHub Pages has been enabled and tested.

### Part 3 Changelog

* Added JavaScript product search and filtering.
* Added interactive FAQ accordion.
* Added enquiry form validation.
* Added contact form validation.
* Added AJAX form submission using Formspree.
* Added dynamic enquiry fields for different enquiry types.
* Added success and error feedback for forms.
* Added page-specific SEO metadata.
* Added descriptive image alternative text.
* Added lazy loading to product images.
* Added responsive image handling for the hero section.
* Added local business structured data.
* Added favicon links.
* Added `robots.txt`.
* Added `sitemap.xml`.
* Added responsive and accessibility improvements.
* Added responsive testing evidence.
* Added project video section using HTML5 video.
