import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles=[
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "Livemint",
    "title": "RBI MPC Meeting Live Updates: RBI enhances UPI transaction limit for hospitals, educational institutions to ₹5 lakh | Mint - Mint",
    "description": "RBI MPC Meeting Live Updates: The review by the six-member monetary policy committee will likely indicate the course RBI will adopt in the remainder of the fiscal as it seeks to bring inflation under the 4 per cent target amid high food prices.",
    "url": "https://www.livemint.com/economy/rbi-monetary-policy-outcome-rbi-mpc-meeting-on-december-8-repo-rate-decision-rbi-policy-rbis-gdp-growth-forecast-11701966031251.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/07/1600x900/a87131bc-ba50-11eb-b2e0-990fd466194c_1621617732588_1701966036587.jpg",
    "publishedAt": "2023-12-08T06:19:49Z",
    "content": "RBI Monetary Policy (MPC) Meet Live Updates: Reserve Bank of India (RBI) Governor Shaktikanta Das unveiled the fifth monetary policy of the financial year 2023-24 today at 10:00 am after a two-day re… [+24557 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Fighter Teaser: The Sky Is The Limit For Hrithik Roshan, Deepika Padukone And Anil Kapoor - NDTV Movies",
    "description": "Fighter is slated to release on January 25",
    "url": "https://www.ndtv.com/entertainment/fighter-teaser-the-sky-is-the-limit-for-hrithik-roshan-deepika-padukone-and-anil-kapoor-4644930",
    "urlToImage": "https://c.ndtvimg.com/2023-12/555e8v3g_fighter_625x300_08_December_23.jpg",
    "publishedAt": "2023-12-08T06:01:06Z",
    "content": "Deepika and Hrithik in a still from Fighter teaser. (courtesy: YouTube)\r\nNew Delhi: The much-awaited teaser of Siddharth Anand's Fighter released on Friday morning and it is an action-packed ride. Th… [+1559 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "CME to spark solar storm on Mars and erode its atmosphere, reveals NASA model; Check details - HT Tech",
    "description": "NASA models have detected a full halo CME moving towards Mars for a direct hit. It is expected to trigger a solar storm, eroding a small amount of its atmosphere. Know all about it.",
    "url": "https://tech.hindustantimes.com/tech/news/cme-to-spark-solar-storm-on-mars-and-erode-its-atmosphere-reveals-nasa-model-check-details-71702014639107.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/08/1600x900/mars-1326108_1280_1697968208779_1702014675610.jpg",
    "publishedAt": "2023-12-08T06:01:05Z",
    "content": "The unrelenting solar activity on the Sun is not just affecting the Earth but all the nearby planets as well. In October, it was reported that an intense coronal mass ejection (CME) cloud hit Venus a… [+2509 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "NASA tracks Asteroid 2023 WG; it will come as close as 6.7 million km to Earth today - HT Tech",
    "description": "NASA has tracked Asteroid 2023 WG in its orbit which will bring it close to Earth today, December 8. Know details such as its speed, size, distance of approach, and more.",
    "url": "https://tech.hindustantimes.com/tech/news/nasa-tracks-asteroid-2023-wg-it-will-come-as-close-as-6-7-million-km-to-earth-today-71702014558866.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/08/1600x900/wikimedia_commons_1673950232106_1702015200427.jpg",
    "publishedAt": "2023-12-08T06:00:30Z",
    "content": "NASA defines asteroids as ancient space rocks left over from the early formation of our solar system about 4.6 billion years ago. Most of them are mainly found in the main asteroid belt located betwe… [+1671 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ibc24.in"
    },
    "author": "Deepak Dilliwar",
    "title": "MP-CG Rajasthan BJP Observer: तीन राज्यों के लिए भाजपा के ऑब्जर्वर तय.. इन नेताओं पर होगी नए CM चुनने की जिम्मेदारी, देखें नाम - IBC24 News (हिंदी)",
    "description": "तीन राज्यों के लिए भाजपा के ऑब्जर्वर तय.. इन नेताओं पर होगी नए CM चुनने की जिम्मेदारी, देखें नाम!  MP-CG Rajasthan BJP Observer",
    "url": "https://www.ibc24.in/country/mp-cg-rajasthan-bjp-observer-bjp-issues-name-of-observer-for-3-states-1869216.html",
    "urlToImage": "https://media.ibc24.in/wp-content/uploads/2023/12/CG-OBES..jpg",
    "publishedAt": "2023-12-08T05:56:00Z",
    "content": "Sivaganga Express Accident: , …"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Mahua Moitra's \"Mahabharat\" Jab, Ethics Report Likely In Parliament Today - NDTV",
    "description": "An Ethics Committee report on cash-for-query allegations against Trinamool Congress MP Mahua Moitra is expected in the Lok Sabha today.",
    "url": "https://www.ndtv.com/india-news/mahua-moitra-lok-sabha-ethics-report-mahua-moitra-report-in-parliament-today-opposition-bjp-braced-for-row-4644500",
    "urlToImage": "https://c.ndtvimg.com/2023-11/nmacf7ag_mahua-moitra_625x300_09_November_23.jpg",
    "publishedAt": "2023-12-08T05:45:56Z",
    "content": "Mahua Moitra is a Trinamool Congress Lok Sabha MP from Bengal's Krishnanagar (File).\r\nNew Delhi: The ethics report on cash-for-query allegations against Trinamool Congress MP Mahua Moitra has been ta… [+4715 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "NDTV",
    "title": "3 Canada Theatres Playing Hindi Movies Attacked With \"Unknown Sprays\" - NDTV",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvbWFza2VkLW1lbi1hdHRhY2staGluZGktZmlsbS1zY3JlZW5pbmdzLWluLWNhbmFkYS13aXRoLWlycml0YXRpbmctc3ByYXlzLTQ2NDQ1OTTSAXZodHRwczovL3d3dy5uZHR2LmNvbS93b3JsZC1uZXdzL21hc2tlZC1tZW4tYXR0YWNrLWhpbmRpLWZpbG0tc2NyZWVuaW5ncy1pbi1jYW5hZGEtd2l0aC1pcnJpdGF0aW5nLXNwcmF5cy00NjQ0NTk0L2FtcC8x?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-12-08T05:42:05Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "ICC Announces Rating For India vs Australia World Cup Final Pitch Amid Ongoing Debate - NDTV Sports",
    "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
    "url": "https://www.bbc.com/news/world-us-canada-39324587",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
    "publishedAt": "2023-12-08T05:38:07Z",
    "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "123telugu.com"
    },
    "author": null,
    "title": "Yash19 is titled Toxic; Geetu Mohandas to direct this biggie - 123telugu",
    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
    "url": "https://www.123telugu.com/mnews/yash19-is-titled-toxic-geetu-mohandas-to-direct-this-biggie.html",
    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
    "publishedAt": "2023-12-08T05:10:00Z",
    "content": "The day Yash fans have been waiting for so long is finally here. One and a half years after the release of KGF 2, Rocking Star Yash announced his new project. The movie is called Toxic, and it will b… [+942 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ophthalmologytimes.com"
    },
    "author": "Hattie Hayes",
    "title": "AAO 2023 brings data, diagnostics and digital workflows to the forefront - Ophthalmology Times Europe",
    "description": "Experts from around the globe converged in San Francisco, California",
    "url": "https://europe.ophthalmologytimes.com/view/recap-aao-2023-brings-data-diagnostics-and-digital-workflows-to-the-forefront",
    "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/ophtimeeurope/1a568c2479a78007586d8baeff49943a2510afe8-1200x800.jpg?fit=crop&auto=format",
    "publishedAt": "2023-12-08T05:08:48Z",
    "content": "This years American Academy of Ophthalmology meeting was held 3 to 6 November, 2023. The meeting brought 15,749 attendees to San Francisco, California, including 2,500 international physicians. The v… [+4664 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Moneycontrol News",
    "title": "Navjot Singh Sidhu's son gets married in Patiala, Congress leader shares photos - Moneycontrol",
    "description": "Karan Sidhu stood side by side with his bride Inayat Randhawa, who donned a pink lehenga for the wedding, Navjot Singh Sidhu's pictures show.",
    "url": "https://www.moneycontrol.com/news/trends/navjot-singh-sidhus-son-gets-married-in-patiala-congress-leader-shares-photos-11872921.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/MixCollage-08-Dec-2023-09-55-AM-5494-770x433.jpg",
    "publishedAt": "2023-12-08T04:25:12Z",
    "content": "Congress leader Navjot Singh Sidhu's son, Karan Sidhu, just tied the knot with Inayat Randhawa in Patiala months after they announced their engagement. The former India cricketer, renowned for his wi… [+1940 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "India Today"
    },
    "author": "India Today World Desk",
    "title": "'Will turn Beirut into Gaza': Netanyahu warns Hezbollah against all-out war - India Today",
    "description": "Israeli Prime Minister Benjamin Netanyahu warned Iranian-backed Lebanon group, Hezbollah, against launching an \"all-out war\" and said that Beirut will be turned into Gaza.",
    "url": "https://www.indiatoday.in/world/story/israel-prime-minister-benjamin-netanyahu-warning-to-hezbollah-will-turn-beirut-into-gaza-latest-news-2473430-2023-12-08",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/benjamin-netanyahu-warning-to-hezbollah-israel-hamas-war-085746305-16x9_0.jpeg?VersionId=T.m5q2ocFRCTOiGhYkgWLBW.NAceaKqV",
    "publishedAt": "2023-12-08T04:02:04Z",
    "content": "In a stern warning to Hezbollah, Israeli Prime Minister Benjamin Netanyahu cautioned the Iranian-backed group against instigating an all-out war, saying that in such a case, Beirut - Lebanon's capita… [+2393 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "TOI Sports Desk",
    "title": "WATCH: Sreesanth fuels another fight, takes a jibe at Gautam Gambhir's run out | Cricket News - Times of India - IndiaTimes",
    "description": "Cricket News: The Gautam Gambhir-led India Capitals faced a disappointing exit from the Legends League Cricket 2023 following a six-wicket loss to the Manipal Tiger",
    "url": "https://timesofindia.indiatimes.com/sports/cricket/news/watch-gautam-gambhir-gets-run-out-sreesanth-celebrates/articleshow/105826982.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-105827375,width-1070,height-580,imgsize-55328,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2023-12-08T03:45:58Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "Livemint",
    "title": "ZPM chief Lalduhoma to be sworn in as Mizoram CM today | Mint - Mint",
    "description": "ZPM chief Lalduhoma to take oath as Mizoram Chief Minister in swearing-in ceremony that is scheduled to be held on December 8, Friday.",
    "url": "https://www.livemint.com/elections/assembly-elections/zpm-chief-lalduhoma-to-be-sworn-in-as-mizoram-cm-today-11702004695217.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/08/1600x900/PTI12-04-2023-000236B-0_1701763374451_1702006514499.jpg",
    "publishedAt": "2023-12-08T03:40:02Z",
    "content": "Zoram People's Movement (ZPM) leader Lalduhoma is all set to be sworn in as the new chief minister of Mizoram today, December 8, Friday. Officials said that several other party leaders will also take… [+2057 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "The Indian Express",
    "title": "Former Telangana CM KCR falls at farmhouse, hospitalised with hairline fracture - The Indian Express",
    "description": null,
    "url": "https://indianexpress.com/article/india/kcr-hospitalised-injured-brs-9059317/",
    "urlToImage": null,
    "publishedAt": "2023-12-08T03:39:26Z",
    "content": null
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": null,
    "title": "RIP! Veteran actor Junior Mehmood passes away at 67 after battling stomach cancer, condolences pour in - Times of India",
    "description": "Veteran character actor Junior Mehmood, celebrated for his memorable roles in Bollywood classics like Caravan, Haathi Mere Saathi, and Mera Naam Joker, has passed away at the age of 67 after a protracted battle with stage four stomach cancer. The actor, whose…",
    "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/rip-veteran-actor-junior-mehmood-passes-away-at-67-after-battling-stomach-cancer-condolences-pour-in/videoshow/105826705.cms",
    "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-105826705,imgsize-80504.cms",
    "publishedAt": "2023-12-08T03:20:32Z",
    "content": "Dec 08, 2023, 08:50AM ISTSource: etimes.inVeteran character actor Junior Mehmood, celebrated for his memorable roles in Bollywood classics like \"Caravan,\" \"Haathi Mere Saathi,\" and \"Mera Naam Joker,\"… [+1620 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "AFP",
    "title": "Hunter Biden indicted for multi-million dollar tax evasion charges - Hindustan Times",
    "description": "Hunter Biden faces new tax evasion charges amid ongoing legal battles, Will it impact President Joe Biden's reelection?",
    "url": "https://www.hindustantimes.com/world-news/us-news/hunter-biden-indicted-for-multi-million-dollar-tax-evasion-charges-101702003457862.html",
    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/08/1600x900/FILES-US-POLITICS-TAXES-BIDEN-3_1702004033165_1702004063881.jpg",
    "publishedAt": "2023-12-08T03:00:43Z",
    "content": "Hunter Biden was indicted late Thursday on multiple counts of tax evasion, the second time this year President Joe Biden's troubled son has been charged by a special counsel investigating his persona… [+3228 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "India Today"
    },
    "author": "Grace Cyril",
    "title": "'Sam Bahadur' box office collection Day 7: Vicky Kaushal's film sees no growth - India Today",
    "description": "Vicky Kaushal's biopic drama 'Sam Bahadur' is facing a tough competition at the box office with Ranbir Kapoor's 'Animal.' Here's how much it earned on Day 7, December 7.",
    "url": "https://www.indiatoday.in/movies/bollywood/story/sam-bahadur-box-office-collection-day-7-vicky-kaushals-film-sees-no-growth-2473405-2023-12-08",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/sam-bahadur-box-office-collection-day-7-08234147-16x9_0.jpg?VersionId=yyH8STfDT_1RJfuF5xZeEY543hqCpY_I",
    "publishedAt": "2023-12-08T02:38:21Z",
    "content": "Vicky Kaushal's 'Sam Bahadur', which opened to decent numbers on the first day, is struggling to churn out big numbers at the box office now. The film only managed to earn Rs 3.05 crore India net on … [+1783 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Siasat Daily"
    },
    "author": "Indo-Asian News Service",
    "title": "Canada to double cost-of-living requirement for international students - The Siasat Daily",
    "description": "Ottawa: The Canadian government has announced that it will more than double the cost-of-living financial requirement for incoming international students on January 1, 2024. Minister of Immigration, Refugees and Citizenship Marc Miller said in a news release t…",
    "url": "https://www.siasat.com/canada-to-double-cost-of-living-requirement-for-international-students-2930191/",
    "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2022/11/canadian-flag-Nov2.jpg",
    "publishedAt": "2023-12-08T01:49:00Z",
    "content": "Ottawa: The Canadian government has announced that it will more than double the cost-of-living financial requirement for incoming international students on January 1, 2024.\r\nMinister of Immigration, … [+1650 chars]"
    },
    {
    "source": {
    "id": "bloomberg",
    "name": "Bloomberg"
    },
    "author": "Sankalp Phartiyal",
    "title": "Tata Plans New iPhone Factory in India to Help Apple Diversify Beyond China - Bloomberg",
    "description": "Conglomerate Tata Group plans to build one of India’s biggest iPhone assembly plants, tapping Apple Inc.’s ambitions to increase manufacturing in the South Asian country.",
    "url": "https://www.bloomberg.com/news/articles/2023-12-08/apple-iphone-india-production-tata-plans-big-new-factory",
    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJKICWOZnvWY/v0/1200x800.jpg",
    "publishedAt": "2023-12-08T01:28:59Z",
    "content": "Sign up for the India Edition newsletter by Menaka Doshi an insider's guide to the emerging economic powerhouse, and the billionaires and businesses behind its rise, delivered weekly.\r\nConglomerate T… [+153 chars]"
    }
    ]
  constructor() {
    super();
    this.state = {
      articles:this.articles
    }
  }

  async componentDidMount() {
     let Url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=77719c4419594f18b76ec8e3dd22ae61";
   let data = await fetch(Url);
    let parseddata = await data.json();
     console.log(parseddata);
  
    this.setState({
      articles: parseddata.articles,
    });
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NEWSHUB - Top news here</h2>
          <div className="d-flex flex-row flex-wrap">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-04 my-3 mx-3 flex-1" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    ImageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
