interface User {
    id: string;
    name: string;
    age: number;
    email: number;
    password: string;
};


type UpdateProps = Pick<User,'name' | 'age' |'email'>
function updateUser(updateProps: UpdateProps) {

}