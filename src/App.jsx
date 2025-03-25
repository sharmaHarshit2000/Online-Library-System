import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

const App = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Router>
      <Navbar />
      <div className="flex-grow bg-gray-100 px-4 sm:px-6 lg:px-8">
        <main className="max-w-6xl mx-auto w-full py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BrowseBooks />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/books/:category?" element={<BrowseBooks />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  </div>
);

export default App;
