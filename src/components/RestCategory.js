import ItemList from "./ItemList";

const RestCategory = ({ data,showItems,setShowIndex,dummy}) => {
    // controlled component 

//   console.log(data);
  const handleClick = () =>{
     setShowIndex();
  }
  return (
    <div>
      {/** header */}
      <div className="w-9/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems?"⬆️":"⬇️"}</span>
        </div>

        { showItems && <ItemList items={data.itemCards}  dummy={dummy} />}
      </div>
      {/** Accordian Body */}
    </div>
  );
};

export default RestCategory;
