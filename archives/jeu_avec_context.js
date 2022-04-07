import React, {useState, useContext} from 'react';
import '../App.scss';
import { useDrag, useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import {AuthContextJeu} from '../context/AuthContextJeu.js';

let estDraggable = [];

function Bateau({bateauID,nombreCase,bateauImg,bateauImgDet}) {
  let outRef;
  bateauImg = `url(${process.env.PUBLIC_URL + bateauImg})`;

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "BATEAU",
      item: {bateauID,nombreCase,bateauImg,bateauImgDet},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,  //état des objets quand ils sont déplacés
  
      })
    }),
    []
  )

  if(!estDraggable[bateauID]){
    outRef = dragRef;
  }else{
    outRef =  null;
  }
  
  return (
    <tr>
       <td colSpan={nombreCase} ref={outRef} style={{opacity, backgroundImage:bateauImg}} className={"Bateau"} onDragEnd={null}> </td>
    </tr>
  )
}

function Flotte({listeBateaux}) {
  let mesBateaux = [];
  listeBateaux.forEach(element => {
    let monBateau = <Bateau key={element.bateauID} bateauID={element.bateauID} nombreCase={element.nombreCase} bateauImg={element.bateauImg} bateauImgDet={element.bateauImgDet} />;
    mesBateaux.push(monBateau);
  });
 
  return (
   <>
     {mesBateaux}
   </>
  );
}

function Square({position,onDrop,nombreCase,bateauImg,stateBateau,lieuBateau,bordure,bordureBateau}) {

  const [mesClasses, setClasses] = useState("Square");
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "BATEAU",
      drop: (item) => onDrop(position, item,stateBateau,lieuBateau,bordureBateau),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })

    }),[stateBateau])

  return (
    /* <td colSpan={nombreCase} className={mesClasses} onClick={()=> setClasses("Square essai")} style={{backgroundImage: isOver ? "url(./images/ondrop.jpg)" : bateauImg}} ref={drop}></td> */
    <td colSpan={nombreCase} className={mesClasses} onClick={()=> setClasses("Square")} style={{borderStyle:bordure, backgroundImage: isOver ? "url(./images/ondrop.jpg)" : bateauImg}} ref={drop}>

    </td>

  );
}

const size = 10;

