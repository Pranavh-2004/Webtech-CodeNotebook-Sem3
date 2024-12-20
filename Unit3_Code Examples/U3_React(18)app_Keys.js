//Function with keys without map
/*
function Stuff(){
  //const names=props.names;
  return(
  [ <p key="1"> Batman1</p>,
    <p key="2"> IronMan1</p>,
    <p key="3"> SpiderMan1</p>
  ])
}
const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <Stuff />
      );*/

//Function with map-Ex 1

/*function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((num) =>
        <li key={num.toString()}>{num*2}</li>
        );
        return (
        <ul>{listItems}</ul>
        );
      }

      const numbers = [1, 2, 3, 4, 5];
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <NumberList numbers={numbers} />
      );*/

//Function with map-Ex 2

function NameList(props) {
  const names = props.names;
  const listItems = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{listItems}</ul>;
}
const names = ["Batman1", "Ironman1", "Spiderman1"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NameList names={names} />);
