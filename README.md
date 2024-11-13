# CivicTrack Code Documentation

**Project Overview**  
CivicTrack is an open-source platform developed with Next.js and styled using Tailwind CSS, aimed at enhancing political transparency in African communities. This project provides users with a comprehensive, accessible database of politicians, their roles, achievements, and portfolios. CivicTrack uses JSON files for data storage, enabling easy maintenance, portability, and data handling without a traditional database setup.

**Technologies Used**  
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Data Storage**: JSON files for structured, local data handling.

---

## Folder Structure

- **`/app/components`**  
  Contains reusable React components such as `Header`, `Footer`, `Hero`, `Banner`, `PolitcianCards`, `FeaturedPortfolios`, `PortfolioList`, `FilterSidebar`, `PortfolioFilter`, and `Profile`. Each component is modular and styled with Tailwind CSS, providing consistency across the application.

- **`/app/data`**  
  Houses JSON files for storing politician and portfolio data (`politicians.json` and `portfolio.json`). This approach avoids the need for a database and facilitates data updates and retrieval.

- **`/app/politicians/page.js`**  
  Contains pages related to the listing, filtering, and detailed view of politicians. The files here define the routes, structure, and data-fetching logic for displaying politicians’ information.

---

## Key Components

### 1. **Header**  
  **File**: `components/Header.js`  
  **Purpose**: Provides a consistent navigation bar across all pages, containing links to the main sections of the application. This component is styled with Tailwind CSS and positioned at the top of each page to ensure easy navigation and brand consistency.

### 2. **Footer**  
  **File**: `components/Footer.js`  
  **Purpose**: Displays site-wide footer information, including navigation links, social media, and other essential information. The footer maintains a cohesive look across pages, promoting a consistent brand experience.

### 3. **Hero**  
  **File**: `components/Hero.js`  
  **Purpose**: Serves as the landing section on the homepage. The Hero component includes a call-to-action with links to view politician data or start exploring CivicTrack. It adapts for mobile and larger screens, centering content on mobile and aligning left on desktop for a dynamic user experience.

### 4. **Banner**  
  **File**: `components/Banner.js`  
  **Purpose**: Displays breadcrumb navigation and contextual information on specific pages, enhancing user experience by allowing users to navigate back to the main list or previous sections efficiently.

### 5. **PoliticianCards**  
  **File**: `components/PoliticianCards.js`  
  **Purpose**: A reusable card component that displays summarized information for each politician. Each card includes the politician's photo, name, role, and short bio, with links to view more detailed information. This component is styled to be visually appealing and adaptable across screen sizes.

### 6. **FeaturedPortfolios**  
  **File**: `components/FeaturedPortfolios.js`  
  **Purpose**: Highlights key portfolios associated with notable politicians or projects on the homepage. This component showcases selected portfolios to provide quick insights and draw users' attention to impactful projects.

### 7. **PortfolioList**  
  **File**: `components/PortfolioList.js`  
  **Purpose**: Displays a comprehensive list of all portfolios, with options to filter, sort, or search. This component allows users to browse through portfolios efficiently and locate specific projects or initiatives relevant to their interests.

### 8. **FilterSidebar**  
  **File**: `components/FilterSidebar.js`  
  **Purpose**: Provides filtering functionality, allowing users to refine politician lists by name, role, and country. The `useEffect` hook is employed to dynamically apply filter criteria based on user inputs, making it easy to narrow down searches.

### 9. **PortfolioFilter**  
  **File**: `components/PortfolioFilter.js`  
  **Purpose**: A specialized filter component designed for portfolios, allowing users to filter by parameters such as status, budget, or related politician. This component enhances user experience by simplifying the process of locating specific types of portfolios.

### 10. **Profile**  
  **File**: `components/Profile.js`  
  **Purpose**: Displays a detailed view of a specific politician, including their biography, achievements, portfolio, and social media links. The Profile component organizes information in a user-friendly layout, allowing users to gain a comprehensive view of each politician's contributions and background.

---

## Pages

### **Homepage**  
**File**: `app/page.js`  
> **Description**: Introduces CivicTrack's mission and vision, displaying key components like the Hero section, featured politicians, and recent portfolios. The homepage is designed to engage users with CivicTrack's purpose, with calls-to-action to explore data or get started.

### **Politicians List Page**  
**File**: `app/politicians/page.js`  
> **Description**: Provides a comprehensive list of all politicians. The page integrates the `FilterSidebar` component for filtering by name, role, and country, allowing users to refine their search and explore specific individuals or groups. Politician data is sourced from `politicians.json`.

