import React, { useState } from "react";
import DragItem from "./DragAndDrop/DragItem";
import DropArea from "./DragAndDrop/DropArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "../Navbar/Navbar";
import "./Problems.css";

const Problems = () => {
  const items = [
    {
      id: 1,
      text: "Modus Ponens",
      correctIndex: 0,
    },
    {
      id: 2,
      text: "Modus Tollens",
      correctIndex: 1,
    },
    {
      id: 3,
      text: "Disjunctive Syllogism",
      correctIndex: 2,
    },
  ];

  const [dropData, setDropData] = useState({});
  const [clear, setClear] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    let correct = true;
    Object.entries(dropData).forEach(([index, item]) => {
      if (item !== items[index].correctIndex) {
        correct = false;
      }
    });
  
    if (correct) {
      setMessage("Correct! All answers match their respective hypotheses.");
    } else {
      setMessage(
        "Incorrect. Some answers do not match their respective hypotheses."
      );
    }
  };
  
  const handleClear = () => {
    setClear(!clear);
    setDropData({});
  };

  return (
    <div className="Problems">
      <Navbar />
      <DndProvider backend={HTML5Backend}>
        <div className="problem-section">
          <table className="drop-table">
            <tbody>
              <tr>
                <td className="problem-text">
                  P → Q<br />
                  P<br />∴ Q
                </td>
                <td>
                  <DropArea
                    index={0}
                    setDropData={setDropData}
                    dropData={dropData}
                    clear={clear}
                  />
                </td>
              </tr>
              <tr>
                <td className="problem-text">
                  P → Q<br />
                  ~Q
                  <br />∴ ~P
                </td>
                <td>
                  <DropArea
                    index={1}
                    setDropData={setDropData}
                    dropData={dropData}
                    clear={clear}
                  />
                </td>
              </tr>
              <tr>
                <td className="problem-text">
                  P ∨ Q<br />
                  ~P
                  <br />∴ Q
                </td>
                <td>
                  <DropArea
                    index={2}
                    setDropData={setDropData}
                    dropData={dropData}
                    clear={clear}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-container">
            <button className="check-button" onClick={handleCheck}>
              Check
            </button>
            <button className="clear-button" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="drag-container">
            <div className="drag-item-container">
              {items.map((item) => (
                <DragItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </DndProvider>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Problems;
