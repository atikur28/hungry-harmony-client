import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="px-2 my-10">
        <h2 className="md:text-xl font-bold">
          1. What is One way data binding?
        </h2>
        <p className="text-sm md:text-base mt-2">
          <span className="font-bold">Answer:</span> One-way data binding is a
          data flow pattern in which data is only allowed to flow from the
          source (e.g., parent component) to the destination, but not the other
          way around. Changes in the source data can update the destination, but
          changes in the destination do not affect the source. This pattern is
          commonly used in React for maintaining a predictable and controlled
          data flow.
        </p>
        <h2 className="md:text-xl font-bold mt-10">
          2. What is NPM in node.js?
        </h2>
        <p className="text-sm md:text-base mt-2">
          <span className="font-bold">Answer:</span> NPM is a package manager
          for Node.js and JavaScript, used to install, manage, and share
          libraries and dependencies. It simplifies the process of adding
          third-party code to your Node.js projects.
        </p>
        <h2 className="md:text-xl font-bold mt-10">
          3. Different between Mongodb database vs mySQL database.
        </h2>
        <p className="text-sm md:text-base mt-2">
          <span className="font-bold">Answer:</span> MongoDB is a NoSQL database
          with a flexible schema, using collections and documents, while MySQL
          is a relational database with a structured schema and SQL for data
          manipulation. MongoDB is suitable for unstructured or rapidly changing
          data, while MySQL is ideal for structured data with defined
          relationships.
        </p>
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