### **Politician Detail Page**  
**File**: `app/politicians/page.js`  
> **Description**: Displays detailed information about a specific politician based on their `id`. Users can view the politician’s biography, achievements, portfolios, and social media links. The Profile component is utilized here to present a cohesive, in-depth view of the selected politician.

### **Portfolio Detail Page**  
**File**: `app/politicians/portfolio/[id]/page.js`  
> **Description**: Shows detailed portfolio information for a specific project associated with a politician, identified by `id`. The page provides insights into project objectives, status, and progress metrics stored in `portfolio.json`.

### **Contact Page**  
**File**: `app/contact/page.js`  
> **Description**: Contains a contact form for users to reach out with inquiries, suggestions, or feedback. This page helps CivicTrack foster engagement by providing an accessible channel for communication with users.

### **About Page**  
**File**: `app/about/page.js`  
> **Description**: Provides background information about CivicTrack's purpose, mission, and values, highlighting the team and the platform's role in promoting political transparency. This page builds credibility and educates users on CivicTrack's goals.

### **Login Page**  
**File**: `app/login/page.js`  
> **Description**: Allows users to securely log in with their credentials. Styled with Tailwind CSS, this page provides error handling and links to the signup and forgot-password pages for additional support.

### **Signup Page**  
**File**: `app/signup/page.js`  
> **Description**: Contains a registration form for new users to create an account on CivicTrack. The page includes validation, guidelines, and a link to the login page to ensure a smooth onboarding process.

### **Forgot Password Page**  
**File**: `app/forgot-password/page.js`  
> **Description**: Helps users reset their password in case they have forgotten it. Users enter their email to receive a password reset link, enhancing account security and accessibility.

### **404 Page**  
**File**: `app/pages/404.js`  
> **Description**: A custom error page displayed when users access a non-existent route. Although not implemented, it offers a friendly message and a link back to the homepage, ensuring users can easily navigate back to the site.

--- 
## Data Management

**Politician Data (politicians.json)**  
Each entry in `politicians.json` represents a politician with fields such as:
- `id`: Unique identifier
- `name`: Politician’s name
- `position`: Role or title
- `party`: Affiliated political party
- `country` and `state`: Geographic details
- `achievements`: List of notable accomplishments
- `socialMedia`: Links to social media profiles

**Portfolio Data (portfolio.json)**  
This JSON file contains details of portfolios or projects associated with politicians:
- `id`: Unique identifier for each portfolio entry
- `responsiblePoliticianId`: Maps the portfolio to a specific politician
- `title`: Name of the project or portfolio
- `description`: Brief overview of the portfolio
- `status` and `budget`: Indicates project status and budget if applicable
- `relatedLinks`: Any additional resources or links related to the portfolio

---

## Helper Functions

- **Data Fetching**  
  Files like `app/politicians/portfolio/[id]/page.js` use helper functions (`fetchPoliticians` and `fetchPortfolio`) to read JSON data from `/data`. These helper functions employ `fs.readFileSync` to load and parse JSON data, creating a mock database-like experience with static files.

- **Filtering Logic**  
  The `FilterSidebar` component uses the `useEffect` hook to dynamically apply filters based on user input (name, role, country). This helps narrow down the politicians’ list according to specific search criteria.

---

## Styling

All components and pages utilize Tailwind CSS, enabling rapid styling and responsive design. Tailwind’s utility-first approach ensures that styling remains consistent and adjustable for different screen sizes without extensive custom CSS.

**Examples of Tailwind Usage**:
- **Responsiveness**: Classes like `lg:w-3/5` and `md:text-5xl` ensure components adapt to different screen widths.
- **Color & Backgrounds**: `bg-gray-900`, `text-white`, and custom color hex codes provide a cohesive theme aligned with CivicTrack’s branding.

---

## API Documentation (Future Scope)

The current implementation uses JSON files, but future development could involve RESTful API endpoints for CRUD operations. APIs could allow:
- **GET** requests to retrieve politician and portfolio data.
- **POST/PUT** requests to add or update politician information.
- **DELETE** requests for managing data removal.

---

## Contribution Guidelines

Contributions are welcome! For consistency, please ensure:
1. **Code Quality**: Follow ES6 syntax and Next.js best practices.
2. **Styling**: Use Tailwind CSS classes for consistency.
3. **Testing**: Include testing for critical components if possible.

**For any questions or suggestions, please contact the project maintainers.**