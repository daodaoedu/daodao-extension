import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages";

const App = () => {
  return <Home />;
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />}>
  //       {/* <Route index element={<Home />} /> */}
  //         {/* <Route path="teams" element={<Teams />}>
  //           <Route path=":teamId" element={<Team />} />
  //           <Route path="new" element={<NewTeamForm />} />
  //           <Route index element={<LeagueStandings />} />
  //         </Route> */}
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
