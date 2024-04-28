import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class news extends Component {
  articles = [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "T20 World Cup 2024 Team Announcement Live: Rohit Sharma To Meet BCCI Selectors In Delhi - NDTV Sports",
      "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
      "url": "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL3QyMC13b3JsZC1jdXAtMjAyNC90MjAtd29ybGQtY3VwLTIwMjQtaW5kaWEtdGVhbS1hbm5vdW5jZW1lbnQtaWNjLWJjY2ktd2Mtc3F1YWQtdG8tYmUtZGVjbGFyZWQtNTUzMTU2NNIBhAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS90MjAtd29ybGQtY3VwLTIwMjQvdDIwLXdvcmxkLWN1cC0yMDI0LWluZGlhLXRlYW0tYW5ub3VuY2VtZW50LWljYy1iY2NpLXdjLXNxdWFkLXRvLWJlLWRlY2xhcmVkLTU1MzE1NjQvYW1wLzE",
      "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
      "publishedAt": "2024-04-27T06:35:57Z",
      "content": null
    },
    {
      "source": {
        "id": "the-hindu",
        "name": "The Hindu"
      },
      "author": "The Hindu",
      "title": "Apple in talks with OpenAI over generative AI features in iPhones - The Hindu",
      "description": "Last month, reports emerged that Apple was in discussions to license Google’s Gemini chatbot for its new iPhone. However, Apple has reportedly remained undecided on its choice of partners, leaving room for possibility of agreements with both OpenAI and Google, or even opting for an alternative provider.",
      "url": "https://www.thehindu.com/sci-tech/technology/apple-in-talks-with-openai-over-generative-ai-features-in-iphones/article68113218.ece",
      "urlToImage": "https://th-i.thgim.com/public/sci-tech/technology/6gbf66/article68054089.ece/alternates/LANDSCAPE_1200/2024-03-21T155636Z_1755977913_RC2EQ6AI7VVD_RTRMADP_3_TECH-ANTITRUST-APPLE-ACTIONS.JPG",
      "publishedAt": "2024-04-27T05:34:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "The Medicine Box | Rapid Fire With Pediatricians On Kids' Health | CNBC TV18 - CNBC-TV18",
      "description": "- Not talking to their parents- Staying in their rooms- Not eating well- Not talking about their friends, activitiesThese are some of the red flags indicatin...",
      "url": "https://www.youtube.com/watch?v=Z6z9J0n7QCs",
      "urlToImage": "https://i.ytimg.com/vi/Z6z9J0n7QCs/maxresdefault.jpg",
      "publishedAt": "2024-04-27T05:33:34Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Karishma Pranav Bhavsar",
      "title": "Red alert for heatwave issued in Bengal, Odisha and THESE states. Check IMD's full weather forecast for today here - Mint",
      "description": "IMD has predicted severe heatwave conditions in various parts of India till April 30, with temperatures expected to exceed 40 degrees Celsius.",
      "url": "https://www.livemint.com/news/red-alert-for-heatwave-issued-in-bengal-odisha-and-these-states-check-imds-full-weather-forecast-for-today-here-11714178466514.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/27/1600x900/The-forecast-released-by-the-IMD-in-Chandigarh-on-_1683795681092_1714179852385.jpg",
      "publishedAt": "2024-04-27T05:30:09Z",
      "content": "The India Meteorological Department (IMD) has issued a severe heatwave alert over the country's East and south Peninsular areas till April 30.  Heat Wave to severe heatwave conditions very likely to … [+2847 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "ET HealthWorld",
      "title": "WHO says bird flu risk currently low, asks countries to remain vigilant - ETHealthWorld",
      "description": "The UN-agency said countries should implement infection control measures and procedures to reduce human exposure to birds and mammals potentially infected with bird flu or other animal influenza viruses.",
      "url": "https://health.economictimes.indiatimes.com/news/industry/who-says-bird-flu-risk-currently-low-asks-countries-to-remain-vigilant/109640604",
      "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-109640604,imgsize-48042,width-1200,height=765,overlay-ethealth/industry/who-says-bird-flu-risk-currently-low-asks-countries-to-remain-vigilant.jpg",
      "publishedAt": "2024-04-27T05:17:12Z",
      "content": "London: The current overall public health risk posed by the H5N1 bird flu virus is low, the World Health Organisation said on Friday, but urged countries to stay alert for cases of animal-to-human tr… [+998 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "2 Paramilitary Soldiers Killed In Insurgent Attack In Manipur - NDTV",
      "description": "One CRPF personnel was killed and three others were injured in a suspected insurgent attack early in the morning today in Manipur's Bishnupur district.",
      "url": "https://www.ndtv.com/india-news/security-force-personnel-killed-3-injured-in-manipur-attack-5533307",
      "urlToImage": "https://c.ndtvimg.com/2024-02/en8ef9g8_naranseina-irb_625x300_23_February_24.jpeg",
      "publishedAt": "2024-04-27T04:40:00Z",
      "content": "New Delhi: Two CRPF personnel were killed and two others were injured in a suspected insurgent attack early in the morning today in Manipur's Bishnupur district. According to sources, a group of susp… [+2311 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Shobhit Gupta",
      "title": "‘Arrest Mamata, declare TMC a terror outfit’, demands BJP leader after CBI searches at premises of Sandeshkhali accused - Hindustan Times",
      "description": "Suvendu said that the party supremo has lost the moral authority to continue as the CM of the state after fostering terrorists like Sheikh. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/arrest-mamata-declare-tmc-a-terror-outfit-demands-bjp-leader-after-cbi-searches-at-premises-of-sandeshkhali-accused-101714186870180.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/27/1600x900/adhikari-mamata-agencies_1714186856942_1714186864754.jpg",
      "publishedAt": "2024-04-27T04:15:19Z",
      "content": "West Bengal leader of opposition and Bharatiya Janata Party (BJP) leader Suvendu Adhikari on Friday slammed the Trinamool Congress (TMC)-led West Bengal government after several arms and ammunition, … [+3060 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "‘Taarak Mehta Ka Ooltah Chashmah’ actor Gurucharan Singh known for role ‘Sodhi’ missing | Mint - Mint",
      "description": "Gurucharan Singh, known for his role in 'Taarak Mehta Ka Ooltah Chashmah,' is reportedly missing. His father filed a complaint with Delhi Police after he did not reach Mumbai as planned on April 22. Police have initiated an investigation and are reviewing CCT…",
      "url": "https://www.livemint.com/news/india/taarak-mehta-ka-ooltah-chashmah-actor-gurucharan-singh-known-for-role-roshan-singh-sodhi-missing-11714190213013.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/27/1600x900/IMG_5612_1714190868743_1714190874864.jpg",
      "publishedAt": "2024-04-27T04:12:00Z",
      "content": "Gurucharan Singh, the actor from the TV serial 'Taarak Mehta Ka Ooltah Chashmah,' has allegedly gone missing, PTI reported citing sources within the Delhi Police. Singh has played the famous characte… [+1411 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "India Today Entertainment Desk",
      "title": "Govinda didn't let Kashmera Shah touch his feet at Arti's wedding, blessed her kids - India Today",
      "description": "Actor Kashmera Shah shared that she tried to touch Govinda039s feet at Arti Singh039s wedding ceremony However the actor stopped her from doing so and blessed her and her children",
      "url": "https://www.indiatoday.in/television/celebrity/story/govinda-did-not-let-kashmera-shah-touch-his-feet-at-arti-singh-wedding-blessed-her-kids-2532302-2024-04-27",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/kashmera-shah--govinda-270318451-16x9_0.jpg?VersionId=V1jvlO0Xnl1TqkseuQrgwaTYl9kXeDyW",
      "publishedAt": "2024-04-27T03:03:44Z",
      "content": "After much speculation, actor Govinda attended the wedding ceremony of his niece and fellow actor, Arti Singh, on Thursday, April 25. He was accompanied by his son, Yashvardhan Ahuja. Kashmera Shah, … [+2046 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Asit Manohar",
      "title": "Q4 results 2024: Yes Bank, ICICI Bank to IDFC First Bank: 13 companies to declare Q4 results today | Mint - Mint",
      "description": "Q4 results 2024: 13 listed companies thare are going to declare Q4 resuls today include ICICI Bank, Yes Bank, IDFC First Bank, RBL Bank, and L&T Finance",
      "url": "https://www.livemint.com/companies/company-results/q4-results-2024-yes-bank-icici-bank-to-idfc-first-bank-13-companies-to-declare-q4-results-today-11714185711095.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/27/1600x900/Q4_results_2024_Yes_Bank_Q4_results_today_1714186347125_1714186347357.jpg",
      "publishedAt": "2024-04-27T02:58:17Z",
      "content": "Q4 results 2024: After ushering in the new financial year 2024-25, stock market investors are vigilant about the company results for Q4FY24. As per the rules, a listed company has to declare its Q4 r… [+3980 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Aam Aadmi Party releases rap song Jail Ka Jawab Vote Se; internet reminisces when Vishal Dadlani composed for AAP - Hindustan Times",
      "description": "The Aam Aadmi Party released a new campaign song titled Jail Ka Jawab Vote Se in response to Arvind Kejriwal's arrest. Here's how the internet reacted.",
      "url": "https://www.hindustantimes.com/entertainment/music/aam-aadmi-party-rap-song-jail-ka-jawab-vote-se-arvind-kejriwal-aap-vishal-dadlani-101714182396504.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/27/1600x900/AAP_Rap_song_1714182588854_1714182603839.jpg",
      "publishedAt": "2024-04-27T02:39:58Z",
      "content": "The Aam Aadmi Party (AAP), in response to the arrest of their leader, Delhi CM Arvind Kejriwal, launched a new campaign song, Jail Ka Jawab Vote Se. Sung in rap style, the song was unveiled at the pa… [+2094 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "10 Celestial images captured by NASA Hubble Space Telescope in 2024 - HT Tech",
      "description": "10 Celestial images captured by NASA Hubble Space Telescope in 2024 Have a look at these shocking celestial images captured by NASAs Hubble Space Telescope in 2024. NGC 3783 This spiral galaxy captured by Hubble is located about 130 million lightyears from Ea…",
      "url": "https://tech.hindustantimes.com/web-stories/10-celestial-images-captured-by-nasa-hubble-space-telescope-in-2024-71714111143329.html",
      "urlToImage": "https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4=",
      "publishedAt": "2024-04-27T02:30:09Z",
      "content": "Photo Credit: Pixabay\r\n Have a look at these shocking celestial images captured by NASAs Hubble Space Telescope in 2024.\r\nPhoto Credit: NASA\r\n NGC 3783: This spiral galaxy captured by Hubble is locat… [+1300 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Garena Free Fire Max redeem codes for April 27, 2024: Exciting rewards await | Mint - Mint",
      "description": "Garena Free Fire Max redeem codes for April 27, 2024: Daily redeem codes are 12 digit alphanumeric combinations that help enhance the urgency and instill as sense of gratification among game's massive player base.",
      "url": "https://www.livemint.com/technology/garena-free-fire-max-redeem-codes-for-april-27-2024-exciting-rewards-await-11714178174903.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/27/1600x900/gg_1668573752178_1714183213682.png",
      "publishedAt": "2024-04-27T02:06:50Z",
      "content": "Garena Free Fire Max became an instant hit amongst the Indian masses after its predecessor, Garena Free Fire, was banned in the country in February 2022. The battle royale game has also managed to at… [+2447 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "Shashank Singh breaks into iconic Shah Rukh Khan pose after blitzkrieg fifty against KKR in Punjab Kings' record chase - Hindustan Times",
      "description": "Shashank Singh smashed eight sixes and two boundaries in his blitzkrieg 68* as Punjab Kings beat KKR by eight wickets | Cricket",
      "url": "https://www.hindustantimes.com/cricket/ipl-2024-kkr-vs-pbks-shashank-singh-iconic-shah-rukh-khan-pose-blitzkrieg-fifty-against-kkr-punjab-kings-record-chase-101714181235064.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/27/1600x900/image_-_2024-04-27T065842146_1714181462312_1714181462569.jpg",
      "publishedAt": "2024-04-27T02:02:14Z",
      "content": "The night may have belonged to Jonny Bairstow, who couldn't have timed his redemption more perfectly in the ongoing IPL 2024 season, scoring a monstrous hundred, but in-form Shashank Singh played an … [+2160 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "After 'Sharia' dig, Yogi Adityanath launches 'right to eat beef' attack at Congress - Hindustan Times",
      "description": "Yogi Adityanath was addressing the rally in support of BJP candidate Parmeshwar Lal Saini for the Sambhal Lok Sabha seat. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/after-sharia-dig-yogi-adityanath-launches-right-to-eat-beef-attack-at-congress-101714182184960.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/27/1600x900/Uttar-Pradesh-chief-minister-Yogi-Adityanath---HT-_1714182389951_1714182500706.jpeg",
      "publishedAt": "2024-04-27T01:52:38Z",
      "content": "The Congress party wants to provide minorities the right to eat beef, claimed Uttar Pradesh chief minister Yogi Adityanath on Friday. He claimed \"these shameless people\" want to hand over cows into t… [+2101 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "Lok Sabha elections Phase 2: Tripura records highest voter turnout, UP lowest | 10 points - Hindustan Times",
      "description": "Polling for the second phase began at 7 am and concluded at 6 pm, with several states experiencing intense heat conditions. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/lok-sabha-elections-2024-second-phase-tripura-highest-voter-turnout-up-lowest-top-points-101714178365750.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/27/1600x900/India-Election-102_1714179766858_1714179807612.jpg",
      "publishedAt": "2024-04-27T01:21:50Z",
      "content": "In the second phase of the Lok Sabha elections that covered 88 seats across 12 states and a union territory, a voter turnout of 63.50 per cent was reported. The Election Commission (EC) stated that p… [+3768 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Arani Basu",
      "title": "T20 World Cup selection takes centrestage as Delhi Capitals face Mumbai Indians | Cricket News - The Times of India",
      "description": "Cricket News: Amidst intense training in the sweltering heat, IPL players like Axar Patel and Rishabh Pant aim to secure T20 World Cup spots. This is a time when ea",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/t20-world-cup-selection-takes-centrestage-as-delhi-capitals-face-mumbai-indians/articleshow/109637746.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-109637737,width-1070,height-580,imgsize-72880,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-04-27T01:17:00Z",
      "content": "Punjab pull off record chase against Kolkata"
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "Reuters",
      "title": "Columbia University president under fire for crackdown on pro-Palestine stir - India Today",
      "description": "Columbia University president Nemat Minouche Shafik was criticised by a university oversight panel over her administration039s move to crackdown on a pro-Palestine protest on the campus",
      "url": "https://www.indiatoday.in/world/story/columbia-university-president-under-fire-for-crackdown-on-pro-palestine-protests-2532285-2024-04-27",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/us-universities-pro-palestine-protests-270031626-16x9_0.png?VersionId=oApsh3ogbpS1xxLIDLsOLV05bLwjxc3d",
      "publishedAt": "2024-04-27T01:02:56Z",
      "content": "Columbia's embattled president came under renewed pressure on Friday as a university oversight panel sharply criticised her administration for clamping down on a pro-Palestinian protest, saying the d… [+5467 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Israel Gives Hostage Deal \"Last Chance\" Before Rafah Attack: Reports - NDTV",
      "description": "Israel sees the latest efforts to achieve a ceasefire and a hostage deal in the Gaza war as a \"last chance\" before the planned attack on the city of Rafah in the south of the Gaza Strip, according to media reports.",
      "url": "https://www.ndtv.com/world-news/israel-gives-hostage-deal-last-chance-before-rafah-attack-reports-5532962",
      "urlToImage": "https://c.ndtvimg.com/2023-10/j9f9no3s_strike-on-rafah-crossing-afp_625x300_10_October_23.jpg",
      "publishedAt": "2024-04-27T00:34:00Z",
      "content": "Israel wants to smash the last remaining Hamas battalions in the town in southern Gaza.\r\nTel Aviv:  Israel sees the latest efforts to achieve a ceasefire and a hostage deal in the Gaza war as a \"last… [+2386 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "India-Bound Oil Tanker Hit By Missiles In Red Sea, Say Yemen's Houthis - NDTV",
      "description": "Yemen's Houthis said on Saturday their missiles hit the Andromeda Star oil tanker in the Red Sea, as they continue attacking commercial ships in the area in a show of support for Palestinians fighting Israel in the Gaza war.",
      "url": "https://www.ndtv.com/world-news/india-bound-oil-tanker-hit-by-missiles-in-red-sea-say-yemens-houthis-5532875",
      "urlToImage": "https://c.ndtvimg.com/2019-05/i4bn2td8_oil-tanker-generic-pixabay_625x300_01_May_19.jpg",
      "publishedAt": "2024-04-27T00:09:24Z",
      "content": "The UK-owned oil ship was en route from Primorsk, Russia, to Vadinar, India. (Representational)\r\nLos Angeles: Yemen's Houthis said on Saturday their missiles hit the Andromeda Star oil tanker in the … [+1433 chars]"
    }
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Pigeon News - Top Headlines</h2>

        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3"key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 88)}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
        })}

          
        </div>
      </div>
    );
  }
}

export default news;
