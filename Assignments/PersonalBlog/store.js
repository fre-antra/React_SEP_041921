const sampleContent= {
    intro:[
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla soluta harum architecto tenetur vero optio ratione quo reprehenderit laudantium aut deleniti natus nihil, sit aspernatur! Corrupti tenetur veritatis est eveniet! </p>
        <p>Ducimus unde quibusdam molestiae blanditiis fugit repudiandae omnis, mollitia magnam nulla nostrum similique incidunt aut esse consectetur atque, suscipit quidem impedit perspiciatis sit ex eius aliquid. Commodi, natus. Molestiae, quidem.</p>
        <p>Aspernatur expedita dolorem itaque quidem sint impedit. Illum, molestias eius illo quo nostrum molestiae tenetur suscipit neque quia, quis ut maiores optio laborum voluptatum vitae quos maxime nemo dolor cupiditate.</p>`
    ],
    body:{
        bodyIntro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores harum molestias eius facere assumenda ea veritatis dolor, debitis voluptate sit quia, alias doloribus voluptates repellat rem excepturi tempore repudiandae? Quibusdam?',
        bodyMain:[
            {
                title:'Sub-heading',
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas sapiente. Nesciunt aut fugiat repellendus iusto adipisci fuga iure corrupti!',
            },
            {
                title:'Sub-heading',
                content:'Lorem(Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quas quasi quidem magnam consequuntur culpa sed enim magni perferendis maxime molestiae qui odit, cum delectus, distinctio ex voluptas? Enim a quidem tenetur suscipit repudiandae architecto veniam numquam maxime dolorum illo odit aspernatur reiciendis soluta distinctio eligendi, animi ex, placeat tempora perferendis at nemo quia harum. Dignissimos facilis libero voluptate nisi voluptas, necessitatibus magnam consequatur et incidunt vero dolorum est optio non consectetur ipsum inventore nesciunt at praesentium vel deleniti quidem fuga magni cupiditate aliquid. Ducimus, repellendus esse deleniti harum rem repudiandae aperiam totam dolor officiis ex ea enim fuga obcaecati ipsa similique a voluptate provident, beatae sequi explicabo laboriosam rerum modi hic. Voluptates harum illo inventore? Quidem praesentium laboriosam saepe animi harum eius autem, magnam reiciendis quaerat minus laudantium rerum aperiam vero excepturi, nulla consequatur voluptates quam quibusdam quasi deleniti ratione sit. Doloribus ea accusantium sit et voluptas ex praesentium perspiciatis quia eaque voluptatem maiores impedit, consequuntur aut officia veniam aperiam provident totam quo repudiandae commodi reiciendis voluptatibus accusamus sed. Assumenda quasi libero voluptate perferendis? Doloribus quasi sint in! Excepturi, laudantium? Ratione optio doloribus id animi, illum voluptas ducimus veniam enim itaque voluptate reprehenderit sed minima consectetur explicabo provident nesciunt velit nobis temporibus? Non libero voluptas sequi deleniti? Natus ipsum dolorum earum ab sint autem officia, fuga architecto aliquid fugiat at sunt consequatur asperiores deserunt nihil eos ullam, cum pariatur. Facilis aliquam, earum cumque ullam debitis provident in excepturi atque. Ipsam optio quibusdam amet veritatis est excepturi pariatur voluptatibus labore atque inventore tempora molestiae repudiandae, necessitatibus, illo a saepe ullam consequatur. Nesciunt hic facere mollitia odit ipsa modi molestiae expedita a quidem quisquam rem reiciendis, magnam soluta eius voluptas culpa eum, laborum quae dolores, minima voluptate dolor. Ea labore fugit, esse a quasi facere facilis quis accusamus odit eligendi placeat!',
            }
        ]
    }
}

const sampleAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit perferendis magni eveniet omnis voluptas laborum similique quos, molestias quas quisquam, quam porro earum debitis fugiat. Laudantium deleniti pariatur consectetur.'

const blogs= [
    {
        id: 1,
        userId:1,
        category:"Travel",
        title:'Shanghai',
        date: "Nov 12",
        summary: "This card represents an example blog post",
        content: sampleContent,
    },
    {
        id: 2,
        userId:1,
        category:"Travel",
        title:'Seoul',
        date: "Nov 12",
        summary: "This card represents an example blog post",
        content: sampleContent,
    },
    {
        id: 3,
        userId:1,
        category:"Travel",
        title:'Tokyo',
        date: "Nov 12",
        summary: "This card represents an example blog post",
        content: sampleContent,
    },
    {
        id: 4,
        userId:1,
        category:"Travel",
        title:'Saigon',
        date: "Nov 12",
        summary: "This card represents an example blog post",
        content: sampleContent,
    },
    {
        id: 5,
        userId:1,
        category:"Health",
        title:'Cardiology',
        date: "Nov 11",
        summary: "This is a sample post",
        content: sampleContent,
    },
    {
        id: 6,
        userId:1,
        category:"Health",
        title:'Eastern Medicine',
        date: "Nov 11",
        summary: "This is a sample post",
        content: sampleContent,
    },
    {
        id: 7,
        userId:1,
        category:"Health",
        title:'Healthy Lifestyle',
        date: "Nov 11",
        summary: "This is a sample post",
        content: sampleContent,
    },
];


const users= [
    {
        id:1,
        name:'Nguyen',
        about: sampleAbout,
        github:'github.com',
        twitter:'twitter.com',
        linkedin:'linkedin.com',
    },
    {
        id:2,
        name:'Wang',
        about: sampleAbout,
        github:'github.com',
        twitter:'twitter.com',
        linkedin:'linkedin.com',
    },
    {
        id:3,
        name:'Kim',
        about: sampleAbout,
        github:'github.com',
        twitter:'twitter.com',
        linkedin:'linkedin.com',
    },
    {
        id:4,
        name:'Kudo',
        about: sampleAbout,
        github:'github.com',
        twitter:'twitter.com',
        linkedin:'linkedin.com',
    },
];

const archives= [
    {
        code: 0421,
        display:'Apr 2021'
    },
    {
        code: 0321,
        display:'Mar 2021'
    },
    {
        code: 0221,
        display:'Feb 2021'
    },
    {
        code: 0121,
        display:'Jan 2021'
    },
    {
        code: 1220,
        display:'Dec 2020'
    },
    {
        code: 1120,
        display:'Nov 2020'
    },
    {
        code: 1020,
        display:'Oct 2020'
    },
    {
        code: 0920,
        display:'Sep 2020'
    },
    {
        code: 0820,
        display:'Aug 2020'
    },
    {
        code: 0720,
        display:'Jul 2020'
    },
    {
        code: 0620,
        display:'Jun 2020'
    },
]

