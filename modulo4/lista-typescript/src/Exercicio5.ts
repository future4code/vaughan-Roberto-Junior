

const users: {}[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filterEmails = (arr: {}[]) => {
   return arr.filter((item: any): [] | boolean =>{
        return item.role === 'admin';
    }).map((item: any) => {
        return item.email;
    })
}

console.table(filterEmails(users));
