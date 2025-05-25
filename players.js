const players = [
    {
        firstName: 'Aaron',
        lastName: 'Judge',
        position: 'RF',
        age: 33,
        photo: 'imgs/judge.png',
        funFact: 'Holds the American League record for most home runs in a season with 62.'
    },
    {
        firstName: 'Cody',
        lastName: 'Bellinger',
        position: '1B',
        age: 29,
        photo: 'imgs/bellinger.png',
        funFact: 'Won both Rookie of the Year and MVP awards in his first three seasons.'
    },
    {
        firstName: 'Jasson',
        lastName: 'Dominnguez',
        position: 'LF',
        age: 22,
        photo: 'imgs/jasond.png',
        funFact: 'Nicknamed "The Martian" because of his otherworldly athletic abilities.'
    },
    {
        firstName: 'Trent',
        lastName: 'Grisham',
        position: 'CF',
        age: 28,
        photo: 'imgs/grisham.png',
        funFact: 'Known for his exceptional defensive skills and has won multiple Gold Glove awards.'
    },
    {
        firstName: 'Anthony',
        lastName: 'Volpe',
        position: 'SS',
        age: 24,
        photo: 'imgs/volpe.png',
        funFact: 'Grew up as a Yankees fan in New Jersey before being drafted by the team.'
    },
     {
        firstName: 'Jorbit',
        lastName: 'Vivas',
        position: '2B',
        age: 24,
        photo: 'imgs/vivas.png',
        funFact: 'Has one of the highest contact rates in the minor leagues.'
    },
    {
        firstName: 'Ben',
        lastName: 'Rice',
        position: 'DH',
        age: 26,
        photo: 'imgs/rice.png',
        funFact: 'Won the Ivy League Player of the Year at Yale before turning pro.'
    },
    {
        firstName: 'Pablo',
        lastName: 'Reyes',
        position: 'SS',
        age: 31,
        photo: 'imgs/reyes.png',
        funFact: 'Can play seven different positions on the field.'
    },
    {
        firstName: 'Oswald',
        lastName: 'Peraza',
        position: '2B',
        age: 24,
        photo: 'imgs/peraza.png',
        funFact: 'Known for his slick fielding and strong throwing arm.'
    },
     {
        firstName: 'DJ',
        lastName: 'LeMahieu',
        position: '1B',
        age: 36,
        photo: 'imgs/dj.png',
        funFact: 'Has won batting titles in both the American and National Leagues.'
    },
    {
        firstName: 'Paul',
        lastName: 'Goldschmidt',
        position: '1B',
        age: 37,
        photo: 'imgs/goldshmidt.png',
        funFact: 'Seven-time All-Star who has won four Gold Glove awards.'
    },
    {
        firstName: 'Jazz',
        lastName: 'Chisholm Jr.',
        position: '2B',
        age: 27,
        photo: 'imgs/jazz.png',
        funFact: 'Named after his father\'s love for jazz music.'
    },
    {
        firstName: 'Oswaldo',
        lastName: 'Cabrera',
        position: '3B',
        age: 26,
        photo: 'imgs/cabrera.png',
        funFact: 'Switch-hitter who can play both infield and outfield positions.'
    },
     {
        firstName: 'Austin',
        lastName: 'Wells',
        position: 'C',
        age: 25,
        photo: 'imgs/wells.png',
        funFact: 'Son of former MLB player Vernon Wells.'
    },
    {
        firstName: 'J.C.',
        lastName: 'Escarra',
        position: 'C',
        age: 30,
        photo: 'imgs/escarra.png',
        funFact: 'Can speak three different languages fluently.'
    },
    {
        firstName: 'Ryan',
        lastName: 'Yarbrough',
        position: 'RP',
        age: 33,
        photo: 'imgs/yarbrough.png',
        funFact: 'Master of the "bulk reliever" role, often following openers.'
    },
    {
        firstName: 'Devin',
        lastName: 'Williams',
        position: 'RP',
        age: 30,
        photo: 'imgs/williams.png',
        funFact: 'Known for his "airbender" changeup that seems to defy physics.'
    },
     {
        firstName: 'Luke',
        lastName: 'Weaver',
        position: 'RP',
        age: 31,
        photo: 'imgs/weaver.png',
        funFact: 'Has a degree in criminology and originally wanted to become an FBI agent.'
    },
    {
        firstName: 'Will',
        lastName: 'Warren',
        position: 'P',
        age: 25,
        photo: 'imgs/warren.png',
        funFact: 'Developed a devastating splitter that became his signature pitch.'
    },
    {
        firstName: 'Marcus',
        lastName: 'Stroman',
        position: 'P',
        age: 34,
        photo: 'imgs/stroman.png',
        funFact: 'Founder of the HDMH (Height Doesn\'t Measure Heart) apparel brand.'
    },
    {
        firstName: 'Clarke',
        lastName: 'Schmidt',
        position: 'P',
        age: 29,
        photo: 'imgs/clarke.png',
        funFact: 'Overcame Tommy John surgery early in his career to become a top pitcher.'
    },
     {
        firstName: 'Carlos',
        lastName: 'Rodon',
        position: 'P',
        age: 32,
        photo: 'imgs/rodon.png',
        funFact: 'Threw a no-hitter in April 2021, missing a perfect game by hitting a batter in the 9th inning.'
    },
    {
        firstName: 'Mark',
        lastName: 'Leiter Jr.',
        position: 'P',
        age: 34,
        photo: 'imgs/leiter.png',
        funFact: 'Comes from a three-generation baseball family, with his father and uncle both being MLB pitchers.'
    },
    {
        firstName: 'Tim',
        lastName: 'Hill',
        position: 'P',
        age: 35,
        photo: 'imgs/hill.png',
        funFact: 'Has an unusual submarine pitching style that creates difficult angles for batters.'
    },
    {
        firstName: 'Ian',
        lastName: 'Hamilton',
        position: 'P',
        age: 29,
        photo: 'imgs/hamilton.png',
        funFact: 'Developed a new pitch delivery after studying slow-motion video of other pitchers.'
    },
     {
        firstName: 'Max',
        lastName: 'Fried',
        position: 'P',
        age: 31,
        photo: 'imgs/fried.png',
        funFact: 'Named after legendary NBA player and Lakers fan, Magic Johnson.'
    },
    {
        firstName: 'Fernado',
        lastName: 'Cruz',
        position: 'P',
        age: 35,
        photo: 'imgs/cruz.png',
        funFact: 'Can throw with both arms, though he primarily uses his right.'
    },
    {
        firstName: 'Giancarlo',
        lastName: 'Stanton',
        position: 'DH',
        age: 35,
        photo: 'imgs/stanton.png',
        funFact: 'Has hit some of the hardest home runs ever recorded, with exit velocities over 120 mph.'
    },
    {
        firstName: 'Gerrit',
        lastName: 'Cole',
        position: 'SP',
        age: 34,
        photo: 'imgs/cole.png',
        funFact: 'Collected baseball cards as a child and still maintains his collection today.'
    },
    {
        firstName: 'Luis',
        lastName: 'Gil',
        position: 'SP',
        age: 26,
        photo: 'imgs/gil.png',
        funFact: 'Set a Yankees record for most scoreless innings to start a career.'
    },
]