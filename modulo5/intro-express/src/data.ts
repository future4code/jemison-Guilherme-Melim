// Criei a base de posts dos usuarios fora do Array dos usuarios, assim o código fica mais limpo
// e fica mais facíl de chamar, dando mais informações.

type Usuario = {
    id:number,
    nome:string,
    telefone:number,
    website:string,
    email:string
}

type PostsUser = {
   userId:number,
   id:number,
   title:string,
   body:string
}

export const user: Usuario[] =
[
    {
      id: 1,
      nome: "Leanne Graham",
      telefone: 1-770-736-8031 -56442,
      website: "hildegard.org",
      email: "Sincero@april.biz",
    },
    {
      id: 2,
      nome: "Ervin Howell",
      telefone: 692-65939125,
      website: "anastasia.net",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      nome: "Clementine Bauch",
      telefone: 1-463-123-4447,
      website: "ramiro.info",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      nome: "Patrícia Lebsack",
      telefone: 493-170-9623-156,
      website: "kale.biz",
      email: "Julianne.OConner@kory.org"
    },
    {
      id: 5,
      nome: "Chelsey Dietrich",
      telefone: 254-954-1289,
      website: "demarco.info",
      email: "Lucio_Hettinger@annie.ca"
    },
  ]

 export const postDosUsuarios: PostsUser[] =
  [
        {
         userId: 1,
         id: 1,
         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
         userId: 1,
         id: 2,
         title: "qui est esse",
         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
         userId: 1,
         id: 3,
         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
         userId: 2,
         id: 4,
         title: "in quibusdam tempore odit est dolorem",
         body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
         userId: 2,
         id: 5,
         title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
         body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
        },
        {
         userId: 2,
         id: 6,
         title: "fugit voluptas sed molestias voluptatem provident",
         body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
        },
        {
          userId: 3,
          id: 7,
          title: "autem hic labore sunt dolores incidunt",
          body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
        },
        {
         userId: 3,
         id: 8,
         title: "rem alias distinctio quo quis",
         body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
        },
        {
         userId: 3,
         id: 9,
         title: "est et quae odit qui non",
         body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
        },
        {
          userId: 4,
          id: 10,
          title: "explicabo et eos deleniti nostrum ab id repellendus",
          body: "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
        },
        {
         userId: 4,
         id: 11,
         title: "fuga nam accusamus voluptas reiciendis itaque",
         body: "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
        },
        {
         userId: 4,
         id: 12,
         title: "provident vel ut sit ratione est",
         body: "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
        },       
        {          
          userId: 5,
          id: 13,
          title: "ut numquam possimus omnis eius suscipit laudantium iure",
          body: "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
        },
        {
         userId: 5,
         id: 14,
         title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
         body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
        },
        {
         userId: 5,
         id: 15,
         title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
         body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
        },
  ]