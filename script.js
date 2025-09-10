var arr = [
    {
        user: 'Salmon',
        age: 60,
        skills: ['driving', 'hunting', 'fighting'],
        spouse:{
            user:'kat',
            skills:['dancer', 'slice ad']
        },
        dialouge: ()=> {
            return 'swagat nahi karoge humara'
        }
    },
     {
        user: 'Sharukh',
        age: 60,
        skills: ['movies', 'songs', 'buisness', 'kkr management'],
        spouse:{
            user:'gauri',
            skills:['housewife']
        },
        dialouge: ()=> {
            return 'kkkkkkkkkkkk kiran'
        }
    },
     {
        user: 'virat',
        age: 60,
        skills: ['medeling', 'coverdrive', 'comedy', 'dancing', 'chhole bhature'],
        spouse:{
            user:'anushka',
            skills:['modeling', 'bhakti', 'acting']
        },
        dialouge: ()=> {
            return 'benstrokes'
        }
    },

]

arr.forEach(function(e, i){
    /* var length = e.skills.length-1 */
    console.log('user skill: ', e.skills[e.skills.length-1])
    console.log('dialouge: ', e.dialouge())
    console.log('spouse skill: ', e.spouse.skills[0])
    console.log('==============================')
});
