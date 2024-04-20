const sum = (a: number, b: number) => a + b;

console.log(sum(1,2));

// GENERICS 
function dummy1<T>(a:T){
    return a
}

function dummy3<T>(a:T):T[]{
    return [a]
}

console.log(dummy1<number>(2));
console.log(dummy1<string>("khan"));
console.log(dummy3<string>("khan"));

//PICK

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
//   }
  
//   // For a profile display, only pick `name` and `email`
//   type UserProfile = Pick<User, 'name' | 'email'>;
  
//   const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
//   };

//   displayUserProfile({name:'khan',email:'khan333'});


  //PARTIAL

//   interface User {
//      id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database tp update the user
// }
// updateUser({})
  

// READONLY

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
//   config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


// RECORD

interface User {
    id: string;
    name: string;
  }
  
  type Users = { [key: string]: User };
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };

  // or use record
  const users1: Record<string,User> = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };


  // or use Map

  interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

  // Exclude

type DummyMouseEvent = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<DummyMouseEvent, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// handleEvent('scroll'); // NOT OK