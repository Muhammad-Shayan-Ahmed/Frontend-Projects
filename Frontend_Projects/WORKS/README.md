# Creative Studio Webpage

A visually engaging and interactive website designed for a creative studio, emphasizing cultural advancement through strategy and design.

## Project Overview

This project is a single-page creative studio website that features interactive animations, a video loader, smooth scrolling, and various sections showcasing the studio's projects. It uses GSAP (GreenSock Animation Platform), Locomotive Scroll, and custom JavaScript for enhanced user experience.

## Features

- **Video Loader Animation**: The site includes an initial loading screen with animations to build anticipation and enhance user engagement.
- **Smooth Scrolling**: Implemented using Locomotive Scroll to create a smooth, visually appealing navigation experience.
- **Interactive Sections**: Hover animations and effects to showcase different projects creatively.
- **Responsive Design**: Fully responsive layout with elements styled to fit different screen sizes.
- **Custom Styling**: Unique visual style with dark backgrounds, vibrant yellow accents, and sophisticated typography.

## Technologies Used

- **HTML**: For the basic structure of the webpage.
- **CSS**: For styling the components, including an imported Google Font (`Nunito`), and custom animations.
- **JavaScript**: For interactivity, animations (using GSAP), and smooth scrolling.
- **External Libraries**:
  - **GSAP**: Used for animations like loader transitions.
  - **Locomotive Scroll**: Provides smooth scrolling effects and enhances page navigation.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   
Navigate to the project folder:

cd creative-studio-webpage
Open index.html in your browser to view the website.

File Structure
index.html: The main HTML file containing the structure of the page.
style.css: Contains all the CSS used for the layout and styling of the page.
main.js: JavaScript used for animations and smooth scrolling effects.

Key JavaScript Functionalities

Loading Animation: The loading() function in main.js creates an introductory animation effect for a video background and loading bars.
Smooth Scrolling: The loco() function sets up smooth scrolling using Locomotive Scroll. It also adds hover functionality for elements, dynamically changing background images based on the project being hovered over.

Styling Highlights

Loader: Custom loader with black background and yellow moving divs, using GSAP for entry animations.
Typography: Sophisticated font styles with different weights to provide an elegant and creative aesthetic.
Background and Color Scheme: Predominantly black and yellow color palette, giving a modern and artistic look.

Screenshot

License
This project is licensed under the MIT License - see the LICENSE file for details.
