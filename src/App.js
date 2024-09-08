import "./App.css";
import { BooksProvider } from "./BooksContext";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SecretBookList from "./components/SecretBookList";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route
            path="/secret"
            element={
              <PrivateRoute Component={<SecretBookList />}></PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
