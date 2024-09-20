// Data para pruebas de la API de noticias
import { Article } from '../domain/interfaces/api-news-response.interface';

export const responseApiNewsTest: Article[] = [
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Lawrence Bonk',
    title:
      "Get up to $150 off fire pits and pizza ovens in Solo Stove's Labor Day sale",
    description:
      'It’s almost fall, when the leaves start to turn colors and the weather gets a bit crisp. In other words, it’s nearly bonfire season. To commemorate this fact, Solo Stove is holding a sitewide Labor Day sale that includes fire pits, pizza ovens and just about …',
    url: 'https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8f59c1f5-66f8-4b92-89ab-70d3783ff43d',
    urlToImage: null,
    publishedAt: new Date('2024-08-28T16:45:39Z'),
    content:
      "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Passant Rabie',
    title: 'SpaceX’s Falcon 9 Rocket Catches Fire During Rare Fumbled Landing',
    description:
      'The rocket delivered the latest batch of Starlink satellites to orbit but failed to stick the landing.',
    url: 'https://gizmodo.com/spacexs-falcon-9-rocket-catches-fire-during-rare-fumbled-landing-2000491842',
    urlToImage:
      'https://gizmodo.com/app/uploads/2024/08/Falcon9-booster-landing-fail.jpg',
    publishedAt: new Date('2024-08-28T16:30:58Z'),
    content:
      'In a rare mishap, SpaceX’s workhorse rocket tipped over on the landing pad and went up in flames, ending a stellar streak of touchdowns.\r\nFalcon 9 launched on Wednesday at 3:48 a.m. ET from Cape Cana… [+2409 chars]',
  },
  {
    source: {
      id: null,
      name: 'BBC News',
    },
    author: null,
    title: 'SpaceX delays first private spacewalk mission',
    description:
      'Elon Musk\'s company said it would be delayed "due to unfavourable weather forecasted" in the capsule\'s splashdown areas.',
    url: 'https://www.bbc.com/news/articles/cn47019e7l7o',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/67be/live/711b99c0-6509-11ef-8c32-f3c2bc7494c6.jpg',
    publishedAt: new Date('2024-08-28T07:22:45Z'),
    content:
      'SpaceX has postponed its attempt to launch an expedition featuring an all-civilian crew that is aiming to carry out the first-ever spacewalk by private citizens.\r\nThe mission, known as Polaris Dawn, … [+2042 chars]',
  },
  {
    source: {
      id: null,
      name: 'BBC News',
    },
    author: null,
    title: "Three months into their global cruise, they've not left Belfast",
    description:
      'A round-the-world cruise ship has been delayed in Belfast for almost three months.',
    url: 'https://www.bbc.com/news/articles/c8jl3720yw3o',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/b21f/live/c45b1e50-6511-11ef-aa02-77f1a7028b9d.jpg',
    publishedAt: new Date('2024-08-28T23:03:42Z'),
    content:
      'Holly Hennessy has been waiting in Belfast from May for the ship to be ready\r\nPassengers on a round-the-world cruise have been left stranded in Belfast for three months after their voyage was beset b… [+3833 chars]',
  },
  // {
  //   source: {
  //     id: null,
  //     name: 'NPR',
  //   },
  //   author: 'Geoff Brumfiel',
  //   title:
  //     'FAA grounds SpaceX ahead of historic Polaris Dawn commercial spacewalk',
  //   description:
  //     "The Federal Aviation Administration opened the investigation after a rocket booster toppled aboard a drone ship after it was returning from lofting SpaceX's Starlink internet satellites into space.",
  //   url: 'https://www.npr.org/2024/08/28/g-s1-19934/faa-spacex-falcon9-grounded-polaris-dawn',
  //   urlToImage:
  //     'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6000x3375+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F60%2Faf%2F23e1ec83474592de24f0ea713608%2Fgettyimages-2168616044.jpg',
  //   publishedAt: new Date('2024-08-28T19:42:03Z'),
  //   content:
  //     'WASHINGTON The Federal Aviation Administration has grounded SpaceX rockets, following a failure of one of the companys Falcon 9 rocket boosters early Wednesday morning.\r\nThe grounding comes as a crew… [+2225 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Slashdot.org',
  //   },
  //   author: 'BeauHD',
  //   title: "FAA Grounds SpaceX's Falcon 9 Rocket Following Landing Mishap",
  //   description:
  //     "SpaceX's Falcon 9 rocket has been grounded by the FAA for the second time in less than two months following the failed landing of a first-stage booster, which was destroyed in a fireball after its 23rd flight. Spaceflight Now reports: The booster, serial numb…",
  //   url: 'https://science.slashdot.org/story/24/08/28/2331215/faa-grounds-spacexs-falcon-9-rocket-following-landing-mishap',
  //   urlToImage: 'https://a.fsdn.com/sd/topics/space_64.png',
  //   publishedAt: new Date('2024-08-29T00:02:00Z'),
  //   content:
  //     "The booster, serial number B1062 in the SpaceX fleet, suffered a hard landing, at the tail end of its record-setting 23rd flight. It was consumed in a fireball on the deck of the drone ship 'A Shortf… [+1138 chars]",
  // },
  // {
  //   source: {
  //     id: 'business-insider',
  //     name: 'Business Insider',
  //   },
  //   author: 'Joey Hadden',
  //   title:
  //     "I've been to 20 national parks and forests around the US. The North Rim of the Grand Canyon is the most underrated.",
  //   description:
  //     "Business Insider's reporter has experienced crowds on the South Rim of the Grand Canyon. The North Rim is more peaceful since it's under-the-radar.",
  //   url: 'https://www.businessinsider.com/north-rim-of-the-grand-canyon-national-park-hidden-gem-2024-8',
  //   urlToImage:
  //     'https://i.insider.com/66cca40bc72ebc54a40ec5ac?width=1200&format=jpeg',
  //   publishedAt: new Date('2024-08-28T09:36:02Z'),
  //   content:
  //     "The author enjoys the view from Rainbow Rim Trail.Joey Hadden/Business Insider\r\n<ul><li>The Grand Canyon's North Rim offers a peaceful alternative to the crowded South Rim.</li><li>The South Rim has … [+5845 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yahoo Entertainment',
  //   },
  //   author: 'Alexander Villegas',
  //   title:
  //     'Scientists in Chile question if Antarctica has hit a point of no return',
  //   description:
  //     'Nearly 1,500 academics, researchers and scientists specializing in Antarctica gathered in southern Chile for the 11th Scientific Committee on Antarctic...',
  //   url: 'https://www.yahoo.com/news/scientists-chile-antarctica-hit-point-100428107.html',
  //   urlToImage:
  //     'https://media.zenfs.com/en/reuters.com/6a8d1fe4c5f0cc14368883e8106f729e',
  //   publishedAt: new Date('2024-08-28T10:04:28Z'),
  //   content:
  //     'By Alexander Villegas\r\nPUCON, Chile (Reuters) - Nearly 1,500 academics, researchers and scientists specializing in Antarctica gathered in southern Chile for the 11th Scientific Committee on Antarctic… [+4588 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yahoo Entertainment',
  //   },
  //   author: 'ActionNewsJax.com News Staff,WSBTV.com News Staff',
  //   title:
  //     'West Nile virus cases significantly increase in Georgia: Symptoms you need to watch for',
  //   description:
  //     'The U.S. Centers for Disease Control and Prevention in Atlanta has reported a significant increase in West Nile virus cases across Georgia, all linked to the...',
  //   url: 'https://www.yahoo.com/news/west-nile-virus-cases-significantly-112516163.html',
  //   urlToImage:
  //     'https://media.zenfs.com/en/wjax_cox_articles_158/2b230e2a10d75c0747611b72b00baef8',
  //   publishedAt: new Date('2024-08-28T11:25:16Z'),
  //   content:
  //     'The U.S. Centers for Disease Control and Prevention (CDC) in Atlanta has reported a significant increase in West Nile virus cases across Georgia, all linked to the worlds deadliest animal: the mosqui… [+2489 chars]',
  // },
  // {
  //   source: {
  //     id: 'time',
  //     name: 'Time',
  //   },
  //   author: 'Shannon Carlin',
  //   title: 'The 32 Most Anticipated Books of Fall 2024',
  //   description:
  //     "From Ina Garten's memoir to Sabaa Tahir's new YA fantasy, here are the books to look out for this fall.",
  //   url: 'https://time.com/7011159/best-books-fall-2024/',
  //   urlToImage:
  //     'https://api.time.com/wp-content/uploads/2024/08/fall-preview-books-2024.jpg?quality=85&w=1200&h=628&crop=1',
  //   publishedAt: new Date('2024-08-28T11:00:00Z'),
  //   content:
  //     'Spend the coziest months of the year with your next great read.The most anticipated books of fall include best-selling author and philosopher Yuval Noah Hararis brief history of information, a new es… [+22786 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Digital Trends',
  //   },
  //   author: 'Trevor Mogg',
  //   title: 'SpaceX calls off Wednesday’s launch of Polaris Dawn',
  //   description:
  //     'SpaceX has again called off the launch of the highly anticipated Polaris Dawn mission but this time it has not set a new launch date.',
  //   url: 'https://www.digitaltrends.com/space/spacex-calls-off-wednesdays-launch-of-polaris-dawn/',
  //   urlToImage:
  //     'https://www.digitaltrends.com/wp-content/uploads/2024/08/polaris-dawn.jpeg?resize=1200%2C630&p=1',
  //   publishedAt: new Date('2024-08-28T03:16:52Z'),
  //   content:
  //     'SpaceX has called off the launch of the highly anticipated Polaris Dawn mission for the second day in a row but this time it has not set a new schedule. \r\nIn a message posted on social media on Tuesd… [+1422 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Digital Trends',
  //   },
  //   author: 'Trevor Mogg',
  //   title:
  //     'SpaceX’s Polaris Dawn mission faces further delay after FAA grounds Falcon 9',
  //   description:
  //     'SpaceX’s Falcon 9 rocket has been grounded by the Federal Aviation Administration after one of the boosters toppled over and exploded on Wednesday.',
  //   url: 'https://www.digitaltrends.com/space/spacex-falcon-9-grounded/',
  //   urlToImage:
  //     'https://www.digitaltrends.com/wp-content/uploads/2017/01/spacex-falcon-9-landing.jpg?resize=1200%2C630&p=1',
  //   publishedAt: new Date('2024-08-29T01:15:18Z'),
  //   content:
  //     'SpaceX’s workhorse Falcon 9 rocket has been grounded by the Federal Aviation Administration (FAA) after one of the boosters toppled over and exploded shortly after landing at the end of a mission on … [+1953 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Digital Trends',
  //   },
  //   author: 'Michael Bizzaco',
  //   title: 'Get up to 40% off Blink smart home security gear: Cameras and more',
  //   description:
  //     'Amazon’s Blink family is receiving a boatload of discounts! Save 40% or more on select items, but it’s only a limited time before these markdowns disappear.',
  //   url: 'https://www.digitaltrends.com/home/blink-40-percent-off-sale-deal-amazon-august-2024/',
  //   urlToImage:
  //     'https://www.digitaltrends.com/wp-content/uploads/2020/09/blink-outdoor-review-4-of-9.jpg?resize=1200%2C630&p=1',
  //   publishedAt: new Date('2024-08-28T16:54:11Z'),
  //   content:
  //     'Blink\r\nNeed a web-connected camera or video doorbell to keep tabs on the interior or exterior of your property? One of the best smart security brands on the market is the Amazon-owned Blink company. … [+1912 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'BBC News',
  //   },
  //   author: null,
  //   title: 'US tourist dies in Viking voyage sinking off Norway',
  //   description:
  //     'An American woman dies after the boat she was in capsized on a trip from the Faroe Islands.',
  //   url: 'https://www.bbc.com/news/articles/cnvyge44nppo',
  //   urlToImage:
  //     'https://ichef.bbci.co.uk/news/1024/branded_news/75cc/live/70ad6ca0-651f-11ef-be1a-47dbeb9bfccf.png',
  //   publishedAt: new Date('2024-08-28T12:56:54Z'),
  //   content:
  //     'An American woman has died after the replica boat she was in capsized in rough seas during an expedition from the Faroe Islands to Norway.\r\nSix people were on board the Naddoddur when it got into tro… [+1662 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Github.com',
  //   },
  //   author: 'feder-cr',
  //   title:
  //     'LinkedIn_AIHawk: AI job assistant. Automate applications and Resume Generation',
  //   description:
  //     'LinkedIn_AIHawk is a tool that automates  the jobs application process on LinkedIn. Utilizing artificial intelligence, it enables users to apply for multiple job offers in an automated and personal...',
  //   url: 'https://github.com/feder-cr/linkedIn_auto_jobs_applier_with_AI',
  //   urlToImage:
  //     'https://opengraph.githubassets.com/99491eff4b1140537a0293a7e2cc2d4485684ac9cf9a37970d0d26a8bb23b39a/feder-cr/linkedIn_auto_jobs_applier_with_AI',
  //   publishedAt: new Date('2024-08-28T07:41:03Z'),
  //   content:
  //     'Connect with like-minded individuals and get the most out of AIHawk.\r\nGet support: Ask questions, troubleshoot issues, and find solutions.\r\nShare knowledge: Share your experiences, tips, and best pra… [+17477 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Wikipedia.org',
  //   },
  //   author: 'Contributors to Wikimedia projects',
  //   title: 'Immovable Ladder',
  //   description: 'Comments',
  //   url: 'https://en.wikipedia.org/wiki/Immovable_Ladder',
  //   urlToImage:
  //     'https://upload.wikimedia.org/wikipedia/commons/d/dc/Immovable_ladder_on_ledge_over_entrance_to_Church_of_the_Holy_Sepulchre.jpg',
  //   publishedAt: new Date('2024-08-28T15:37:54Z'),
  //   content:
  //     '31°4641.9N35°1347.5E﻿ / ﻿31.778306°N 35.229861°E﻿ / 31.778306; 35.229861\r\nThe "Immovable Ladder" at the Church of the Holy Sepulchre.\r\nThe Immovable Ladder is a wooden ladder leaning against the righ… [+14891 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Autoblog',
  //   },
  //   author: 'Autoblog Staff',
  //   title:
  //     'Walmart slashed the price of this mini chainsaw by 59% for Labor Day',
  //   description:
  //     'Filed under:\n Commerce\n Continue reading Walmart slashed the price of this mini chainsaw by 59% for Labor Day\nWalmart slashed the price of this mini chainsaw by 59% for Labor Day originally appeared on Autoblog on Wed, 28 Aug 2024 10:25:00 EDT. Please see our…',
  //   url: 'https://www.autoblog.com/article/walmart-slashed-the-price-of-this-mini-chainsaw-by-59-percent-for-labor-day/',
  //   urlToImage:
  //     'https://edgecast-img.yahoo.net/mysterio/api/1BF367238B396C4B63779BB01F67C0E0951A5F44DEAF8F975DE7497D9DC0C7D3/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2023-08/db3a3540-467f-11ee-b6ff-e211ca3f8ba3',
  //   publishedAt: new Date('2024-08-28T14:25:00Z'),
  //   content:
  //     "For many, Labor Day marks the end of the lawn care season. The colder weather will be rolling in soon and the yard just won't look the same for the next few months. Because of this, though, there are… [+1596 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Autoblog',
  //   },
  //   author: 'Byron Hurd',
  //   title: '2025 Chevrolet Equinox First Drive: Steady as she goes',
  //   description:
  //     'Filed under:\n Chevrolet,First Drives,Crossover\n Continue reading 2025 Chevrolet Equinox First Drive: Steady as she goes\n2025 Chevrolet Equinox First Drive: Steady as she goes originally appeared on Autoblog on Wed, 28 Aug 2024 12:00:00 EDT. Please see our ter…',
  //   url: 'https://www.autoblog.com/2024/08/28/2024-chevrolet-equinox-first-drive-steady-as-she-goes/',
  //   urlToImage:
  //     'https://edgecast-img.yahoo.net/mysterio/api/6829F6EA763AC5CC6F8670E050D1047B56097C3DD6A2B4A63216AA2877330EEA/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/08/28103552/20240822_084417.jpg',
  //   publishedAt: new Date('2024-08-28T16:00:00Z'),
  //   content:
  //     'MINNEAPOLIS With GM still heavily committed to electrification, the launch of the 2025 Chevrolet Equinox comes at an awkward time. Not to be confused with the battery-powered and mechanically unrelat… [+9614 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Autoblog',
  //   },
  //   author: 'Autoblog Staff',
  //   title: 'A guide to visiting Iceland | Open Road',
  //   description:
  //     'Filed under:\n Commerce\n Continue reading A guide to visiting Iceland | Open Road\nA guide to visiting Iceland | Open Road originally appeared on Autoblog on Wed, 28 Aug 2024 05:00:00 EDT. Please see our terms for use of feeds.\nPermalink | \nEmail this | \n Comme…',
  //   url: 'https://www.autoblog.com/article/a-guide-to-visiting-iceland-open-road/',
  //   urlToImage:
  //     'https://edgecast-img.yahoo.net/mysterio/api/774FCCD993702E368F2B19B2BFB9AAC4C4E8D2717128CF55AA50DD3CDED63E10/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2023-07/e1d84df0-3217-11ee-bff4-53ab2cbe46d0',
  //   publishedAt: new Date('2024-08-28T09:00:00Z'),
  //   content:
  //     'Autoblog may receive a share from purchases made via links on this page. Pricing and availability are subject to change.\r\nIf see an active volcano is on your bucket list, you better buy your ticket t… [+12161 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'KTLA Los Angeles',
  //   },
  //   author: 'Tony Kurzweil',
  //   title:
  //     'L.A. mayor meets with Langer’s Deli owner who may close over safety concerns',
  //   description:
  //     'Los Angeles Mayor Karen Bass met with the owner of Langer’s Deli in downtown Los Angeles on Tuesday to address concerns that have owner Norm Langer thinking ...',
  //   url: 'https://ktla.com/news/local-news/l-a-mayor-meets-with-langers-deli-owner-who-may-close-over-safety-concerns/',
  //   urlToImage:
  //     'https://media.zenfs.com/en/ktla_articles_362/c2215d0f0ab3e16f43aa21e6ccf6bf20',
  //   publishedAt: new Date('2024-08-28T13:26:13Z'),
  //   content:
  //     'Los Angeles Mayor Karen Bass met with the owner of Langers Deli in downtown Los Angeles on Tuesday to address concerns that have owner Norm Langer thinking about closing the famous delicatessen.\r\nLan… [+1100 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'WFLA',
  //   },
  //   author: 'Rachel Tucker',
  //   title: 'NHC monitoring 2 areas in Atlantic for possible development',
  //   description:
  //     'The National Hurricane Center is monitoring two areas in the Atlantic for possible tropical development.',
  //   url: 'https://www.wfla.com/weather/tracking-the-tropics/nhc-monitoring-2-areas-in-atlantic-for-possible-development/',
  //   urlToImage:
  //     'https://media.zenfs.com/en/wfla_article_174/18a8fdcfb936d1edff4a4da02efd38ca',
  //   publishedAt: new Date('2024-08-28T12:45:33Z'),
  //   content:
  //     'Related video: In September we can get formation anywhere in the basin: NHC Director Dr. Michael Brennan joins Tracking the Tropics\r\nTAMPA, Fla. (WFLA) The National Hurricane Center is monitoring two… [+1289 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yahoo Entertainment',
  //   },
  //   author: 'Nick Papantonis',
  //   title: 'Regina Hill case: 96-year-old files lawsuit to force sale of homes',
  //   description:
  //     'Attorneys for the 96-year-old woman believed to have been exploited by former Orlando Commissioner Regina Hill have filed a lawsuit to force the sale of the ...',
  //   url: 'https://www.yahoo.com/news/regina-hill-case-96-old-222330391.html',
  //   urlToImage:
  //     'https://media.zenfs.com/en/wftv_cox_articles_135/511fbae2aa6cf04568139c9a77b3e119',
  //   publishedAt: new Date('2024-08-28T22:16:36Z'),
  //   content:
  //     'Attorneys for the 96-year-old woman believed to have been exploited by former Orlando Commissioner Regina Hill have filed a lawsuit to force the sale of the home Hill allegedly bought with the womans… [+2348 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'fox8.com',
  //   },
  //   author: 'Suzanne Stratford',
  //   title:
  //     'Musician seriously injured in Elyria police chase; fighting for his life in hospital',
  //   description:
  //     'Rob “Runt” Vormelker2, a husband, father and local musician, is fighting for his life at University Hospitals in Cleveland after being caught in the middle...',
  //   url: 'https://fox8.com/news/musician-seriously-injured-in-elyria-police-chase-fighting-for-his-life-in-hospital/',
  //   urlToImage:
  //     'https://media.zenfs.com/en/wjw_articles_784/4549615a252479b5afd89af295e20051',
  //   publishedAt: new Date('2024-08-29T02:07:40Z'),
  //   content:
  //     'ELYRIA, Ohio (WJW) A husband, father and local musician is fighting for his life at University Hospitals in Cleveland after being caught in the middle of a high-speed police pursuit in Lorain County.… [+2712 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yahoo Entertainment',
  //   },
  //   author: 'Alyssa Ochs',
  //   title:
  //     "Analysis warns that the cost of an everyday household item may surge by over 60% — here's what could happen",
  //   description:
  //     '"Such tariffs would likely increase consumer prices, cause fewer jobs for American workers, and extend Americans\' reliance on dirty energy."',
  //   url: 'https://www.yahoo.com/news/analysis-warns-cost-everyday-household-103047531.html',
  //   urlToImage:
  //     'https://s.yimg.com/ny/api/res/1.2/D9hFUaxf3wPQJLeK_KDu3g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_cool_down_737/c5db10ee0b86376a91c1f485e4426514',
  //   publishedAt: new Date('2024-08-28T10:30:47Z'),
  //   content:
  //     'If the U.S. government approves newly proposed tariffs on Southeast Asian imports, solar panel prices could rise by two-thirds.\r\nWith this dramatic cost increase, solar project progress would be stun… [+2848 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'CNET',
  //   },
  //   author: 'Zachary McAuliffe',
  //   title: "Google Isn't the Only Search Engine. Try These 5 Others Instead",
  //   description:
  //     'These alternate search engines can help you cut ties to Google.',
  //   url: 'https://www.cnet.com/tech/services-and-software/google-isnt-the-only-search-engine-try-these-5-others-instead/',
  //   urlToImage:
  //     'https://www.cnet.com/a/img/resize/a7415649a65dda42b81a4f3bc7ca5dd4d006e86d/hub/2024/08/05/a002b000-9930-45ba-8cee-916f8f8ee406/google-pixel-camera-lab-8397.jpg?auto=webp&fit=crop&height=675&width=1200',
  //   publishedAt: new Date('2024-08-28T12:00:03Z'),
  //   content:
  //     "On Aug. 5, a federal judge ruled that Google illegally maintained a monopoly in search, violating the antitrust laws. While Google remains the biggest name in search, it's not the only player in the … [+4120 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yanko Design',
  //   },
  //   author: 'Ida Torres',
  //   title:
  //     'Birdhouse lets budding ornithologists interact safely with the birds',
  //   description:
  //     'Birdhouse lets budding ornithologists interact safely with the birdsOne of the more interesting and “interactive” ways we can commune with nature is by observing birds. There’s a reason why there are a lot...',
  //   url: 'https://www.yankodesign.com/2024/08/28/birdhouse-lets-budding-ornithologists-interact-safely-with-the-birds/',
  //   urlToImage:
  //     'https://www.yankodesign.com/images/design_news/2024/08/birdhouse-lets-budding-ornithologists-interact-safely-with-the-birds/1.jpg',
  //   publishedAt: new Date('2024-08-28T14:20:58Z'),
  //   content:
  //     'One of the more interesting and “interactive” ways we can commune with nature is by observing birds. There’s a reason why there are a lot of birdwatching groups and bird watchers themselves, even tho… [+1554 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yanko Design',
  //   },
  //   author: 'Srishti Mitra',
  //   title:
  //     'This ‘Plant-Based’ Cabin In Austin Eliminates Heavily Processed Or Synthesized Materials',
  //   description:
  //     'This ‘Plant-Based’ Cabin In Austin Eliminates Heavily Processed Or Synthesized MaterialsTexas-based Moontower Design Build recently created a “plant-based” cabin in Austin equipped with clever cross-laminated timber structural elements and a cork-clad facade.…',
  //   url: 'https://www.yankodesign.com/2024/08/28/this-plant-based-cabin-in-austin-eliminates-heavily-processed-or-synthesized-materials/',
  //   urlToImage:
  //     'https://www.yankodesign.com/images/design_news/2024/08/cross-cabin/cross_cabin_yanko_design_01.jpg',
  //   publishedAt: new Date('2024-08-28T23:30:39Z'),
  //   content:
  //     'Texas-based Moontower Design Build recently created a “plant-based” cabin in Austin equipped with clever cross-laminated timber structural elements and a cork-clad facade. Named the Cross Cabin, the … [+2381 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yanko Design',
  //   },
  //   author: 'Vincent Nguyen',
  //   title:
  //     'The Ultra lightweight Wind Anchor Backpacking Tent sets up in 60 seconds and moves in just 10',
  //   description:
  //     'The Ultra lightweight Wind Anchor Backpacking Tent sets up in 60 seconds and moves in just 10Camping should be about embracing the adventure, not battling with your gear. Thecatal’s Wind Anchor takes ultralight camping to the next level, combining innovative …',
  //   url: 'https://www.yankodesign.com/2024/08/28/the-ultra-lightweight-wind-anchor-backpacking-tent-sets-up-in-60-seconds-and-moves-in-just-10/',
  //   urlToImage:
  //     'https://www.yankodesign.com/images/design_news/2024/08/wind-anchor-is-the-ultimate-lightweight-backpacking-tent-with-10-second-setup-for-adventurers/Wind_Anchor_Ultra_Light_Sets_Up_in_10s_Backpacking_Tent_hero.jpg',
  //   publishedAt: new Date('2024-08-29T01:45:21Z'),
  //   content:
  //     'Camping should be about embracing the adventure, not battling with your gear. Thecatals Wind Anchor takes ultralight camping to the next level, combining innovative design, durability, and unmatched … [+9329 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Yanko Design',
  //   },
  //   author: 'Sarang Sheth',
  //   title:
  //     'The New Ford Nugget Camper-Van boasts a Wardrobe, Bathroom, L-Shaped Kitchen, and a Hybrid Powertrain',
  //   description:
  //     'The New Ford Nugget Camper-Van boasts a Wardrobe, Bathroom, L-Shaped Kitchen, and a Hybrid PowertrainThe Ford Nugget camper van lineup just got a significant upgrade, perfect for those embracing the #VanLife trend or looking to dip their toes into...',
  //   url: 'https://www.yankodesign.com/2024/08/28/the-new-ford-nugget-camper-van-boasts-a-wardrobe-bathroom-l-shaped-kitchen-and-a-hybrid-powertrain/',
  //   urlToImage:
  //     'https://www.yankodesign.com/images/design_news/2024/08/draft-ford/ford_nugget_camper_van_1.jpeg',
  //   publishedAt: new Date('2024-08-28T19:15:04Z'),
  //   content:
  //     'The Ford Nugget camper van lineup just got a significant upgrade, perfect for those embracing the #VanLife trend or looking to dip their toes into the nomadic lifestyle. Building on last years redesi… [+4477 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Uncrate.com',
  //   },
  //   author: null,
  //   title: 'Norse Projects Holman Wax Fishing Jacket',
  //   description:
  //     "The traditional fishing jacket is a timeless wardrobe staple. This version from Norse Projects leans into its rugged nature with smart weather-resistant features. It's crafted from Staywax fabric, a new generation of waxed fabrics from renowned British Miller…",
  //   url: 'https://shop.uncrate.com/products/norse-projects-holman-wax-fishing-jacket',
  //   urlToImage:
  //     'http://shop.uncrate.com/cdn/shop/files/norse-projects-holman-wax-fishing-jacket-1.jpg?v=1724871708',
  //   publishedAt: new Date('2024-08-28T22:52:25Z'),
  //   content:
  //     "Editor’s Note\r\nThe traditional fishing jacket is a timeless wardrobe staple. This version from Norse Projects leans into its rugged nature with smart weather-resistant features. It's crafted from Sta… [+424 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Science Daily',
  //   },
  //   author: null,
  //   title: 'Rain or shine? How rainfall impacts size of sea turtle hatchlings',
  //   description:
  //     'An internationally collaborative study delves into how fluctuating rainfall impacts the development of sea turtle hatchlings, revealing that it has a more profound effect than changes in air temperature. Regional weather influences incubation and hatchling de…',
  //   url: 'https://www.sciencedaily.com/releases/2024/08/240828114345.htm',
  //   urlToImage: 'https://www.sciencedaily.com/images/scidaily-icon.png',
  //   publishedAt: new Date('2024-08-28T15:43:45Z'),
  //   content:
  //     'Female sea turtles lay their eggs, cover the nest with sand and then return to the ocean, leaving them to develop and hatch on their own. From nest predators to rising temperatures, odds of survival … [+4516 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Science Daily',
  //   },
  //   author: null,
  //   title: 'Love is blind for male fruit flies who will choose sex over safety',
  //   description:
  //     'Male fruit flies will become oblivious to physical danger as they become more engaged in courtship and sex.',
  //   url: 'https://www.sciencedaily.com/releases/2024/08/240828114343.htm',
  //   urlToImage: 'https://www.sciencedaily.com/images/scidaily-icon.png',
  //   publishedAt: new Date('2024-08-28T15:43:43Z'),
  //   content:
  //     'Male fruit flies will become oblivious to physical danger as they become more engaged in courtship and sex, new research shows.Researchers at the University of Birmingham have shown that pursuit of a… [+2981 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'DIYphotography',
  //   },
  //   author: 'Dunja Djudjic',
  //   title:
  //     'These five apps will raise your phone photos and videos to a whole new level',
  //   description:
  //     'Smartphones have come a long way and they’re our go-to tool for taking photos and videos on the go. As a hobbyist, I often don’t...\nThe post These five apps will raise your phone photos and videos to a whole new level appeared first on DIY Photography.',
  //   url: 'https://www.diyphotography.net/these-five-apps-will-raise-your-phone-photos-and-videos-to-a-whole-new-level/',
  //   urlToImage:
  //     'https://www.diyphotography.net/wp-content/uploads/2024/08/ttnm4qpjqog.jpg',
  //   publishedAt: new Date('2024-08-28T10:01:59Z'),
  //   content:
  //     'Smartphones have come a long way and theyre our go-to tool for taking photos and videos on the go. As a hobbyist, I often dont even carry my DSLR on hikes and travels, I rely on my phone for those ca… [+2686 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'DIYphotography',
  //   },
  //   author: 'Dunja Djudjic',
  //   title: 'Can a £17 TikTok camera really be that bad?',
  //   description:
  //     'Perhaps you’ve heard of the CLS, the TikTok compact camera that promises the coveted retro look of early 2000s CCD digital cameras. It costs only...\nThe post Can a £17 TikTok camera really be that bad? appeared first on DIY Photography.',
  //   url: 'https://www.diyphotography.net/can-a-17-tiktok-camera-really-be-that-bad/',
  //   urlToImage:
  //     'https://www.diyphotography.net/wp-content/uploads/2024/08/z_gd7m3xx2a.jpg',
  //   publishedAt: new Date('2024-08-28T11:38:20Z'),
  //   content:
  //     'Perhaps youve heard of the CLS, the TikTok compact camera that promises the coveted retro look of early 2000s CCD digital cameras. It costs only £17 (around $22), and Tom Calton recently got his hand… [+2419 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Skinnytaste.com',
  //   },
  //   author: 'Gina',
  //   title: 'Asian Grilled Chicken',
  //   description:
  //     'This Asian Grilled Chicken recipe is the perfect excuse to grill or use your indoor grill pan, an easy high-protein dinner idea! Asian Grilled Chicken I love to make this tasty Asian-inspired grilled chicken recipe when the weather is warm, as it’s excellent …',
  //   url: 'https://www.skinnytaste.com/asian-grilled-chicken-33-pts_3510/',
  //   urlToImage:
  //     'https://www.skinnytaste.com/wp-content/uploads/2008/05/Asian-Grilled-Chicken-6.jpg',
  //   publishedAt: new Date('2024-08-28T19:12:02Z'),
  //   content:
  //     'This post may contain affiliate links. Read my disclosure policy.\r\nThis Asian Grilled Chicken recipe is the perfect excuse to grill or use your indoor grill pan, an easy high-proteindinner idea!\r\nAsi… [+5541 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'GameSpot',
  //   },
  //   author: 'Phil Hornshaw',
  //   title: "Winter Burrow Is Like A Cozy Take On Don't Starve",
  //   description:
  //     "After years of refinement, crafting and survival games have developed a pretty effective formula: You're dropped into a place where you gather sticks, you use the sticks to make an axe, the axe lets you cut down trees, and before long, you're making a whole s…",
  //   url: 'https://www.gamespot.com/articles/winter-burrow-is-like-a-cozy-take-on-dont-starve/1100-6526174/',
  //   urlToImage:
  //     'https://www.gamespot.com/a/uploads/screen_kubrick/1581/15811374/4358729-winter-burrow_by_pine-creek-games_screenshot_v01.jpg',
  //   publishedAt: new Date('2024-08-28T20:33:00Z'),
  //   content:
  //     "After years of refinement, crafting and survival games have developed a pretty effective formula: You're dropped into a place where you gather sticks, you use the sticks to make an axe, the axe lets … [+6205 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Space.com',
  //   },
  //   author: 'daisy.dobrijevic@space.com (Daisy Dobrijevic)',
  //   title:
  //     'Auroral substorm sparks stunning northern lights visible at mid-latitudes (photos)',
  //   description:
  //     "A moderate G2 geomagnetic storm sparked auroras at mid-latitudes, and we've rounded up some of the best northern lights photos here.",
  //   url: 'https://www.space.com/aurora-substorm-northern-lights-aug-2024',
  //   urlToImage:
  //     'https://cdn.mos.cms.futurecdn.net/wES7AnppLCmowG2WZYtN4T-1200-80.jpg',
  //   publishedAt: new Date('2024-08-28T14:00:46Z'),
  //   content:
  //     'A coronal mass ejection (CME) struck Earth last night. At first, it appeared weak and failed to trigger an immediate magnetic storm. But like they say in the iconic fable "The Hare and the Tortoise,"… [+6262 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Space.com',
  //   },
  //   author: 'elizabeth.howell@futurenet.com (Elizabeth Howell)',
  //   title:
  //     "What time is Blue Origin's private NS-26 astronaut launch on Aug. 29 (and how to watch live)",
  //   description:
  //     "Blue Origin's New Shepard rocket and RSS First Step capsule will launch 6 people to suborbital space on Aug. 29. Here's when and where.",
  //   url: 'https://www.space.com/blue-origin-private-astronaut-launch-ns-26-what-time-livestream',
  //   urlToImage:
  //     'https://cdn.mos.cms.futurecdn.net/LrSnuhk7JcEWSHneGQyika-1200-80.jpg',
  //   publishedAt: new Date('2024-08-28T14:00:59Z'),
  //   content:
  //     'Blue Origin is set to launch another six people to space on Thursday (Aug. 29), and you can watch it live online.\r\nBlue Origin is currently targeting Thursday to send six space tourists to suborbital… [+4439 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Space.com',
  //   },
  //   author: 'mwall@space.com (Mike Wall)',
  //   title:
  //     'SpaceX delays Polaris Dawn astronaut launch until at least Aug. 30 due to bad weather',
  //   description:
  //     "SpaceX scrubbed the planned Aug. 28 launch of the Polaris Dawn astronaut mission due to bad weather. The mission now won't fly until Friday (Aug. 30) at the earliest.",
  //   url: 'https://www.space.com/spacex-polaris-dawn-weather-delay-august-2024',
  //   urlToImage:
  //     'https://cdn.mos.cms.futurecdn.net/6RgWtcpUQDWqT4jLJ4gTJV-1200-80.jpg',
  //   publishedAt: new Date('2024-08-28T03:01:17Z'),
  //   content:
  //     "SpaceX's historic Polaris Dawn astronaut mission has been delayed again.\r\nPolaris Dawn was originally scheduled to launch early Monday morning (Aug. 26) from NASA's Kennedy Space Center in Florida, b… [+2390 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Space.com',
  //   },
  //   author: 'mwall@space.com (Mike Wall)',
  //   title: 'FAA requires investigation into SpaceX Falcon 9 landing failure',
  //   description:
  //     "The FAA is requiring an investigation into the failed touchdown attempt of a SpaceX Falcon 9 rocket's first stage after a successful Starlink satellite launch early Wednesday morning (Aug. 28).",
  //   url: 'https://www.space.com/faa-investigation-spacex-rocket-landing-failure',
  //   urlToImage:
  //     'https://cdn.mos.cms.futurecdn.net/tHfW4pE8mBGoQb3ejWkMoP-1200-80.jpg',
  //   publishedAt: new Date('2024-08-28T21:03:39Z'),
  //   content:
  //     "SpaceX's workhorse Falcon 9 rocket has been grounded, at least for a little while.\r\nA Falcon 9 successfully launched 21 of SpaceX's Starlink satellites this morning (Aug. 28), sending them to orbit o… [+2344 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'collectSPACE.com',
  //   },
  //   author: 'robert@collectspace.com (Robert Z. Pearlman)',
  //   title:
  //     'Mock shuttle Pathfinder restored atop its stack at Alabama rocket center (photos)',
  //   description:
  //     'An early mockup of NASA\'s winged orbiters, Pathfinder was returned to its position atop a space shuttle propulsion "stack" at the U.S. Space & Rocket Center in Huntsville, Alabama.',
  //   url: 'http://www.collectspace.com/news/news-082824a-space-shuttle-pathfinder-lift-restoration.html',
  //   urlToImage:
  //     'https://cdn.mos.cms.futurecdn.net/fii3VLRkSuCaKqeK4yRufD-1200-80.jpg',
  //   publishedAt: new Date('2024-08-28T19:00:33Z'),
  //   content:
  //     'Pathfinder is back in its "space," three and a half years after it "landed" on Earth.\r\nAn early mockup of NASA\'s now-retired winged orbiters, Pathfinder was returned to its position atop a space shut… [+5257 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'ArchDaily',
  //   },
  //   author: 'Hana Abdel',
  //   title: 'Up House / MAS Architecture',
  //   description:
  //     'Regional architecture - The construction takes place in Soc Son, a suburban district of Hanoi, where the agricultural land has been tremendously reduced in accordance with local economic growth. Urban area and industrialized zone projects have decreased agric…',
  //   url: 'https://www.archdaily.com/1020630/up-house-mas-architecture',
  //   urlToImage:
  //     'https://images.adsttc.com/media/images/66cf/8258/d393/f10c/cb38/900e/large_jpg/up-house-mas-architecture_1.jpg?1724875382',
  //   publishedAt: new Date('2024-08-29T02:00:00Z'),
  //   content:
  //     '© HoangLe Photography\r\n+ 22\r\nMore SpecsLess Specs\r\n© HoangLe Photography\r\nRegional architecture - The construction takes place in Soc Son, a suburban district of Hanoi, where the agricultural land ha… [+3345 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Vox',
  //   },
  //   author: 'Benji Jones',
  //   title:
  //     'What the heck is “corn sweat” and is it making the Midwest more dangerous?',
  //   description:
  //     'Ah, yes, late August in the Midwest: a time for popsicles by the lake, a trip to the county fair, and, of course, extreme humidity made more miserable by … corn sweat. Corn sweat. It’s a thing! And people are talking about it.  The term refers to the moisture…',
  //   url: 'https://www.vox.com/down-to-earth/369117/corn-sweat-explained-heat-wave-midwest',
  //   urlToImage:
  //     'https://platform.vox.com/wp-content/uploads/sites/2/2024/08/GettyImages-1201467126.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200',
  //   publishedAt: new Date('2024-08-28T22:13:51Z'),
  //   content:
  //     'Ah, yes, late August in the Midwest: a time for popsicles by the lake, a trip to the county fair, and, of course, extreme humidity made more miserable by corn sweat.\r\nCorn sweat. Its a thing! And peo… [+4779 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'MacRumors',
  //   },
  //   author: 'Juli Clover',
  //   title: "iPhone 15 Pro Max vs. Google's New Pixel 9 Pro XL",
  //   description:
  //     "Apple is planning to unveil its new iPhone 16 models in September, but Google decided to move its usual October smartphone announcement to August, beating Apple to new AI-powered devices. We picked up Google's new Pixel 9 Pro XL and thought we'd compare it to…",
  //   url: 'https://www.macrumors.com/2024/08/28/iphone-15-pro-max-vs-pixel-9-pro-xl/',
  //   urlToImage:
  //     'https://images.macrumors.com/t/-hYd2Xu6jauqJCfZY3b8KfiiNrI=/2500x/article-new/2024/08/iP15Pro-vs-P9Pro-Thumb-2.jpg',
  //   publishedAt: new Date('2024-08-28T15:00:19Z'),
  //   content:
  //     'Apple is planning to unveil its new iPhone 16 models in September, but Google decided to move its usual October smartphone announcement to August, beating Apple to new AI-powered devices. We picked u… [+3520 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Stereogum',
  //   },
  //   author: 'Chris DeVille',
  //   title: 'Sunflower Bean – “Teach Me To Be Bad”',
  //   description:
  //     'Sunflower Bean’s new self-produced EP Shake is billed as some of the hardest, heaviest music of the indie trio’s career, a sentiment backed up by the snarling bluesy guitar riff that snakes its way through the title track. The instrumental for new single “Tea…',
  //   url: 'https://www.stereogum.com/2277755/sunflower-bean-teach-me-to-be-bad/music/',
  //   urlToImage:
  //     'https://static.stereogum.com/uploads/2024/08/Sunflower-Bean-Press-Photo-2-c-Yulissa-Benitez-1724793061-scaled.jpg',
  //   publishedAt: new Date('2024-08-28T14:49:08Z'),
  //   content:
  //     'Sunflower Bean’s new self-produced EP Shake is billed as some of the hardest, heaviest music of the indie trio’s career, a sentiment backed up by the snarling bluesy guitar riff that snakes its way t… [+1103 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Rolling Stone',
  //   },
  //   author: 'Jon Blistein',
  //   title:
  //     '‘Like Christmas’: Oasis Superfans Share Reunion Hopes and Favorite Memories',
  //   description:
  //     'Seven diehard fans spoke with Rolling Stone about the band following the news that Liam and Noel Gallagher would play a string of shows next summer',
  //   url: 'http://www.rollingstone.com/music/music-features/oasis-fans-memories-reunion-show-announcement-1235090272/',
  //   urlToImage:
  //     'https://www.rollingstone.com/wp-content/uploads/2024/08/GettyImages-51129218.jpg?w=1600&h=900&crop=1',
  //   publishedAt: new Date('2024-08-28T21:46:45Z'),
  //   content:
  //     'The first time Pablo Tiley saw Oasis was in March 1994, a month before the release of their debut single, “Supersonic.” They were alternating headliner spots with British rock group Whiteout and that… [+18306 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'MIT Technology Review',
  //   },
  //   author: 'Mara Johnson-Groh',
  //   title: 'Job title of the future: Weather maker',
  //   description:
  //     'Much of the western United States relies on winter snowpack to supply its rivers and reservoirs through the summer months. But with warming temperatures, less and less snow is falling—a recent study showed a 23% decline in annual snowpack since 1955. By some …',
  //   url: 'https://www.technologyreview.com/2024/08/28/1096738/digital-forest-ranger-future-jobs/',
  //   urlToImage:
  //     'https://wp.technologyreview.com/wp-content/uploads/2024/08/Frank-McDonough-2023.jpg?resize=1200,600',
  //   publishedAt: new Date('2024-08-28T10:00:00Z'),
  //   content:
  //     'Old tech, new urgency: The precipitation-­catalyzing properties of silver iodide were first explored in the 1940s by American chemists and engineers, but the field remained a small niche. Now, with 4… [+1166 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'MIT Technology Review',
  //   },
  //   author: 'Casey Crownhart',
  //   title:
  //     'Canada’s 2023 wildfires produced more emissions than fossil fuels in most countries',
  //   description:
  //     'This article is from The Spark, MIT Technology Review’s weekly climate newsletter. To receive it in your inbox every Wednesday, sign up here. Last year’s Canadian wildfires smashed records, burning about seven times more land in Canada’s forests than the annu…',
  //   url: 'https://www.technologyreview.com/2024/08/28/1103186/canada-wildfire-emissions/',
  //   urlToImage:
  //     'https://wp.technologyreview.com/wp-content/uploads/2024/08/AP23184324173710.jpg?resize=1200,600',
  //   publishedAt: new Date('2024-08-28T15:07:25Z'),
  //   content:
  //     'Now a new study reveals how these blazes can create a vicious cycle, contributing to climate change even as climate-fueled conditions make for worse wildfire seasons.  Emissions from 2023s Canadian w… [+1914 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Sara HUSSEIN',
  //   title:
  //     'South Asia air pollution fell in 2022, but remains major killer: report',
  //   description:
  //     'A surprise improvement in air quality in South Asia in 2022 drove a decline in global pollution, with favorable weather a likely factor, a new report said Wednesday.',
  //   url: 'https://phys.org/news/2024-08-south-asia-air-pollution-fell.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/south-asia-remains-the.jpg',
  //   publishedAt: new Date('2024-08-28T06:00:02Z'),
  //   content:
  //     'A surprise improvement in air quality in South Asia in 2022 drove a decline in global pollution, with favorable weather a likely factor, a new report said Wednesday.\r\nBut the region continues to brea… [+3820 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Science X',
  //   title: "During a heat wave, 'stay indoors' can bring hazards, too",
  //   description:
  //     'With Chicago and much of the Midwest facing what may be the hottest days of the summer this week, many are cranking up the air conditioning and heeding the advice of officials to stay inside.',
  //   url: 'https://phys.org/news/2024-08-stay-indoors-hazards.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/during-a-heat-wave-sta.jpg',
  //   publishedAt: new Date('2024-08-28T18:17:04Z'),
  //   content:
  //     'With Chicago and much of the Midwest facing what may be the hottest days of the summer this week, many are cranking up the air conditioning and heeding the advice of officials to stay inside.\r\nBut co… [+4559 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Science X',
  //   title: 'Ozone monitoring continues to improve, researchers report',
  //   description:
  //     "The troposphere comprises the lowest layer of Earth's atmosphere, stretching from the planet's surface to a little over eight miles into the sky. It also contains about 10% of the ozone in the atmosphere, but that 10% is heavily influenced by human activity a…",
  //   url: 'https://phys.org/news/2024-08-ozone.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/ozone-monitoring-conti-1.jpg',
  //   publishedAt: new Date('2024-08-28T20:35:03Z'),
  //   content:
  //     "The troposphere comprises the lowest layer of Earth's atmosphere, stretching from the planet's surface to a little over eight miles into the sky. It also contains about 10% of the ozone in the atmosp… [+3548 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Science X',
  //   title:
  //     'Canadian insurers and municipalities sharing data could improve availability, affordability of flood insurance',
  //   description:
  //     'The increasing cost of flood damage has seen property insurance become less affordable for many Canadians. New research from the University of Waterloo shows that if insurers and local governments pooled information on investment in flood-risk management, tha…',
  //   url: 'https://phys.org/news/2024-08-canadian-municipalities-availability.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/hires/2024/insurers-and-municipal.jpg',
  //   publishedAt: new Date('2024-08-28T18:35:03Z'),
  //   content:
  //     'The increasing cost of flood damage has seen property insurance become less affordable for many Canadians. New research from the University of Waterloo shows that if insurers and local governments po… [+2647 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Annalisa Bracco, Zachary Handlos',
  //   title:
  //     "What is an Atlantic Niña? How La Niña's smaller cousin could affect hurricane season",
  //   description:
  //     'The North Atlantic Ocean has been running a fever for months, with surface temperatures at or near record highs. But cooling along the equator in both the Atlantic and eastern Pacific may finally be starting to bring some relief, particularly for vulnerable c…',
  //   url: 'https://phys.org/news/2024-08-atlantic-nia-la-smaller-cousin.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/hires/2024/what-is-an-atlantic-ni.jpg',
  //   publishedAt: new Date('2024-08-28T15:09:06Z'),
  //   content:
  //     'The North Atlantic Ocean has been running a fever for months, with surface temperatures at or near record highs. But cooling along the equator in both the Atlantic and eastern Pacific may finally be … [+5244 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Quartz India',
  //   },
  //   author: 'Ben Kesslen',
  //   title: 'Space X delays Polaris Dawn launch for a third time',
  //   description:
  //     'SpaceX delayed its Polaris Dawn mission for a third time on Tuesday evening— a troubling sign for the risky mission in which a billionaire is slated to complete the first private spacewalk.Read more...',
  //   url: 'https://qz.com/space-x-polaris-dawn-launch-delayed-third-time-1851633947',
  //   urlToImage:
  //     'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1df3dd5c5fc01a28ef8455b12be570c7.jpg',
  //   publishedAt: new Date('2024-08-28T14:10:00Z'),
  //   content:
  //     'SpaceX delayed its Polaris Dawn mission for a third time on Tuesday evening a troubling sign for the risky mission in which a billionaire is slated to complete the first private spacewalk.\r\nSpaceX sa… [+1183 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Quartz India',
  //   },
  //   author: 'Madeline Fitzgerald',
  //   title:
  //     'Burning Man kicks off with hundreds of private jets descending on the Nevada desert',
  //   description:
  //     'Despite the reported decline in anticipated guests at this year’s Burning Man festival, hundreds of private and chartered planes descended on the Nevada desert this week, in anticipation of the annual counterculture event.Read more...',
  //   url: 'https://qz.com/burning-man-private-jets-nevada-desert-black-rock-city-1851634047',
  //   urlToImage:
  //     'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1aaf96ca3dde5d85c03466aef3d1eadf.jpg',
  //   publishedAt: new Date('2024-08-28T15:20:03Z'),
  //   content:
  //     'Despite the reported decline in anticipated guests at this years Burning Man festival, hundreds of private and chartered planes descended on the Nevada desert this week, in anticipation of the annual… [+1575 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Adafruit.com',
  //   },
  //   author: 'phillip torrone',
  //   title: 'TMS8828 multi-zone time-of-flight sensor from ams OSRAM',
  //   description:
  //     'We stock many ST VL5 series ToF sensors (https://www.adafruit.com/search?q=VL5), but it’s always a good idea to peek at what else is available on the market. Here’s a multi-zone Time of Flight sensor from ams OSRAM – the TMF8828 (https://www.digikey.com/en/pr…',
  //   url: 'https://blog.adafruit.com/2024/08/27/tms8828-multi-zone-time-of-flight-sensor-from-ams-osram/',
  //   urlToImage: 'https://cdn-blog.adafruit.com/uploads/2024/08/TMS8828.png',
  //   publishedAt: new Date('2024-08-28T00:58:24Z'),
  //   content:
  //     'Adafruit publishes a wide range of writing and video content, including interviews and reporting on the maker market and the wider technology world. Our standards page is intended as a guide to best … [+2676 chars]',
  // },
  // {
  //   source: {
  //     id: 'al-jazeera-english',
  //     name: 'Al Jazeera English',
  //   },
  //   author: 'Al Jazeera',
  //   title: 'Japan issues emergency warning as Typhoon Shanshan approaches',
  //   description:
  //     'Authorities on Kyushu and Honshu islands order evacuations and carmaker Toyota suspends operations at 14 plants.',
  //   url: 'https://www.aljazeera.com/news/2024/8/28/japan-issues-emergency-warning-as-typhoon-shanshan-approaches',
  //   urlToImage:
  //     'https://www.aljazeera.com/wp-content/uploads/2024/08/2024-08-28T024134Z_1906470851_RC2QO9A5D6IA_RTRMADP_3_ASIA-WEATHER-JAPAN-1-1724828923.jpg?resize=1920%2C1440',
  //   publishedAt: new Date('2024-08-28T08:49:46Z'),
  //   content:
  //     'Japan has issued an emergency warning as a powerful typhoon approaches its southwest, prompting carmaker Toyota to shutter factories and airlines to cancel flights.\r\nThe Japan Meteorological Agency (… [+2532 chars]',
  // },
  // {
  //   source: {
  //     id: 'al-jazeera-english',
  //     name: 'Al Jazeera English',
  //   },
  //   author: 'Al Jazeera',
  //   title: 'The Paris Paralympics open in blaze of colour',
  //   description:
  //     'The games, which open two and a half weeks after the end of the Olympics, will run until September 8.',
  //   url: 'https://www.aljazeera.com/gallery/2024/8/28/the-paris-paralympics-open-in-blaze-of-colour',
  //   urlToImage:
  //     'https://www.aljazeera.com/wp-content/uploads/2024/08/AFP__20240828__36EY3H3__v1__Preview__OlyParis2024ParalympicsOpening-1724870719_a2f74c-1724871686.jpg?resize=1200%2C630&quality=80',
  //   publishedAt: new Date('2024-08-28T20:37:55Z'),
  //   content:
  //     'The opening ceremony of the Paris Paralympics has been held in the centre of the French capital, firing the starting gun on 11 days of intense competition.\r\nJust as for the opening ceremony of the Ol… [+1787 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'GSMArena.com',
  //   },
  //   author: 'Yordan',
  //   title: 'Vivo Y300 Pro arriving next week with several company firsts',
  //   description:
  //     'The vivo Y300 Pro will arrive next week, revealed Jia Jingdong, President of vivo and GM of Brand and Product Strategy.\n\nThe phone will be introduced in China on September 5, and the executive wrote a long post on Weibo, explaining all the new key features li…',
  //   url: 'https://www.gsmarena.com/vivo_y300_pro_arriving_next_week_with_several_company_firsts-news-64305.php',
  //   urlToImage:
  //     'https://fdn.gsmarena.com/imgroot/news/24/08/vivo-y300-pro-ofic-date/-952x498w6/gsmarena_001.jpg',
  //   publishedAt: new Date('2024-08-28T07:07:02Z'),
  //   content:
  //     'The vivo Y300 Pro will arrive next week, revealed Jia Jingdong, President of vivo and GM of Brand and Product Strategy.\r\nThe phone will be introduced in China on September 5, and the executive wrote … [+1763 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Science X',
  //   title: 'Extreme weather threatens survival of seabirds and seals',
  //   description:
  //     'Scientists have identified the Australian and Antarctic marine predators most vulnerable to the impacts of climate change, and it will help focus conservation efforts for species under threat.',
  //   url: 'https://phys.org/news/2024-08-extreme-weather-threatens-survival-seabirds.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/extreme-weather-threat.jpg',
  //   publishedAt: new Date('2024-08-28T16:46:03Z'),
  //   content:
  //     'Scientists have identified the Australian and Antarctic marine predators most vulnerable to the impacts of climate change, and it will help focus conservation efforts for species under threat.\r\nThe n… [+3684 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Audrey Merket',
  //   title:
  //     'Kelvin wave research may lead to more accurate forecasting of active hurricane periods',
  //   description:
  //     'More accurately predicting periods of increased hurricane activity weeks in advance may become possible due to new research published this month published in the journal Monthly Weather Review.',
  //   url: 'https://phys.org/news/2024-08-kelvin-accurate-hurricane-periods.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/making-waves-in-hurric.jpg',
  //   publishedAt: new Date('2024-08-28T19:14:04Z'),
  //   content:
  //     'More accurately predicting periods of increased hurricane activity weeks in advance may become possible due to new research published this month published in the journal Monthly Weather Review.\r\nThe … [+4076 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Science X',
  //   title: 'Thousands without power as high winds batter southern Australia',
  //   description:
  //     'Almost 20,000 people were without power in southern Australia Wednesday after wild winds brought down trees and power lines.',
  //   url: 'https://phys.org/news/2024-08-thousands-power-high-batter-southern.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/a-woman-and-her-dog-ar.jpg',
  //   publishedAt: new Date('2024-08-28T12:48:39Z'),
  //   content:
  //     'Almost 20,000 people were without power in southern Australia Wednesday after wild winds brought down trees and power lines.\r\nElectricity network operator AusNet reported 72 separate outages across t… [+923 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Phys.Org',
  //   },
  //   author: 'Kyoko HASEGAWA',
  //   title: "Three missing as 'extremely strong' typhoon nears Japan",
  //   description:
  //     'Japan warned Wednesday that an "extremely strong" typhoon bearing down on the main southern island of Kyushu would bring unusually violent storms, as three people remained missing after a landslide.',
  //   url: 'https://phys.org/news/2024-08-extremely-strong-typhoon-nears-japan.html',
  //   urlToImage:
  //     'https://scx2.b-cdn.net/gfx/news/2024/two-people-were-rescue.jpg',
  //   publishedAt: new Date('2024-08-28T05:48:43Z'),
  //   content:
  //     'Japan warned Wednesday that an "extremely strong" typhoon bearing down on the main southern island of Kyushu would bring unusually violent storms, as three people remained missing after a landslide.\r… [+3040 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Adafruit.com',
  //   },
  //   author: 'Kelly',
  //   title: '6 Inventions That Are Older Than You Think',
  //   description:
  //     'Check out this fun new video from SciShow that features the surprising timelines of six well known inventions. I have to admit the story behind the sixth invention (voice recognition) definitely took me by surprise!',
  //   url: 'https://blog.adafruit.com/2024/08/28/6-inventions-that-are-older-than-you-think/',
  //   urlToImage:
  //     'https://cdn-blog.adafruit.com/uploads/2024/08/6-inventions-that-are-older-than.jpg',
  //   publishedAt: new Date('2024-08-28T12:00:59Z'),
  //   content:
  //     'Adafruit publishes a wide range of writing and video content, including interviews and reporting on the maker market and the wider technology world. Our standards page is intended as a guide to best … [+2676 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'NASA',
  //   },
  //   author: 'Kelli Mars',
  //   title:
  //     '15 Years Ago: STS-128 Delivers Cargo to Enable Six-Person Space Station Crew',
  //   description:
  //     'On Aug. 28, 2009, space shuttle Discovery began its 37th trip into space. The 17A mission to the International Space Station was the 30th shuttle flight to the orbiting lab. During the 14-day mission, the seven-member STS-128 crew worked with Expedition 20, t…',
  //   url: 'https://www.nasa.gov/history/15-years-ago-sts-128-delivers-cargo-to-enable-six-person-space-station-crew/',
  //   urlToImage:
  //     'https://www.nasa.gov/wp-content/uploads/2024/08/sts-128-42-crew-w-discovery-postlanding-sts128-s-050.jpg',
  //   publishedAt: new Date('2024-08-28T16:10:29Z'),
  //   content:
  //     'On Aug. 28, 2009, space shuttle Discovery began its 37th trip into space. The 17A mission to the International Space Station was the 30th shuttle flight to the orbiting lab. During the 14-day mission… [+12953 chars]',
  // },
  // {
  //   source: {
  //     id: 'espn',
  //     name: 'ESPN',
  //   },
  //   author: 'Rob Demovsky',
  //   title: 'Packers punt on in-house kicker, claim Narveson',
  //   description:
  //     'The Packers claimed rookie Brayden Narveson off waivers from the Titans on Wednesday, choosing to go outside the organization to bring in a kicker after Anders Carlson and Greg Joseph failed to secure the job.',
  //   url: 'https://www.espn.com/nfl/story/_/id/41031719/packers-claim-brayden-narveson-amid-unique-kicking-situation',
  //   urlToImage:
  //     'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0828%2Fr1378947_1296x729_16%2D9.jpg',
  //   publishedAt: new Date('2024-08-28T21:53:23Z'),
  //   content:
  //     'GREEN BAY, Wis. -- By the time the Green Bay Packers got to the end of their summer-long placekicking competition, they punted.\r\nAfter an underwhelming battle between their 2023 kicker, Anders Carlso… [+4310 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'New Atlas',
  //   },
  //   author: 'C.C. Weiss',
  //   title:
  //     'Self-driving bike camper provides limitless range on land and water',
  //   description:
  //     'Over the years, Latvian innovator BeTriton has developed some of the most intriguing mobility transformers the world over, starting with its triple-function electric tricycle/motorhome/boat. It was a perfectly inspiring product at the perfect time – mid-2020.…',
  //   url: 'https://newatlas.com/outdoors/betriton-self-driving-amphibious-bike-camper/',
  //   urlToImage:
  //     'https://assets.newatlas.com/dims4/default/858b25b/2147483647/strip/true/crop/6240x3276+0+442/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fca%2F54%2Faac4ebb640da886546692b6ff9b9%2Ffoto-markovskis-4725.jpg&na.image_optimisation=0',
  //   publishedAt: new Date('2024-08-28T21:14:52Z'),
  //   content:
  //     'Over the years, Latvian innovator BeTriton has developed some of the most intriguing mobility transformers the world over, starting with its triple-function electric tricycle/motorhome/boat. It was a… [+5453 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Adventure.com',
  //   },
  //   author: 'Kassondra Cloos',
  //   title:
  //     'Could a new hiking trail bring new, full-time residents? Sweden thinks so',
  //   description:
  //     'A brand-new hiking trail spanning the Stockholm Archipelago is the first of its kind.\nThe post Could a new hiking trail bring new, full-time residents? Sweden thinks so appeared first on Adventure.com.',
  //   url: 'https://adventure.com/stockholm-archipelago-trail/',
  //   urlToImage:
  //     'https://adventure.com/wp-content/uploads/2024/08/DSCF9036-2-scaled.jpg',
  //   publishedAt: new Date('2024-08-29T03:01:00Z'),
  //   content:
  //     'As for what to expect? The trail is surprisingly diverse, especially for a string of relatively tiny islands in close proximity. Some islands are almost completely wild, with no year-round residents,… [+1127 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Gothamist',
  //   },
  //   author: 'Brittany Kriegstein',
  //   title:
  //     "Hot and humid Wednesday in NYC, but it won't last long, forecasters say",
  //   description:
  //     'New Yorkers will need to find more ways of staying cool Wednesday.\n \n\nIt may feel like 100 degrees during the day Wednesday but cooler temps are expected by evening. [ more › ]',
  //   url: 'https://gothamist.com/news/hot-and-humid-wednesday-in-nyc-but-it-wont-last-long-forecasters-say',
  //   urlToImage:
  //     'https://api-prod.gothamist.com/images/346837/fill-1200x650|format-webp|webpquality-85/',
  //   publishedAt: new Date('2024-08-28T14:57:00Z'),
  //   content:
  //     'New Yorks hot sweaty summer isnt giving way to September without a fight: Meteorologists say today will bring high temps and humidity but not for long.\r\nIt looks like a kind of a one-day heat event h… [+1465 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Gadgethacks.com',
  //   },
  //   author: 'Jovana Naumovski',
  //   title:
  //     "Apple's Weather App Just Got 13 New Features and Changes in the Latest iPhone Software Update",
  //   description:
  //     "Apple's Weather app keeps getting better and more refined with each new software update. For example, 2023's big update gave us yesterday's weather, averages, and wind maps, while 2022's unleashes Lock Screen widgets, severe weather alerts, and an iPad versio…",
  //   url: 'https://ios.gadgethacks.com/how-to/apples-weather-app-just-got-13-new-features-and-changes-latest-iphone-software-update-0385607/',
  //   urlToImage:
  //     'https://img.gadgethacks.com/img/38/87/63860437912918/0/apples-weather-app-just-got-13-new-features-and-changes-latest-iphone-software-update.1280x600.jpg',
  //   publishedAt: new Date('2024-08-28T17:37:00Z'),
  //   content:
  //     "Apple's Weather app keeps getting better and more refined with each new software update. For example, 2023's big update gave us yesterday's weather, averages, and wind maps, while 2022's unleashes Lo… [+7333 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Grist',
  //   },
  //   author: 'Syris Valentine',
  //   title:
  //     'Methane leaks are a climate problem. These satellites could help find them.',
  //   description:
  //     'Data from a new fleet of satellites is poised to change how we monitor — and mitigate — a potent greenhouse gas.',
  //   url: 'https://grist.org/looking-forward/methane-leaks-are-a-climate-problem-these-satellites-could-help-find-them/',
  //   urlToImage:
  //     'https://grist.org/wp-content/uploads/2024/08/0828_Satellite_Social.jpg?quality=75&strip=all',
  //   publishedAt: new Date('2024-08-28T14:59:42Z'),
  //   content:
  //     'The vision\r\n“It doesnt matter how many thermographers we have, boots on the ground, satellites flying in the air, people with drones and airplanes and all the other technology, none of it matters if … [+9973 chars]',
  // },
  // {
  //   source: {
  //     id: 'cbc-news',
  //     name: 'CBC News',
  //   },
  //   author: null,
  //   title:
  //     "'Erase these messages': New details emerge from fatal St. Lawrence River human smuggling run",
  //   description:
  //     'One of the key players allegedly behind a fatal cross-border human smuggling run that ended in the St. Lawrence River drowning deaths last March of nine people — including a toddler and an infant —  is currently facing an extradition request from the U.S. on …',
  //   url: 'https://www.cbc.ca/news/investigates/erase-these-messages-new-details-emerge-from-fatal-st-lawrence-river-human-smuggling-run-1.7306433',
  //   urlToImage:
  //     'https://i.cbc.ca/1.7306438.1724799409!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_620/stephanie-square.jpeg',
  //   publishedAt: new Date('2024-08-28T00:04:52Z'),
  //   content:
  //     'One of the key players allegedly behind a fatal cross-border human smuggling run that ended in the St. Lawrence River drowning deaths last March of nine people including two young children   is curre… [+5980 chars]',
  // },
  // {
  //   source: {
  //     id: 'cbc-news',
  //     name: 'CBC News',
  //   },
  //   author: null,
  //   title:
  //     "Only 3 countries produced more emissions than Canada's wildfires last year, study finds",
  //   description:
  //     'The wildfires that ripped through Canada’s forests last year produced more carbon emissions than the burning of fossil fuels in all but three countries, according to new research in the journal Nature.',
  //   url: 'https://www.cbc.ca/news/climate/wildfire-emissions-country-totals-1.7307324',
  //   urlToImage:
  //     'https://i.cbc.ca/1.7256453.1720299091!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/kelowna-wildfire-august-22-helicopter.jpg',
  //   publishedAt: new Date('2024-08-28T20:37:01Z'),
  //   content:
  //     "The wildfires that ripped through Canada's boreal forest last year produced more carbon emissions than the burning of fossil fuels in all but three countries, a new study has found.\r\nThe study, publi… [+2813 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Geeksaresexy.net',
  //   },
  //   author: 'Geeks are Sexy',
  //   title: 'Twisters Gets the “Honest Trailers” Treatment',
  //   description:
  //     'Grab your umbrellas and hold on to your cows, because Twister$ just got the Honest Trailers treatment! Ever wonder how to spend $100 million? Apparently, the answer is two tornadoes and a bucket of Glen Powell’s charm! ️️ Watch as this blockbuster blows throu…',
  //   url: 'https://www.geeksaresexy.net/2024/08/28/twisters-gets-the-honest-trailers-treatment/',
  //   urlToImage:
  //     'https://gas-1b43b.kxcdn.com/wp-content/uploads/2024/08/twisters.jpg',
  //   publishedAt: new Date('2024-08-28T11:26:21Z'),
  //   content:
  //     'Grab your umbrellas and hold on to your cows, because Twister$ just got the Honest Trailers treatment! Ever wonder how to spend $100 million? Apparently, the answer is two tornadoes and a bucket of G… [+151 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: '9to5google.com',
  //   },
  //   author: 'Abner Li',
  //   title: 'Google Clock rolling out new Timer Starter widget',
  //   description:
  //     'The last big update to Google Clock introduced weather integration on Pixel devices and the app is now adding a new “Timer Starter” widget.\n\n\n\n more…',
  //   url: 'http://9to5google.com/2024/08/28/google-clock-timer-starter/',
  //   urlToImage:
  //     'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/08/Google-Clock-Timer-Starter-widget-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
  //   publishedAt: new Date('2024-08-28T17:06:27Z'),
  //   content:
  //     'The last big update to Google Clock introduced weather integration on Pixel devices and the app is now adding a new “Timer Starter” widget.\r\nThis widget lets you quickly start a timer, with the defau… [+865 chars]',
  // },
  // {
  //   source: {
  //     id: 'cbc-news',
  //     name: 'CBC News',
  //   },
  //   author: null,
  //   title:
  //     'Namibia killing elephants, hippos to feed people amid worst drought in a century',
  //   description:
  //     "Namibia's government is planning to cull some 700 wild animals, including elephants and hippos, in an effort to provide meat to people facing hunger as the country copes with a historic drought.",
  //   url: 'https://www.cbc.ca/news/world/namibia-drought-elephants-hippos-meat-1.7307523',
  //   urlToImage:
  //     'https://i.cbc.ca/1.7307689.1724885021!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/namibia-elephants-2015.jpg',
  //   publishedAt: new Date('2024-08-29T00:23:20Z'),
  //   content:
  //     "Namibia's government is planning to cull some 700 wild animals, including elephants and hippos, in an effort to provide meat to people facing hunger, as the country copes with a historic drought. \r\nN… [+3208 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Wendy Altschuler, Contributor, \n Wendy Altschuler, Contributor\n https://www.forbes.com/sites/wendyaltschuler/',
  //   title: 'Must-Visit Adventure Travel Destinations For Fall',
  //   description:
  //     'Explore top adventure travel destinations for fall, including hiking in Greece, cycling in Ireland, and desert safaris in Dubai, with fewer crowds and ideal weather.',
  //   url: 'https://www.forbes.com/sites/wendyaltschuler/2024/08/28/adventure-travel-destinations-for-fall/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66ce331ef078d038437b2e66/0x0.jpg?format=jpg&crop=1516,1136,x0,y0,safe&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T14:26:03Z'),
  //   content:
  //     'Hikers are rewarded with beautiful landscapes in Patagonia. \r\nWendy Altschuler \r\nTraveling during the United States shoulder seasons, or when the crush of peak summer tourism has passed, rewards visi… [+5396 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Gia Tskhovrebadze, Forbes Councils Member, \n Gia Tskhovrebadze, Forbes Councils Member\n https://www.forbes.com/councils/forbescoachescouncil/people/giatskhovrebadze/',
  //   title:
  //     'The GINI Framework: How To Navigate A Gloomy, Insecure, Nontransparent And Inconsistent World',
  //   description:
  //     'In this model, I try to reflect the essence of the multifaceted problems of our world and offer a view through which we can see and solve them.',
  //   url: 'https://www.forbes.com/councils/forbescoachescouncil/2024/08/28/the-gini-framework-how-to-navigate-a-gloomy-insecure-nontransparent-and-inconsistent-world/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66ce2ba6052868432d4d9f95/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T11:30:00Z'),
  //   content:
  //     'Gia Tskhovrebadze, PhD, Managing Partner of GT Coaching International.\r\ngetty\r\nIn light of the unprecedented global events, crises and predictions after Covid-19, sometimes it seems that the world ha… [+6963 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Karl Brauer, Contributor, \n Karl Brauer, Contributor\n https://www.forbes.com/sites/kbrauer/',
  //   title: 'Test Driving The 2024 Mazda Miata RF Club: Staying True To Form',
  //   description:
  //     'Between its light weight, perfect front-to-rear balance, nimble handling, and transparent feedback, the Miata has no direct competition in the sub-$45,000 new car market.',
  //   url: 'https://www.forbes.com/sites/kbrauer/2024/08/28/test-driving-the-2024-mazda-miata-rf-club-staying-true-to-form/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66ce37af9f355fa9931a8883/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T10:00:00Z'),
  //   content:
  //     'The 2024 Mazda Miata RF Club receives several upgrades this year\r\nKarl Brauer\r\nAfter more than 35 years in production the Mazda MX-5 Miata is the best-selling roadster in history. The diminutive spor… [+5494 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     "Jeanne O'Brien Coffey, Contributor, \n Jeanne O'Brien Coffey, Contributor\n https://www.forbes.com/sites/jeanneobriencoffey/",
  //   title: 'Go Wild Swimming In Dublin, Just Like The ‘Bad Sisters’',
  //   description:
  //     'At Anantara The Marker Dublin Hotel, guests can follow the lead of the siblings in Sharon Horgan’s black comedy and take a cold plunge in the Irish Sea.',
  //   url: 'https://www.forbes.com/sites/jeanneobriencoffey/2024/08/28/go-wild-swimming-in-dublin-just-like-the-bad-sisters/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66cf4ab7ec44bef02c1b18a5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T16:34:48Z'),
  //   content:
  //     'I am about shin-deep in the Irish Sea, my hands flapping about like hummingbird wings, as I question my judgement. Im gasping for air, as the shock of the chill 50 degree Fahrenheit water laps at my … [+4751 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Monica Sanders, Contributor, \n Monica Sanders, Contributor\n https://www.forbes.com/sites/monicasanders/',
  //   title:
  //     'From Chad To California - Water Crises Cause Dry Wells And Conflicts',
  //   description:
  //     'Innovation and better infrastructure finance are key to solving the coming water crisis. Water scarcity threatens peace, security and economies.',
  //   url: 'https://www.forbes.com/sites/monicasanders/2024/08/28/when-the-well-is-dry-confronting-the-global-water-crisis/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66c27e239e334c7dfd236d99/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T13:30:00Z'),
  //   content:
  //     'MUMBAI, MAHARASHTRA, INDIA - Villagers in Telamwadi village near Mumbai face acute water scarcity ... [+] during the summer as they get limited water supply from a well which is insufficient for thei… [+4686 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Carlton Reid, Senior Contributor, \n Carlton Reid, Senior Contributor\n https://www.forbes.com/sites/carltonreid/',
  //   title:
  //     'How Ancient Rome Restricted Four-Wheeled Traffic And Why Cargobikes Are Best For Modern Cities',
  //   description:
  //     'Romans used stone posts to restrict passage to carriages. Could the extended introduction of such measures today free cities of congestion?',
  //   url: 'https://www.forbes.com/sites/carltonreid/2024/08/28/how-ancient-rome-restricted-wheeled-traffic-and-why-cargobikes-are-best-for-todays-cities/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66cf492e2386102424336ad4/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T16:27:27Z'),
  //   content:
  //     'Wheeled traffic restriction blocks on Via dellAbbondanza (Street of Abundance), Pompeii.\r\nCarlton Reid\r\nNow thatfinally!Italys Via Appia, or Appian Way, has been named a UNESCO world heritage site it… [+7866 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Terri Williams, Contributor, \n Terri Williams, Contributor\n https://www.forbes.com/sites/terriwilliams/',
  //   title:
  //     '9 Misconceptions About Saving Energy At Home That Could Cost You Money',
  //   description:
  //     'Some energy tips save you money, while others could actually cause your electricity bill to skyrocket. Learn to separate truth from fiction.',
  //   url: 'https://www.forbes.com/sites/terriwilliams/2024/08/28/9-misconceptions-about-saving-energy-at-home-that-could-cost-you-money/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66ceb2fce981a147cf24e119/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T05:28:24Z'),
  //   content:
  //     'A smart thermostat can help control your HVAC.\r\ngetty\r\nSavvy homeowners are always looking for ways to lower their electricity bills which, in turn, will help them save money and also help the enviro… [+7706 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Forbes',
  //   },
  //   author:
  //     'Cecilia Rodriguez, Senior Contributor, \n Cecilia Rodriguez, Senior Contributor\n https://www.forbes.com/sites/ceciliarodriguez/',
  //   title:
  //     '14 Beautiful, Startling Wild Animals Images: A First Look At Wildlife Photographer Of The Year 2024 Competition',
  //   description:
  //     "This year the prestigious Natural History Museum's competition, celebrating its 60th anniversary, attracted a record 59,228 entries. These amazing, highly-commended images are an appetizer.",
  //   url: 'https://www.forbes.com/sites/ceciliarodriguez/2024/08/28/14-beautiful-startling-wild-animals-images-a-first-look-at-wildlife-photographer-of-the-year-2024-competition/',
  //   urlToImage:
  //     'https://imageio.forbes.com/specials-images/imageserve/66cee4d90396edf844f6a655/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
  //   publishedAt: new Date('2024-08-28T23:00:00Z'),
  //   content:
  //     "Leaving the Nest, Highly Commended, 10 Years and Under; tawny owlets ready to leave their parent's ... [+] nest\r\nSasha Jumanca, Germany/Romania - Wildlife Photographer of the Year 2024\r\nFor this year… [+12437 chars]",
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'The Atlantic',
  //   },
  //   author: 'Noah Shachtman',
  //   title: 'New York City’s Chaos Mayor',
  //   description:
  //     'Eric Adams ran as a law-and-order candidate. But too often he creates his own drama.',
  //   url: 'https://www.theatlantic.com/politics/archive/2024/08/eric-adams-nyc-mayor-drama/679630/?utm_source=feed',
  //   urlToImage: null,
  //   publishedAt: new Date('2024-08-28T11:00:00Z'),
  //   content:
  //     'Eric Adams sounded certain—his city was in crisis. It was September 6, 2023. The mayor of New York was standing in a public-school gym on the West Side of Manhattan, in his shirtsleeves, mic in one h… [+20147 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Coolmaterial.com',
  //   },
  //   author: 'Alex Borkowski',
  //   title: 'The 6 Best Crewneck Sweatshirts for Any Season',
  //   description:
  //     "Men's sweatshirts can get heavy. But the best crewneck sweatshirts are great for cool summer nights, too. Lightweight and midweight picks and relaxed fits here.",
  //   url: 'https://coolmaterial.com/fashion/best-lightweight-crewneck-sweatshirts/',
  //   urlToImage:
  //     'https://coolmaterial.com/wp-content/uploads/2024/08/The-6-Best-Crewneck-Sweatshirts-for-Any-Season.jpg',
  //   publishedAt: new Date('2024-08-28T10:43:50Z'),
  //   content:
  //     'Its a little ridiculous to be writing this in the aftermath of a heat dome that absolutely decimated any plans I had a few weeks ago, but hear me out: These hot summer nights wont last forever. The n… [+1386 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'autosport.com',
  //   },
  //   author: 'Matt Somerfield',
  //   title: 'How Red Bull is still improving its RB20 despite upgrade doubts',
  //   description:
  //     'Max Verstappen’s suspicion that something has “gone wrong” with Red Bull’s RB20 explains why the Formula 1 team was experimenting with some older specification parts at Zandvoort last weekend.In an attempt to get to the bottom of what has made its 2024 challe…',
  //   url: 'https://www.autosport.com/f1/news/how-red-bull-is-still-improving-its-rb20-despite-upgrade-doubts/10648557/',
  //   urlToImage:
  //     'https://cdn-4.motorsport.com/images/amp/2jX1ZM96/s6/red-bull-racing-rb20-side-view.jpg',
  //   publishedAt: new Date('2024-08-28T15:42:31Z'),
  //   content:
  //     'Max Verstappens suspicion that something has gone wrong with Red Bulls RB20 explains why the Formula 1 team was experimenting with some older specification parts at Zandvoort last weekend.\r\nIn an att… [+5086 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'The Gadgeteer',
  //   },
  //   author: 'Guanshan Fix',
  //   title: 'ACOPOWER LiONCooler Pro Portable Solar Fridge Freezer review',
  //   description:
  //     'REVIEW – Keeping food from spoiling has been the bane of human existence since the cavemen. Smoking and dehydration were the only ways to preserve anything for longer than a few days until the 1800’s when refrigeration was invented. This new fangled technolog…',
  //   url: 'https://the-gadgeteer.com/2024/08/28/acopower-lioncooler-pro-portable-solar-fridge-freezer-review/',
  //   urlToImage:
  //     'https://the-gadgeteer.com/wp-content/uploads/2024/08/AcoPower-Cooler-2.jpg',
  //   publishedAt: new Date('2024-08-28T12:55:58Z'),
  //   content:
  //     'If you buy something from a link in this article, we may earn a commission. Learn more\r\nREVIEW Keeping food from spoiling has been the bane of human existence since the cavemen. Smoking and dehydrati… [+9096 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Neowin',
  //   },
  //   author: 'Martin Hodás',
  //   title:
  //     'Bad day: Falcon 9 crashes upon landing after a record 23 flights, Polaris Dawn postponed',
  //   description:
  //     'Today, SpaceX experienced a series of bad luck. Weather stopped a historic crewed mission from launching, and another Falcon 9 rocket crashed upon landing, halting the third planned flight, too. Read more...',
  //   url: 'https://www.neowin.net/news/bad-day-falcon-9-crashes-upon-landing-after-a-record-23-flights-polaris-dawn-postponed/',
  //   urlToImage:
  //     'https://cdn.neowin.com/news/images/uploaded/2024/08/1724835621_f9_landing_fail_ico_story.jpg',
  //   publishedAt: new Date('2024-08-28T09:36:01Z'),
  //   content:
  //     'SpaceX had a busy morning today. It planned a historic crewed mission, Polaris Dawn, and two back-to-back Starlink launches from Florida and California. Things didnt go as planned, though.\r\nFirst, Sp… [+2162 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Everything-everywhere.com',
  //   },
  //   author: 'Gary Arndt',
  //   title: 'Exercise Tiger: The Disastrous Rehearsal for D-Day',
  //   description:
  //     'Podcast Transcript The Allied invasion of Normandy was one of the most complex military operations ever conducted. Thousands of ships and planes had to work in conjunction with tens of thousands of soldiers who had to do one of the most difficult things in wa…',
  //   url: 'https://everything-everywhere.com/exercise-tiger-the-disastrous-rehearsal-for-d-day/',
  //   urlToImage:
  //     'https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-mV7LG6b/0/KKdv9GC8WD7h5SjpsxFMbXLRhJRt52pnf2MXTksvG/L/1513epart-L.jpg',
  //   publishedAt: new Date('2024-08-28T08:24:50Z'),
  //   content:
  //     'Subscribe Apple | Spotify | Amazon |iHeart Radio | Player.FM | TuneInCastbox | Podurama | Podcast Republic | RSS | Patreon\r\nThe Allied invasion of Normandy was one of the most complex military operat… [+11636 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Live Science',
  //   },
  //   author: 'Sharmila Kuthunur',
  //   title:
  //     "Large patch of the Atlantic Ocean near the equator has been cooling at record speeds — and scientists can't figure out why",
  //   description:
  //     'Scientists are trying to decipher what drove the recent dramatic cooling of the tropical Atlantic, but so far few clues have emerged. "We are still scratching our heads as to what\'s actually happening," the researchers said.',
  //   url: 'https://www.livescience.com/planet-earth/climate-change/large-patch-of-the-atlantic-ocean-near-the-equator-has-been-cooling-at-record-speeds-and-scientists-can-t-figure-out-why',
  //   urlToImage:
  //     'https://cdn.mos.cms.futurecdn.net/mbCSLnDYECHcfALHmZcixU-1200-80.jpg',
  //   publishedAt: new Date('2024-08-28T20:39:49Z'),
  //   content:
  //     'For a few months this summer, a large strip of Atlantic Ocean along the equator cooled at record speed. Though the cold patch is now warming its way back to normal, scientists are still baffled by wh… [+4620 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Theinspiredroom.net',
  //   },
  //   author: 'Melissa @ The Inspired Room',
  //   title: 'This Fall: Create A Home That Tells Your Story',
  //   description:
  //     'So much of our lives revolve around whatever place we call home. As we head into the fall and winter months, we need our surroundings to be a shelter from the storms outside. We want a safe, beautiful and comfortable place to weather whatever challenges come …',
  //   url: 'https://theinspiredroom.net/this-fall-create-a-home-that-tells-your-story/',
  //   urlToImage:
  //     'https://theinspiredroom.net/wp-content/uploads/2024/08/fall-living-room-built-in-bench-plaid-blanket-fall-decorating-the-inspired-room.jpg',
  //   publishedAt: new Date('2024-08-28T22:43:46Z'),
  //   content:
  //     'Plaid Blanket Source\r\nSo much of our lives revolve around whatever place we call home. As we head into the fall and winter months, we need our surroundings to be a shelter from the storms outside. We… [+1778 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Daily Beast',
  //   },
  //   author: 'Dan Ladden-Hall',
  //   title:
  //     'Elon Musk’s SpaceX Booster Topples Over on Fire During Botched Landing',
  //   description:
  //     'SpaceX/X\r\nElon Musk’s SpaceX canceled the second of two scheduled satellite launches early Wednesday after one of its rocket boosters burst into flames and fell over after landing.The Falcon 9’s first stage toppled as it touched down on a drone ship stationed…',
  //   url: 'https://www.thedailybeast.com/elon-musks-spacex-booster-topples-over-on-fire-during-botched-landing',
  //   urlToImage:
  //     'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1080,w_1920,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1724855180/Screenshot_2024-08-28_at_15.25.59_2_d28ixg',
  //   publishedAt: new Date('2024-08-28T15:46:30Z'),
  //   content:
  //     'Elon Musks SpaceX canceled the second of two scheduled satellite launches early Wednesday after one of its rocket boosters burst into flames and fell over after landing.\r\nThe Falcon 9s first stage to… [+1225 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Daily Beast',
  //   },
  //   author: 'Tom Sykes',
  //   title: 'Why King Charles Is Refusing to Sleep in His Luxury Castle',
  //   description:
  //     'Jan Kruger/Getty Images\r\nKing Charles is spending most of his time on holiday in Scotland at his own home, Birkhall, and is not sleeping at Balmoral Castle with the rest of the vacationing royal family, the Daily Beast understands.The cancer-hit king is spend…',
  //   url: 'https://www.thedailybeast.com/king-charles-is-not-sleeping-at-balmoral-while-on-vacation',
  //   urlToImage:
  //     'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2417,w_4297,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1724800767/240827-sykes-king-charles-balmoral-hero_vixf4f',
  //   publishedAt: new Date('2024-08-28T09:00:23Z'),
  //   content:
  //     'King Charles is spending most of his time on holiday in Scotland at his own home, Birkhall, and is not sleeping at Balmoral Castle with the rest of the vacationing royal family, the Daily Beast under… [+6517 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Consequence.net',
  //   },
  //   author: 'Alex Young',
  //   title: 'Allow Jack White to Reintroduce Himself',
  //   description:
  //     'On his latest tour, White has found a way to strip away the expectations and uncover a new, reinvigorating path -- that, as Johnny Guitar.\nAllow Jack White to Reintroduce Himself\nAlex Young',
  //   url: 'https://consequence.net/2024/08/jack-white-review-930-club/',
  //   urlToImage:
  //     'https://consequence.net/wp-content/uploads/2024/08/Jack-White-930-Club.jpeg',
  //   publishedAt: new Date('2024-08-28T14:16:52Z'),
  //   content:
  //     'There is no one quite like Jack White.\r\nHe’s a garage rocker who is also a blues guitarist. A perfectionist who is also a master improviser. A stadium act who prefers playing in a club. And a rock le… [+4148 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'MarketWatch',
  //   },
  //   author: 'Richard Eisenberg',
  //   title:
  //     'Retiring abroad? Why the best, happiest places to grow older and retire are not where you’d expect.',
  //   description: 'High taxes, high costs and cold weather. What’s not to love?',
  //   url: 'https://www.marketwatch.com/story/retiring-abroad-why-the-best-happiest-places-to-grow-older-and-retire-are-not-where-youd-expect-eaed039a',
  //   urlToImage:
  //     'https://s.yimg.com/ny/api/res/1.2/WtCC.pcBd_audYz7k3j5Zw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/marketwatch_hosted_869/fb9f00f7efbdae0182845f91560d971b',
  //   publishedAt: new Date('2024-08-28T14:08:00Z'),
  //   content:
  //     'Norway is a magical place. The village of Alesund from Mount Aksla in Norway. - Getty Images\r\nThose international best places to retire surveys typically point to warm, low-cost countries in Central … [+7318 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'BMWBLOG',
  //   },
  //   author: 'Horatiu Boeriu',
  //   title: '2025 BMW X3 Gets Sportier: Discover the New M Performance Parts',
  //   description:
  //     "Discover the latest M Performance parts for the 2024 BMW X3, designed to enhance both style and performance. From carbon fiber accents to weight-optimized alloy wheels, these upgrades add a sporty edge to the X3's versatile design. Explore how BMW is taking c…",
  //   url: 'https://www.bmwblog.com/2024/08/28/bmw-x3-m-performance-parts-upgrades/',
  //   urlToImage:
  //     'https://cdn.bmwblog.com/wp-content/uploads/2024/08/2025-bmw-x3-m-performance-parts-08.jpg',
  //   publishedAt: new Date('2024-08-28T22:34:12Z'),
  //   content:
  //     'BMW has always been known for offering a variety of aero parts and accessories for their new vehicles, and the latest news from Munich confirms that the 2025 BMW X3 is stepping up its game as well. W… [+3042 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'SamMobile',
  //   },
  //   author: 'Mihai Matei',
  //   title: 'The one thing I like about Bixby Voice isn’t what you imagine',
  //   description:
  //     "While some people swear by voice-controlled digital assistants and love using things like Amazon Alexa, in my experience, they are a cool concept on paper but one that hasn't found its way into my daily life. Well, almost. I admit I barely use voice assistant…",
  //   url: 'https://www.sammobile.com/opinion/one-thing-i-like-about-bixby-voice-is-not-what-you-imagine/',
  //   urlToImage:
  //     'https://www.sammobile.com/wp-content/uploads/2023/08/Bixby-5-720x405.jpg',
  //   publishedAt: new Date('2024-08-28T16:37:59Z'),
  //   content:
  //     "While some people swear by voice-controlled digital assistants and love using things like Amazon Alexa, in my experience, they are a cool concept on paper but one that hasn't found its way into my da… [+2356 chars]",
  // },
  // {
  //   source: {
  //     id: 'espn',
  //     name: 'ESPN',
  //   },
  //   author: 'Mike Sheets',
  //   title: 'Fantasy baseball pitcher rankings, lineup advice for Thursday',
  //   description:
  //     'Everything you need to know to place your MLB bets and set your fantasy baseball lineups for Thursday, August 29.',
  //   url: 'https://www.espn.com/fantasy/baseball/story/_/id/41024045/fantasy-baseball-pitcher-rankings-lineup-advice-mlb-espn-daily-notes-thursday-august-29-2024',
  //   urlToImage:
  //     'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0824%2Fr1377207_1296x729_16%2D9.jpg',
  //   publishedAt: new Date('2024-08-28T22:10:21Z'),
  //   content:
  //     'Look for our fantasy baseball starting pitcher rankings, hitter upgrades and downgrades daily to help you make smart fantasy baseball lineup decisions and for MLB betting tips. MLB game odds are prov… [+5826 chars]',
  // },
  // {
  //   source: {
  //     id: null,
  //     name: 'Wordpress.com',
  //   },
  //   author: 'Wilhelm Arcturus',
  //   title: 'Breezing Through Vortex Pinnacle',
  //   description:
  //     'It is a weather joke because Vortex Pinnacle is all about the weather… though wind and lightning predominate. Once again we met up in Cataclysm Classic, and Vortex Pinnacle was the next instance on our list.  It is out in Uldum, high up in the clouds at the s…',
  //   url: 'https://tagn.wordpress.com/2024/08/28/breezing-through-vortex-pinnacle/',
  //   urlToImage:
  //     'https://tagn.wordpress.com/wp-content/uploads/2024/08/cc16_vortexvista.jpg',
  //   publishedAt: new Date('2024-08-28T14:15:15Z'),
  //   content:
  //     'It is a weather joke because Vortex Pinnacle is all about the weather… though wind and lightning predominate.\r\nOnce again we met up in Cataclysm Classic, and Vortex Pinnacle was the next instance on … [+8457 chars]',
  // },
];
