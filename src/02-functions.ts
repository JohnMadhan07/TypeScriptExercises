import { friends, colleagues } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

// function older(f: Friend): String{
// f.age+=1;
// return `${f.name} is now ${f.age}`
// }

function allOlder(fr: Friend[]): string[] {
  return fr.map((friend) => {
    friend.age += 1;
    return `${friend.name} is now ${friend.age}`;
  });
}
console.log(allOlder(friends));

function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(
  cs: Colleague[],
  csname: string,
  csdept: string,
  csemail: string
) {
  const highestExtension: number = Math.max(
    ...colleagues.current.map((c) => c.contact.extension),
    0
  );

  const newColleague: Colleague = {
    name: csname,
    department: csdept,
    contact: {
      email: csemail,
      extension: highestExtension + 1,
    },
  };
  cs.push(newColleague);
}

addColleague(colleagues.current, "Ann", "HR", "ann@here.com");
console.log(colleagues.current.filter((c) => c.name === "Ann"));
