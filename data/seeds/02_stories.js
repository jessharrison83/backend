
exports.seed = function(knex, Promise) {
  return knex('stories').truncate()
    .then(function () {
      return knex('stories').insert([
        {
            title: 'Poverty Discriminates: The Social PreCOP',
            country: 'Kiribati',
            image: 'https://c1.staticflickr.com/4/3719/12644930893_b0dd6ec54e_b.jpg',
            description: `There are many reasons that people live in poverty. The one thing they all have in common is that no one chooses to be impoverished.
    
            Poverty discriminates.
            
            Some of the world's most poverty-stricken nations are in their predicament due to climate change.
            
            With rising sea levels and unstable climates for food cultivation, some countries receive more than their fair share of the impact of climate change, which can have devastating effects on people's quality of life. The people and peoples who have done the least to cause this crisis are already suffering its impacts first and worst.
            
            In 2014, P3 was invited to attend a United Nations affiliated climate change conference in Venezuela called the Social PreCOP. This conference saw 300 individuals from all backgrounds uniting to tackle the issue, including indigenous peoples, NGOs, social movements, and six P3 volunteers. It was the first PreCOP (that is, ministerial meeting before a UN climate conference) to involve civil society. `,
            user_id: 1
        },
        {
            title: `Founder's Story: Flying on a Bicycle`,
            country: 'Kiribati',
            image: 'https://c1.staticflickr.com/4/3719/12644930893_b0dd6ec54e_b.jpg',
            description: `During my medical elective, I embarked on a project to build houses for one of Costa Rica’s poorest regions. Having suffered through a severe flood, this region had no running water or electricity and most houses were constructed using corrugated iron and mud floors. I met a 9 year old girl whose family home we were rebuilding. She knew no English and I, no Spanish. So, from the moment we met, she sought to teach me Spanish. As our friendship grew, she took me on a bicycle ride, one that changed my life.
    
            As we were riding, she turned around with a smile of mischief, like she was going to show me something cool. She proceeded to take both her hands off the bike. I was impressed. Then she took both feet off the pedals and stood on the bicycle. I was very impressed, but also apprehensive about what might happen next. Indeed, she turned around and her expression said ‘aren’t you going to try?’ I hesitated but eventually took one hand off, then the next and I fell like a pack of cards. I will never forget her look of disbelief. She could not believe that someone from one of the richest countries in the world could not do something as simple as riding a bike with no hands!
            
            That is the day I realised that we all have our own talents but in essence, we are all the same. I realised that the world is unfair and that my life has been rich through no merit of my own, and her talents were limited through no fault of her own. She was merely born into circumstances that were unable to foster her talents.
            
            On my last day with her, I asked her in my Spanglish what she would like to do when she grows up. She replied – a teacher. I knew that she would be a brilliant teacher from the first day I met her. Then I realised that if I could help children like her fulfil their dreams, they would lift their own communities out of poverty. `,
            user_id: 1
        },
    
        {
            title: `Helping Madagascar`,
            country: 'Madagascar',
            image: 'https://pixnio.com/free-images/people/madagascar-people-working-725x485.jpg',
            description: `The mission of WildMadagascar.org is to raise awareness on Madagascar and provide an English-based educational resource for Malagasy people. 
    
            There are many worthy organizations working in Madagascar to help local people, promote sustainable development, and conserve wildlife and wildlands. If you would like to be involved in creating a brighter future for the Malagasy and their remarkable plants, animals, and ecosystems, take a look at some of these organizations. 
            
            Disclaimer: WildMadagascar.org does not solicit on behalf of any of these organizations. Nor does WildMadagascar.org have any affiliation with any of these groups.
            Azafady - Azafady works with communities in southeast Madagascar to alleviate poverty, improve well-being and protect its unique environments. Established in 1994.
            
            
            Centre ValBio - Madagascar's leading research and scientific training facility. Located in Ranomanfana National Park, Centre ValBio (Centre de Formation International pour la Valorisation de la Biodiversité - International Training Center for the Study of Biodiversity) is run by the Institute for the Conservation of Tropical Environments. The center was inaugurated in June 2003 and is now fully operational.
            
            
            Madagascar Wildlife Conservation - MWC aims to preserve biodiversity in key areas by promoting a long-term conservation process that integrates development, environmental education and research. MWC therefore pursues four general objectives: community empowerment, creating alternative revenue sources, environmental education, and research.
            
            
            Conservation through Poverty Alleviation International - CPALI works to identify, develop and implement new means of income generation for poor farmers living in areas of high conservation value including Madagascar. The organization shows farmers that the long-term economic value that can be gained from forests left standing is greater than the short-term gain from forests that are cut.
            `,
            user_id: 2
        },
    
        {
            title: `Ana's Story`,
            country: 'Peru',
            image: 'https://cdn.pixabay.com/photo/2017/09/22/09/42/peru-2774925_960_720.jpg',
            description: `I was born in Cusco, Peru and adopted while still a baby. During the summer of 2003, when I was 11 years old, my mother and I went back to Peru. I had collected teddy bears and Spanish children’s books to bring to the children at the orphanages that we planned to visit.
    
            The Hogar de Niñas near Anta is a small orphanage in the hills outside Cusco. It was not one of our scheduled orphanages to visit because it is so small and remote, but when I found out about it, I really wanted to go there since it is near where I was born. When we went to the hogar, I gave the children the books and teddy bears. They greatly appreciated the gifts, but our presence clearly had a larger impact than the items we brought with us. We soon learned that the orphanage had never had visitors before, and I imagined what it must be like to live as those girls did.'
                    
            During our visit, I got to know one of the girls there in particular; her name was Yenivel. As we left, she started to cry, hugged me, and said that she believed I would not forget about them. Between Yenivel’s words and the realization that I could have been in an orphanage like this one, I was inspired me to do something to help these girls. There were so many things in my life that I had been taking for granted; I was truly, incredibly lucky. I was blessed with a wonderful, loving family that always supported me, and I had amazing educational opportunities. I wanted these same advantages for the girls in Peru. They needed more than books and bears, and I believed that if I tried, I might be able to really help them.`,
            user_id: 3
        },
    
        {
            title: `Helping in the Hogares`,
            country: 'Peru',
            image: 'https://cdn.pixabay.com/photo/2017/09/22/09/42/peru-2774925_960_720.jpg',
            description: `Peruvian Hearts began its support for Hogar Mercedes in 2003.  It is home to approximately 15 school age girls and each girl comes from a chaotic situation with a disheartening past.  In 2003, the children at the hogar were hungry and malnourished, with extremely limited access to healthcare and education.  The Peruvian government used to provide a small monthly stipend for rice, flour, and a little milk, but even that was grossly inadequate to keep the girls in good health.  The girls were timid and lacked confidence.  Their clothing was tattered and worn and their skin was badly chapped from the cold and wind.
    
            Until the church began to provide consistent support to this hogar, Peruvian Hearts provided the girls with their daily needs in order to allow them to dream.  The Sisters who care for the hogar have created a loving and structured environment for the girls in which they can mature into healthy, young women.  Peruvian Hearts undertook major renovations and improvement projects to make the hogar a safer, more secure environment.  Some of these projects included: a clean water filtration system, solar panel water heaters, new bathrooms and showers, a modern kitchen, a new dining room, and new girls bedrooms including bunk beds and mattresses.
            
            Currently, Peruvian Hearts supports the Hogar Mercedes by sending groups of visitors who want to volunteer their time and skills to benefit the girls there.  We also provide in-kind donations to the hogar such as: children’s chewable multivitamins, girls’ clothing, books in Spanish, school supplies, and toiletries.`,
            user_id: 3
        }
    ]);
    });
};
