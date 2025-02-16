interface BlogType {
    slug: string;
    content: string;
    title: string;
    description: string;
    imageUrl?: string
};

const SampleBlogs: BlogType[] = [
    {
      slug: "future-of-web-development",
      title: "The Future of Web Development",
      description: "An in-depth look at the upcoming trends and technologies shaping the future of web development in 2024.",
      content: `
  # The Future of Web Development
  
  As we look toward 2024, several key technologies and practices are set to redefine how we build for the web. From **AI integration** to **no-code platforms**, web development is becoming more dynamic, streamlined, and efficient.
  
  ## Key Trends:
  - **AI & Automation**: Tools like GitHub Copilot are making coding faster and smarter.
  - **WebAssembly (Wasm)**: High-performance applications directly in the browser.
  - **Progressive Web Apps (PWAs)**: The rise of apps that behave like native mobile apps.
      `
    },
    {
      slug: "javascript-tips",
      title: "10 JavaScript Tips and Tricks for Beginners",
      description: "Master JavaScript with these essential tips and tricks for every beginner.",
      imageUrl: "https://www.pexels.com/photo/person-using-laptop-4533596/",
      content: `
  # 10 JavaScript Tips and Tricks for Beginners
  
  JavaScript is the backbone of web development. Whether you're just starting out or looking to improve, these tips will take your skills to the next level.
  
  ## Top Tips:
  1. **Use \`let\` and \`const\` instead of \`var\`.**
  2. **Master the basics of async programming.**
  3. **Understand closures and scopes.**
  
  By following these best practices, you'll avoid common pitfalls and write cleaner, more efficient code.
      `
    },
    {
      slug: "understanding-react-hooks",
      title: "Understanding React Hooks",
      description: "A comprehensive guide to React Hooks, simplifying state management and side effects in functional components.",
      content: `
  # Understanding React Hooks
  
  React Hooks are a game-changer for functional components. With Hooks, you can use state and other features in function components without writing class components.
  
  ## Common Hooks:
  - **\`useState\`**: Manage local component state.
  - **\`useEffect\`**: Handle side effects like data fetching.
  - **\`useContext\`**: Share data between components without passing props manually.
  
  Hooks provide a simpler, more modular approach to managing component logic in React.
      `
    },
    {
      slug: "tailwind-css-guide",
      title: "A Beginner’s Guide to Tailwind CSS",
      description: "Learn how Tailwind CSS helps build modern, responsive designs faster with utility-first classes.",
      content: `
  # A Beginner’s Guide to Tailwind CSS
  
  Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces without writing a single line of custom CSS.
  
  ## Benefits:
  - **Utility-First**: Add pre-built classes directly in your HTML.
  - **Responsive Design**: Easily create mobile-friendly layouts.
  - **Customization**: Tailwind is highly customizable via the configuration file.
  
  Tailwind helps you focus more on design and less on styling!
      `
    },
    {
      slug: "lazy-loading",
      title: "Improving Web Performance with Lazy Loading",
      description: "Discover how lazy loading can improve performance by deferring non-essential resources.",
      content: `
  # Improving Web Performance with Lazy Loading
  
  Lazy loading is a performance optimization technique that loads content only when it's needed.
  
  ## Benefits:
  - **Faster Initial Load Times**: Only critical content is loaded first.
  - **Reduced Bandwidth Usage**: Defer images, scripts, and videos until they’re in view.
  - **Improved User Experience**: Faster rendering of the initial page, especially on slower networks.
  
  Implement lazy loading for images using the \`loading\` attribute in HTML: \`<img loading="lazy" src="image.jpg" />\`.
      `
    },
    {
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs. Flexbox: When to Use Which",
      description: "Understand the key differences between CSS Grid and Flexbox and when to use each one.",
      content: `
  # CSS Grid vs. Flexbox: When to Use Which
  
  Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes.
  
  ## Flexbox:
  - Best for **one-dimensional layouts** (rows or columns).
  - Ideal for aligning elements in a single direction.
  
  ## CSS Grid:
  - Best for **two-dimensional layouts** (both rows and columns).
  - Perfect for creating complex grid-based layouts.
  
  Use Flexbox for simple alignments and CSS Grid for complex layouts.
      `
    },
    {
      slug: "accessible-websites",
      title: "Building Accessible Websites: Best Practices",
      description: "Ensure your websites are accessible to everyone with these essential best practices.",
      content: `
  # Building Accessible Websites: Best Practices
  
  Web accessibility ensures that websites are usable by people of all abilities.
  
  ## Key Practices:
  1. **Use Semantic HTML**: Elements like \`<header>\`, \`<nav>\`, and \`<footer>\` help screen readers understand the page structure.
  2. **Provide Text Alternatives**: Add \`alt\` text to images for users who cannot see them.
  3. **Ensure Keyboard Accessibility**: Make sure users can navigate your site using only a keyboard.
  
  Following these practices makes your site more inclusive and improves the overall user experience.
      `
    },
    {
      slug: "responsive-design",
      title: "The Importance of Responsive Design",
      description: "Why responsive design is crucial in today’s mobile-first world and how to implement it.",
      content: `
  # The Importance of Responsive Design
  
  In a mobile-first world, responsive design is no longer optional.
  
  ## Why It Matters:
  - **Improved User Experience**: A responsive site adapts to various screen sizes, providing a seamless experience across devices.
  - **SEO Benefits**: Google rewards mobile-friendly websites with better search rankings.
  - **Future-Proof**: As new devices emerge, a responsive design ensures your site is adaptable.
  
  Make use of media queries and flexible grids for a responsive layout.
      `
    },
    {
      slug: "building-rest-api-nodejs",
      title: "How to Build a RESTful API with Node.js",
      description: "A step-by-step guide to building a RESTful API using Node.js, Express, and MongoDB.",
      content: `
  # How to Build a RESTful API with Node.js
  
  Building a RESTful API allows you to interact with a database and serve data to your frontend or third-party applications.
  
  ## Steps:
  1. **Set up Node.js and Express**.
  2. **Create API endpoints** to handle CRUD operations.
  3. **Use MongoDB** as your database.
  
  With these steps, you can build a scalable, efficient RESTful API in no time!
      `
    },
    {
      slug: "top-css-frameworks-2024",
      title: "Top 5 CSS Frameworks to Use in 2024",
      description: "Explore the top CSS frameworks that can help you build responsive, modern websites quickly.",
      content: `
  # Top 5 CSS Frameworks to Use in 2024
  
  CSS frameworks make it easier to build beautiful, responsive websites quickly.
  
  ## Top Picks:
  1. **Tailwind CSS**: Utility-first, highly customizable.
  2. **Bootstrap**: Popular, feature-rich framework.
  3. **Bulma**: Simple, modern, and mobile-first.
  4. **Foundation**: Responsive and flexible.
  5. **Materialize**: Based on Google's Material Design.
  
  Each of these frameworks offers unique features to suit different project needs.
      `
    }
  ];
  
  export default SampleBlogs