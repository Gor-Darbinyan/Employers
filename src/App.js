import React from "react";
import "./App.css";
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/serach-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployersLIst from "./components/employers-list/employers-list";
import EmployersAddForm from "./components/employers-add-form/employers-add-form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rice: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rice: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  onChangeInputValue=(id,prop)=>{
    const number = parseFloat(prop)
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id == id) {
          return { ...item, salary: number };
        }
        return item;
      }),
    }));
  }
  

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      rise: false,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id == id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rice":
        return items.filter((item) => item.rice);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employer = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="App">
        <AppInfo employer={employer} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployersLIst
          onToggleProp={this.onToggleProp}
          onDeleteItem={this.onDeleteItem}
          onChangeInputValue={this.onChangeInputValue}
          data={visibleData}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
