# Telekom Frontend Developer Intern Assignment

Created by **Dalibor Králik**

## Live version of the application

[https://intern-task-nine.vercel.app/](https://intern-task-nine.vercel.app/)

## Setup

Move to the Next.js application (nextjs-app directory):

```bash
cd nextjs-app
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Application is divided into 3 pages. First page is a home page with the navigation to the Table component and the Graph component pages. Second page is a table with companies and their basic information. Third page is a graph with companies' KPIs.

### Table

Table is a reusable component that can be used in any application.

The entry point for this Table is `nextjs-app/src/app/components/(table)/table-component.tsx` which contains Table filter component and Table structure component.
Table filter component is used to filter data in the table. Table structure component is used to display data in the table.

To use this Table component in any application, you need to import `nextjs-app/src/app/components/(table)/table-component.tsx` and use it as a component with prop type of **Entity[]**.

Table component has 2 types of filters. First filter is a search filter which filters data by any value in the row. Second filter is a select filter which filters data by company status.

Table component was built from scratch by myself without using any external component library.

### Graph

Graph is a reusable component that can be used in any application.

The entry point for this Graph is `nextjs-app/src/app/components/(graph)/graph-component.tsx` which contains Graph filter component, Graph structure component and two types of gaph **(Bar graph and Line graph)**.

Graph filter component is used to filter data in the graph by the company. Graph structure component is used to display data in the graph.

To use this Graph component in any application, you need to import `nextjs-app/src/app/components/(graph)/graph-component.tsx` and use it as a component with prop type of **Entity[]**.

Graph component has 1 type of filter. Filter is a select filter which filters data by company.

Application has 2 types of graph. First graph is a bar graph which displays data in a bar graph. Second graph is a line graph which displays data in a line graph.

Graph component was built by using of the external component library [Recharts](https://recharts.org/en-US/).
