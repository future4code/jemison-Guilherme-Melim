
interface Competitor {
  name: string;
  federation: string;
  sport: string;
  numberOfMedals: number;
}

const competitors: Competitor[] = [
  {
    name: "Usain Bolt",
    federation: "Jamaica",
    sport: "Atletismo",
    numberOfMedals: 54,
  },
  {
    name: "Michael Phelps",
    federation: "EUA",
    sport: "Natação",
    numberOfMedals: 71,
  },
  {
    name: "Rebeca Andrade",
    federation: "Brasil",
    sport: "Ginástica",
    numberOfMedals: 33,
  },
  {
    name: "Alison Santos",
    federation: "Brasil",
    sport: "Atletismo",
    numberOfMedals: 19,
  },
];

// ideia inicial
// criar placar total com cada pais  => array vazio
// loop nos competidores e verificar se está no placar
// caso exista valor no placar, eu somo as medelhas
// se não, eu adiciono o pais no placar
// retorna o placar final

type MedalBoard = {
  federation: string;
  numberOfMedal: number;
};

const calculateMedalBoardWithArray = (
  competitors: Competitor[]
): MedalBoard[] => {
  const result: MedalBoard[] = [];

  for (let competitor of competitors) {
    const board = result.find((mb) => mb.federation === competitor.federation);
    if (board) {
      board.numberOfMedal += competitor.numberOfMedals;
    } else {
      const newMedalBoard: MedalBoard = {
        federation: competitor.federation,
        numberOfMedal: competitor.numberOfMedals,
      };
      result.push(newMedalBoard)
    }
  }

  return result;
};

console.table(calculateMedalBoardWithArray(competitors))


type HashBoard = {
  [key: string]: number
  // federation: medals
  // Brasil: 52
  // EUA: 72
}

const calculateMedalBoardWithHashTable = (
  competitors: Competitor[]
): HashBoard  => {
 const medalBoard: HashBoard = {}
  for(let competitor of competitors) {
      if(medalBoard[competitor.federation]) {
        medalBoard[competitor.federation] +=  competitor.numberOfMedals
      } else {
        medalBoard[competitor.federation] = competitor.numberOfMedals
      }
  }
  return medalBoard
 }

 console.table(calculateMedalBoardWithHashTable(competitors))
