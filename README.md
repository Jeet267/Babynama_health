# Babynama - Frontend Developer Intern Assignment

Welcome to the Babynama internship assignment! This short project is designed to simulate a real-world task and help us understand your skills and thought process.

**Objective:** Build a small, self-contained feature in Next.js.  
**Time Allotment:** 2-4 hours.

---

### **Part 1: Getting Started & The Task**

1.  **Repository Setup:** You have already created a repository from this template. Now, install the dependencies:
    ```bash
    npm install
    ```
2.  **The User Story:** Your goal is to implement the following feature:
    > "As a busy parent exploring Babynama's resources, I want to see a simple, clear list of upcoming live webinars on a dedicated page so I can quickly see what's available."

3.  **Your Implementation Tasks:**
    * **Create a Page:** Build a new page at the `/webinars` route.
    * **Display Data:** You don't need an API. Create a mock data array directly in your page file. The array should contain at least three webinar objects, each with an `id`, `title`, `speaker` (e.g., "Dr. Sumitra Meena"), and `date`. Render this data as a list of styled cards on the `/webinars` page.
    * **Add Interactivity:** Add a "View Details" button to each card. When clicked, it should log the `id` of that webinar to the browser's console (e.g., `console.log("Viewing details for webinar ID: 3")`).

---

### **Part 2: Implementation Details**

1.  **Live URL:** [Add your Vercel deployment link after deployment]
2.  **Choices Made:** I chose to implement the webinar cards directly in the page component instead of creating a separate WebinarCard component. This decision was made because the card structure is relatively simple and specific to this use case. The current implementation maintains good readability while avoiding unnecessary abstraction for a component that isn't being reused elsewhere in the application. However, if the project grows and we need to use these cards in other places or add more complex functionality, we can easily extract it into a separate component.
3.  **Technical Features:**
    * Responsive grid layout that adapts to different screen sizes
    * Clean date formatting using JavaScript's built-in date functions
    * Interactive hover effects and transitions for better user experience
    * Semantic HTML structure for better accessibility
    * TypeScript for type safety and better developer experience

The implementation provides a clean, user-friendly interface for parents to quickly scan upcoming webinars and access more details when needed.

---

### **Part 3: Submission**

After you've finished coding, please complete the following two steps.

1.  **Deploy Your Work:** Deploy your project to Vercel (it's free).
2.  **Complete this README:** **This is the most important step.** Edit this `README.md` file in your repository to include:
    * **Live URL:** [Add your Vercel deployment link here]
    * **Choices Made:** [Briefly explain one technical choice you made]
    * **Roadblock & Learning:** [Describe one small thing you had to look up and how you solved it]
    * **Screenshot:**
        ![Your Screenshot Here](https://via.placeholder.com/600x400.png?text=Paste+Screenshot+of+Your+App+Here)

To submit, please share the link to your finished GitHub repository with us. Good luck!
