# Frontend Developer Intern Assignment

## Objective
Develop a frontend application focusing on reusable, abstract components, and interactivity. The application will use a dataset to require effective data handling and visualization. CSS libraries like Tailwind, Bootstrap can be used and, optionally, prebuilt component libraries can also be used. If prebuilt component libraries are used then a level of abstraction must be add on top.

## Data
Data can be found in data.ts file. Main object contains information about entities (companies) and each object contains array of monthly KPI data objects. 

## Tasks

### 1. Reusable Table Component
- **Basic**: Create a table component to display data including company names, industries, locations, employee counts, and more from the dataset.
- **Bonus 1**: Implement generics in TypeScript for the table component.
- **Bonus 2**: Create variants for the table component, like different color themes or sizes.
- **Bonus 3**: Creatively style columns like 'status', 'region', and 'sector' for better readability and engagement. 

### 2. Reusable Graph Component
- **Basic**: Develop a graph component to visualize KPI data (Revenue, Expenses, Profit) over time.
- **Bonus 1**: Implement generics in TypeScript.
- **Bonus 2**: Create variants for the graph component, like different graph types or themes.
- **Bonus 3**: Style graph differently for future and past data.

### 3. Interactive Data Display
- **Basic**: Display child data (monthly KPIs) when a table row is hovered over. Include all 3 KPIs. 
- **Bonus 1**: Enable row selection and style the selected row differently.
- **Bonus 2**: Implement a UI element to toggle between two graph types.

### 4. Application Integration with Routing
- **Basic**: Integrate components into an app to effectively display the dataset. 
- **Bonus**: Implement a routing system with at least one dummy route. If different variants were created, show the usage of them on separate page.

## Deliverables
1. Source code for the application.
2. Source code for table and graph components, with variants.
3. Documentation on application and component usage.

## Evaluation Criteria
- 80% of the evaluation consists of:
    - Completion of Basic tasks.
    - Code quality and readability.
    - Use of TypeScript.
    - Effective use of CSS and additional abstraction.
    - Interactivity, user experience, data display and styling.
    - Creative component design and data visualization.
- 20% of the evaluation consists of:
    - Completion of Bonus tasks.

## Submission Guidelines
- Push code to a GitHub repository.
- Include a README with setup and usage instructions.