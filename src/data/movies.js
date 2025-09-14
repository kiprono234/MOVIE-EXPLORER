const movies = [
    {
    
            id: 1,
            title: "Nairobi Half Life",
            poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiOz0zzfbkKj2w2i-7mV9kBKWAV3xX8dlzQs7tzcM_95SxDM46",
            trailer: "https://www.youtube.com/embed/nRjBLAnx2jU",
            watchLink: "https://youtu.be/TjlcgVbKD5Q?si=DCLHs4WQhxpRekI-", // Full movie link
            description: "A young man from rural Kenya moves to Nairobi to pursue his dream of becoming an actor, but quickly finds himself entangled in the city's underworld.",
            genre: ["Drama", "Crime"],
            year: 2012,
            actors: ["Joseph Wairimu", "Olwenya Maina"],
            rating: 8.4,
            category: ["Trending", "Top Rated"]
          
    },
    {
      id: 2,
      title: "Rafiki",
      poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJQke5V-XmPiR64rLiecreMENW56Q2I5s6hsZ_IDHi67I6wAILeHGXeZNxShjtAa425vvxGQ",
      description: "Two young women in Nairobi fall in love and must choose between happiness and safety in a society where their love is forbidden.",
      trailer: "https://youtu.be/TEl2lc-90T0?si=feOsREfqwulor3uL",
      watchLink: "https://youtu.be/p-lE-jGDbDQ?si=MmNL-IN_Tds9J451",
      genre: ["Drama", "Romance"],
      year: 2018,
      actors: ["Samantha Mugatsia", "Sheila Munyiva"],
      rating: 7.2,
      category: ["Trending", "Top Rated"]
    },
    {
      id: 3,
      title: "Disconnect",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzFL6Buw4h4QWookB5oxYpMC8eNx8S9zaCg&s",
      description: "A romantic comedy about love and friendship in modern Nairobi.",
      trailer: "https://youtu.be/9eNSewvbaoo?si=P3cuU1SgctUuaEbD",
      watchLink: "https://youtu.be/9eNSewvbaoo?si=P3cuU1SgctUuaEbD",
      genre: ["Comedy", "Romance"],
      year: 2018,
      actors: ["Brenda Wairimu", "Nick Mutuma"],
      rating: 6.9,
      category: ["Trending"]
    },
    {
      id: 4,
      title: "Sense8",
      poster: "https://s1.dmcdn.net/v/PVnez1e0NXeG0gjOP/x720",
      description: "Eight strangers from different cultures and parts of the world become mentally and emotionally linked.",
      genre: ["Drama", "Sci-Fi"],
      year: 2015,
      actors: ["Aml Ameen", "Doona Bae"],
      rating: 8.2,
      category: ["Trending", "Top Rated"]
    },

    {
        id: 10,
        title: "Rafiki",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJQke5V-XmPiR64rLiecreMENW56Q2I5s6hsZ_IDHi67I6wAILeHGXeZNxShjtAa425vvxGQ",
        description: "Two young women in Nairobi fall in love and must choose between happiness and safety in a society where their love is forbidden.",
        trailer: "https://youtu.be/TEl2lc-90T0?si=feOsREfqwulor3uL",
        watchLink: "https://youtu.be/p-lE-jGDbDQ?si=MmNL-IN_Tds9J451",
        genre: ["Drama", "Romance"],
        year: 2018,
        actors: ["Samantha Mugatsia", "Sheila Munyiva"],
        rating: 7.2,
        category: ["Trending", "Top Rated"]
    },
    {
      id: 5,
      title: "Deadly Honeymoon",
      poster: "https://is1-ssl.mzstatic.com/image/thumb/mQputw7RWyD0G0xiQPbm3A/1200x675.jpg",
      description: "A couple's honeymoon turns deadly while on a cruise.",
      genre: ["Thriller", "Drama"],
      year: 2010,
      actors: ["Summer Glau", "Chris Carmack"],
      rating: 5.4,
      category: ["Top Rated"]
    },
    {
      id: 6,
      title: "Watu Wote",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv0EXv_Yvy5olUMXw1nA-rbt-z8yHIH7eRaQPqprvr3H6Tm90",
      description: "True story of solidarity among strangers during a bus attack in Kenya.",
      genre: ["Drama", "Short"],
      year: 2017,
      actors: ["Adelyne Wairimu", "Abdi Teman"],
      rating: 7.4,
      category: ["New Release"]
    },
    {
      id: 7,
      title: "Click Click Bang",
      poster: "https://resizing.flixster.com/x2gUOasb7JP7maUU5ReC3bixpB0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25934617_b_h10_aa.jpg",
      description: "A story of a rapper navigating the challenges and violence in Nairobi.",
      genre: ["Drama", "Music"],
      year: 2022,
      actors: ["Jeff Kennedy Kinyua", "Brenda Wairimu"],
      rating: 7.1,
      category: ["New Release"]
    },
    {
      id: 8,
      title: "Supa Modo",
      poster: "https://resizing.flixster.com/YeIB2np_qK8Ry7vZJRmWtllZjfY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15251403_v_h8_ab.jpg",
      description: "A terminally ill girl dreams of becoming a superhero, inspiring her village to help her achieve her dream.",
      genre: ["Drama", "Family"],
      year: 2018,
      actors: ["Stycie Waweru", "Marrianne Nungo"],
      rating: 8.0,
      category: ["New Release"]
    },
    {
      id: 9,
      title: "MO-FAYA",
      poster: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSBicQb4faiGZYF5ayj_521D5Tz66AllXigKbodum6ATyIyd9MHv7uKq7j5rCXNCwHfKXS1qs8z8wTj4bQu-xXBq8YPnVm2FQw8.jpg?r=504",
      description: "A story of resilience and hope in Kenya.",
      genre: ["Drama", "Musical"],
      year: 2023,
      actors: ["Cast info unavailable"],
      rating: 7.0,
      category: ["New Release"]
    },
    

    {
      id: 11,
      title: "The First Grader",
      poster: "https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcOSuzrjdLufHvBKlYUrAVYvlfqOPEscaw65EkkmUJk4pLJm6uOqMnKOmtBX8zXs-CCZfiO0CWlHmJq1L7K8VCyuV626_p00G50U.jpg?r=0ba",
      description: "An 84-year-old Kenyan villager fights for his right to go to school for the first time.",
      genre: ["Drama", "Biography"],
      trailer: "https://youtu.be/TK3WtYYMCnA?si=bf4zp164OHM4e-9M",
        watchLink: "https://youtu.be/3aXhYHfX8kA?si=1b0mJ7b0bX4K8m8E",
      year: 2010,
      actors: ["Oliver Litondo", "Naomie Harris"],
      rating: 7.3,
      category: ["Top Rated"]
    },
    {
        id: 12,
        title: "Kati Kati",
        poster: "https://i.ytimg.com/vi/SggwlKuviGo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJVd7tdJ8XLoGcXNgOmWG-facLxA",
        description: "A family's struggle to survive in Kenya's slums.",
        watchLink: "https://youtu.be/SggwlKuviGo?si=Z4mXHjv2YH3b0b0F",
        trailer: "https://youtu.be/67FwlaXU8vU?si=cSWZgF-LRnT73jp2",
        genre: ["Drama", "Family"],
        year: 2016,
        actors: ["Nyokabi Gethaiga", "Mumbi Maina"],
        rating: 6.8,
        category: ["Top Rated"]
    },
    {
        id: 13,
        title: "Nairobi Half Life",
        poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiOz0zzfbkKj2w2i-7mV9kBKWAV3xX8dlzQs7tzcM_95SxDM46",
        description: "A young woman's journey through Kenya's slums.",
        genre: ["Drama", "Family"],
        year: 2018, 
        actors: ["Brenda Wairimu", "Lizz Njagah"],
        rating: 7.0,
        category: ["New Release"]
    },

    {
        id: 14,
        title: "Poacher",
        poster: "https://nairobiwire.com/wp-content/uploads/2020/10/ogola1.jpg",
        description: "A Kenyan park ranger battles poachers to protect endangered wildlife.",
        watchLink: "https://youtu.be/8X1mYc1n9rE?si=Zk3bYHjXoX4Jt2gD",
        trailer: "https://youtu.be/4-XTzxbdt-Q?si=FVFqwyy39Ha0avgY",
        genre: ["Action", "Drama"],
        year: 2018,
        actors: ["Brian Ogola", "Mungai Mbaya"],
        rating: 6.5,
        category: ["New Release"]
    },
    {
        id: 15,
        title: "Sincerely Daisy",
        poster: "https://i.ytimg.com/vi/r13sbJKKmn4/hqdefault.jpg",
        description: "A romantic drama about a young woman's journey through Kenya's slums.",
        genre: ["Romance", "Drama"],
        year: 2020,
        actors: ["Ella Maina", "Nick Mutuma"],
        rating: 6.3,
        category: ["New Release"]
    },
    {
        id: 16,
        title: "The Cut",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNm8S8nT7OIcen-Q5MLCFBdg3FIFrmqUzUOQ&s",
        description: "A Kenyan detective investigates a series of murders in Nairobi.",
        genre: ["Thriller", "Crime"],
        year: 2017,
        actors: ["Lizz Njagah", "Robert Burale"],
        rating: 6.7,
        category: ["Top Rated"]

    },
    {
        id: 17,
        title: "The Letter",
        poster: "https://i0.wp.com/africans-in-america.com/wp-content/uploads/2022/02/ad166-the-letter-2.jpg?resize=845%2C450&ssl=1",
        description: "A Kenyan detective investigates a series of murders in Nairobi.",
        genre: ["Drama", "Romance"],
        year: 2019,
        actors: ["Fiona Gichuru", "Brian Ogola"],
        rating: 6.9,
        category: ["Top Rated"]
    },
    
    {
        id: 18,
        title: "The Black Panther",
        poster: "https://cdn.standardmedia.co.ke/images/wysiwyg/images/TYXOeHDCp0a55BEtydYwXaylMIZYM5asSdjpxoN3.jpg",
        description: "A Kenyan detective investigates a series of murders in Nairobi.",
        genre: ["Action", "Drama"],
        year: 2021,
        actors: ["Lizz Njagah", "Robert Burale"],
        rating: 7.1,
        category: ["New Release"]
        
    },
    {
        id: 19,
        title: "The Captain of Nakara",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/ce/The_Captain_of_Nakara_poster.jpg",
        description: "A Kenyan detective investigates a series of murders in Nairobi.",
        trailer: "https://youtu.be/dfeqE3vQkdw?si=XGlhZnBjii2sfViR",
        watchLink: "https://youtu.be/8X1mYc1n9rE?si=Zk3bYHjXoX4Jt2gD",
        genre: ["Comedy", "Drama"],
        year: 2012,
        actors: ["Joseph Wairimu", "Olwenya Maina"],
        rating: 7.0,
        category: ["Top Rated"]
    },
    {
        id: 20,
        title: "Kona",
        poster: "https://cdn.multichoicestudios.com/attachments/79u/eju/215/79ueju215bm2ct66evbz12u0f.jpg",
        description: "A Kenyan detective investigates a series of murders in Nairobi.",
        genre: ["Drama", "Mystery"],
        year: 2013,
        actors: ["Brenda Wairimu", "Lizz Njagah"],
        rating: 6.8,
        category: ["Top Rated"]
    }   
    ,
    {
        id: 21,
        title: 'volume',
        poster: 'https://nnmedia.nation.africa/uploads/2023/12/Cover-2023-12-20T142944.360.png',
        description: 'A Kenyan detective investigates a series of murders in Nairobi.',
        genre: ['Drama', 'Mystery'],
        year: 2018,
        actors: ['Brenda Wairimu', 'Lizz Njagah'],
        rating: 6.8,
        category: ['New Release']
    },
    {
        id: 22,
        title: 'Just in Time',
        poster: 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRR0CO23-mUHBM3-Q7XFAb3kgxL8x5WnrbO9rDaoKYr_9hy2EUpnsY_7lCyNCqCitb234JNzcUUb1bIOLi2dWp4KHNSwowCMy6w.jpg?r=c23',
        description: 'A Kenyan detective investigates a series of murders in Nairobi.',
        genre: ['Drama', 'Romance'],
        year: 2014,
        actors: ['Brenda Wairimu', 'Lizz Njagah'],
        rating: 6.5,
        category: ['Top Rated']
    },
    {
        id: 23,
        title: 'Lies that Bind',
        poster: 'https://msanii2009.wordpress.com/wp-content/uploads/2012/02/lies-that-bind1.jpg',
        description: 'A Kenyan detective investigates a series of murders in Nairobi.',
        genre: ['Drama', 'Romance'],
        year: 2011,
        actors: ['Brenda Wairimu', 'Lizz Njagah'],
        rating: 6.5,
        category: ['Top Rated']
    },
    {
        id: 24,
        title: '',
        poster: 'https://cdn.multichoicestudios.com/attachments/79u/eju/215/79ueju215bm2ct66evbz12u0f.jpg',
        description: 'A Kenyan detective investigates a series of murders in Nairobi.',
        genre: ['Drama', 'Mystery'],
    }
    
  ];
  
  export default movies;