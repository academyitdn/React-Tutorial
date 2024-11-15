import { useState } from 'react';
import './App.css';
import ModalChoose from './ModalChoose';
import Todolist from './Todolist';
import Demo from './Demo';

const movie = {
  name: "",
  listCate: [],
  listActor: [],
  listCharacter: []
};
const categories = ["Action", "Comedy", "Drama"];
const actors = ["John Doe", "Jane Smith", "Bob Brown"];
const characters = ["Hero", "Villain", "Sidekick"];

function App() {
  const [data, setData] = useState(movie);
  const [dataChoose, setDataChoose] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [chooseType, setChooseType] = useState("");

  const handleChoose = (type) => {
    setChooseType(type);
    switch(type) {
      case "categories":
        setDataChoose(categories);
        break;
      case "actors":
        setDataChoose(actors);
        break;
      case "characters":
        setDataChoose(characters);
        break;
      default:
        setDataChoose([]);
    }
    setShowModal(true);
  };

  const handleSelect = (item) => {
    setData(prevData => {
      let updatedList;

      switch(chooseType) {
        case "categories":
          updatedList = toggleSelection(prevData.listCate, item);
          return { ...prevData, listCate: updatedList };
        case "actors":
          updatedList = toggleSelection(prevData.listActor, item);
          return { ...prevData, listActor: updatedList };
        case "characters":
          updatedList = toggleSelection(prevData.listCharacter, item);
          return { ...prevData, listCharacter: updatedList };
        default:
          return prevData;
      }
    });
  };

  const toggleSelection = (list, item) => {
    return list.includes(item) ? list.filter(i => i !== item) : [...list, item];
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getSelectedItems = () => {
    switch (chooseType) {
      case "categories":
        return data.listCate;
      case "actors":
        return data.listActor;
      case "characters":
        return data.listCharacter;
      default:
        return [];
    }
  };

  return (
    <>
      {/* <button onClick={() => handleChoose("categories")}>Choose categories</button>
      <button onClick={() => handleChoose("actors")}>Choose actors</button>
      <button onClick={() => handleChoose("characters")}>Choose characters</button>

      {showModal && (
        <ModalChoose 
          dataChoose={dataChoose} 
          onClose={handleCloseModal} 
          onSelect={handleSelect} 
          selectedItems={getSelectedItems()} // Pass selected items to Modal
        />
      )}

      <div>
        <h3>Selected Data:</h3>
        <p>Categories: {data.listCate.join(", ")}</p>
        <p>Actors: {data.listActor.join(", ")}</p>
        <p>Characters: {data.listCharacter.join(", ")}</p>
      </div>
      <Todolist/> */}
      <Demo/>
    </>
  );
}

export default App;