function MonBoard() {
  const [ stateBateaux, setCouleurs ] = useState(Array(size*size).fill(null));
  const [ lieuBateaux, setLieu ] = useState(Array(size*size).fill(null));
  const [ bordureBateaux, setBordure ] = useState(Array(size*size).fill("1px solid rgb(71, 71, 133)"));
  const [authJeu, setAuthJeu] = useContext(AuthContextJeu);
    
  const DropItem = (position,item,stateBateau,lieuBateau,bordureBateau) => {
    let newState = stateBateau.slice(0);
    let newLieu = lieuBateau;
    let newBordure = bordureBateau;
    let choixBateau = false;
    
    if((position % 10) === 0){
      choixBateau = (((position + item.nombreCase) % 10) > item.nombreCase-1);
    }else{
      choixBateau = (((position + item.nombreCase -1) % 10) >= item.nombreCase);
    }

    switch(item.bateauID) {
      case 1:
        choixBateau = choixBateau && !newState[position] && !newState[position+1] && !newState[position+2] && !newState[position+3] && !newState[position+4];
        break;
      case 2:
        choixBateau = choixBateau && !newState[position] && !newState[position+1] && !newState[position+2] && !newState[position+3];
        break;
      case 3:
        choixBateau = choixBateau && !newState[position] && !newState[position+1] && !newState[position+2];
        break;
      case 4:
        choixBateau = choixBateau && !newState[position] && !newState[position+1] && !newState[position+2];
        break;
      case 5:
        choixBateau = choixBateau && !newState[position] && !newState[position+1];
        break;
      default:
        choixBateau = false;
    }

    if(choixBateau){
      for (let k = position; k < position + item.nombreCase; k++) {
        newState[k] = `url(${process.env.PUBLIC_URL + item.bateauImgDet[k - position]})`;
        newBordure[k] = "none";
        
      }
      newLieu[position] = item.nombreCase;
      estDraggable[item.bateauID] = true;
    }
    // console.log(item);
    console.log(newState); 
   /* console.log(newLieu); */
   // console.log(newBordure);
    setCouleurs(newState);
    setLieu(newLieu);
    setBordure(newBordure);
    setAuthJeu(newState);
  }

  let arraySquare = [];
  let arrayEntete = [];
  let entete = [];
  const colonne = ["A","B","C","D","E","F","G","H","I","J"];
  let id = 0;
  
  for (let y = 0; y <= size; y++) {
    if(y === 0) y = "";
    entete.push(<th key={y+1000} className="Bateau"> {y} </th>)
  }
  arrayEntete.push(<thead className="thead" key={1000}><tr>{entete}</tr></thead>);

    for (let y = 0; y < size; y++) {
      let ligneSquare = [];
      for (let x = 0; x < size; x++) {
        id = x+(y*size);
        
        ligneSquare.push( <Square key={id} position={id} 
          onDrop={ DropItem} bateauImg={stateBateaux[id]} stateBateau={stateBateaux} lieuBateau={lieuBateaux} bordureBateau={bordureBateaux} bordure={bordureBateaux[id]} />);        
      }

      const row = (<tr key={y+1002}><td key={y+1001} className="Bateau period-column">{colonne[y]}</td>{ligneSquare}</tr>);
      arraySquare.push(row);
  } 

  return (
    <table>
      {arrayEntete}
      <tbody>
        {arraySquare}
      </tbody>
    </table>

  )
}


export default function App()  {
  
  const [flotte, setBateaux] = useState([
    {bateauID:1, nombreCase:5, bordure:"none", bateauImg:"./images/porteavion.jpg", bateauImgDet:["./images/porteavion1.jpg","./images/porteavion2.jpg","./images/porteavion3.jpg","./images/porteavion4.jpg","./images/porteavion5.jpg"]},
    {bateauID:2, nombreCase:4, bordure:"none", bateauImg:"./images/croiseur.jpg", bateauImgDet:["./images/croiseur1.jpg","./images/croiseur2.jpg","./images/croiseur3.jpg","./images/croiseur4.jpg"]},
    {bateauID:3, nombreCase:3, bordure:"none", bateauImg:"./images/sousmarin.jpg", bateauImgDet:["./images/sousmarin1.jpg","./images/sousmarin2.jpg","./images/sousmarin3.jpg"]},
    {bateauID:4, nombreCase:3, bordure:"none", bateauImg:"./images/sousmarin.jpg", bateauImgDet:["./images/sousmarin1.jpg","./images/sousmarin2.jpg","./images/sousmarin3.jpg"]},
    {bateauID:5, nombreCase:2, bordure:"none", bateauImg:"./images/torpilleur.jpg", bateauImgDet:["./images/torpilleur1.jpg","./images/torpilleur2.jpg"]}
  ]);
  
  return(
    <div className="container-fluid content-center table-responsive">
        <DndProvider backend={HTML5Backend}>
            <div className="row">
                 {/* <div className="col-xl-5 d-flex">  */}
                    <div className="card">
                        <div className="card-body">
                            <table className="Peintures">
                                <thead className="thead">
                                    <tr>
                                        <th className={"Bateau"}>B</th>
                                        <th className={"Bateau"}>A</th>
                                        <th className={"Bateau"}>T</th>
                                        <th className={"Bateau"}>E</th>
                                        <th className={"Bateau"}>A</th>
                                        <th className={"Bateau"}>U</th>
                                        <th className={"Bateau"}>X</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Flotte listeBateaux={flotte}/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <br/>
            <div className="Board row"> 
                <MonBoard />
            </div>    
        </DndProvider>
        
    </div>
  );
}
