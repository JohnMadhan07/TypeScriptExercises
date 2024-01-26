import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, EmailContact } from "./myTypes";

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

//----------------------------------------------------------------
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));
//---------------------------------------------------------------

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

//------------------------------------------------------------------
function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return result;
}

console.log(
  sortColleagues(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)
);
//--------------------------------------------------------------------------
function findFriends(
  friend: Friend[],
  sorter: (f: Friend) => boolean
): string[] {
  const sorted = friend.filter((f) => sorter(f));
  const result: string[] = sorted.map((fr) => fr.name);
  return result;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith("Pa")));
console.log(findFriends(friends, (friend) => friend.age < 35));
