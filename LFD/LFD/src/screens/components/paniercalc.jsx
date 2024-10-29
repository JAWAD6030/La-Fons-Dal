
const panierInfo = []

const [counter, setCounter] = useState(0)


const handleClick = () => {

  setCounter(counter + 1)
  const total = prix * counter

panierInfo = [counter,total]
}
