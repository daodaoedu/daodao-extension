import styled from "@emotion/styled";
import React from "react";
import Navigation from "../shared/components/Navigation";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

const HomeWrapper = styled.div`
  /* width: 600px; */
  .wrap {
    margin: 0 auto;
    width: 368px;
    box-shadow: 0px 0px 20px rgba(38, 38, 38, 0.2);
    border-radius: 16px 16px 16px 16px;
    background: #f7f8fa;
  }
  .bar {
    background: #293a3d;
    padding: 11px 0 11px 31px;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bar-img-top {
    width: 68px;
  }
  .bar-img-down {
    width: 20px;
    margin: 0 21.76px 0 0;
  }
  .banner {
    font-size: 22px;
    font-weight: 700;
    line-height: 140%;
    color: #293a3d;
    text-align: center;
    margin: 24px 0 24px 0;
  }
  .content {
    margin: 0 24px 24px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-item {
    width: 320px;
    height: 40px;
    color: #536166;
    margin: 11px 0 20px 0;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
  }
  .next {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next-item {
    width: 320px;
    height: 40px;
    background-color: #16b9b3;
    color: #ffffff;
    border-radius: 20px;
    border: #ffffff;
    box-shadow: 0px 4px 10px rgba(89, 182, 178, 0.5);
  }
  .footer {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    padding: 14px 27px 14px 0;
    color: #536166;
    border-top: 1px solid #dbdbdb;
    margin-top: 24px;
  }
  .section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    &:hover {
      background-color: #dbdbdb;
      border-radius: 4px;
      margin-left: 272px;
    }
  }
  .user-icon {
    padding-right: 10.5px;
  }
  /* background-color: black; */
`;

const Home = () => {
  const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);
  return (
    <HomeWrapper>
      <div className="wrap">
        <div className="bar">
          <img
            className="bar-img-top"
            src="img/daodao_logo.png"
            alt="daodao_logo"
          />
          <a href="#">
            <img
              className="bar-img-down"
              src="/img/icon-cancel.svg"
              alt="icon_cancer"
            />
          </a>
        </div>

        <div className="banner">
          <h1>新增學習資源</h1>
        </div>
        <div className="content">
          <ul>
            <li>
              <p>名稱</p>
              <input
                className="content-item"
                type="text"
                value="玩一玩機器學習與人工智慧"
              />
            </li>
            <li>
              <p>類型</p>
              <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={value}
                onChange={(event, newValue) => {
                  setValue([
                    ...fixedOptions,
                    ...newValue.filter(
                      (option) => fixedOptions.indexOf(option) === -1
                    ),
                  ]);
                }}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip
                      label={option.title}
                      {...getTagProps({ index })}
                      disabled={fixedOptions.indexOf(option) !== -1}
                    />
                  ))
                }
                sx={{ width: "auto" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Fixed tag"
                    placeholder="Favorites"
                  />
                )}
              />
              {/* <select className="content-item" name="" id="">
                        <option value="">Podcast</option>
                        <option value="">App</option>
                        <option value="">組織/社群</option>
                        <option value="">影片</option>
                        <option value="">提案/競賽</option>
                        <option value="">文章/書</option>
                        <option value="">工具/操作</option>
                        <option value="">課程/活動</option>
                   </select> */}
            </li>
            <li>
              <p>領域</p>
              {/* <select className="content-item" name="" id="" >
                    <option value="">語言與文學</option>
                    <option value="">數學與邏輯</option>
                    <option value="">資訊與工程</option>
                    <option value="">人文社會</option>
                    <option value="">自然科學</option>
                    <option value="">藝術</option>
                    <option value="">教育</option>
                    <option value="">生活</option>
                    <option value="">運動 / 心理 / 醫學</option>
                    <option value="">商業與社會創新</option>
                    <option value="">綜合型學習資源</option>
                    <option value="">學習 / 教學工具</option>
                   </select> */}
            </li>
          </ul>
        </div>
        <div className="next">
          <form action="infor.html">
            <input className="next-item" type="submit" value="下一步" />
          </form>
        </div>
        <div className="footer">
          <div className="section">
            <img
              className="user-icon"
              src="img/icon-user.svg"
              alt="icon-user"
            />
            <p>匿名</p>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
